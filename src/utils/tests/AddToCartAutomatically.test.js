import { serializeCourses ,addToCartAutomatically } from "../AddToCartAutomatically";

test('should serialize one course', () => {
    const course = ['b05a64e1-bc67-45ac-b50e-e228b5af5cf9'];
    const serializedCourse = serializeCourses(course);
    expect(serializedCourse).toBe('%5B%22b05a64e1-bc67-45ac-b50e-e228b5af5cf9%22%5D');
});

test('should serialize more than one course', () => {
    const courses = ['b05a64e1-bc67-45ac-b50e-e228b5af5cf9', 'bf3d8cd1-dc4b-4fb9-964c-77ce3ccd5f86'];
    const serializedCourses = serializeCourses(courses);
    expect(serializedCourses).toBe('%5B%22b05a64e1-bc67-45ac-b50e-e228b5af5cf9%22%2C%22bf3d8cd1-dc4b-4fb9-964c-77ce3ccd5f86%22%5D');
});

const availableCourses = [["b05a64e1-bc67-45ac-b50e-e228b5af5cf9",{"image":"assets/images/backgrounds/mopp.jpeg","name":"MOPP","sellingPage":"/cursos/mopp/formacao","type":"formacao","value":289.99}],["b05a64e1-ead1-4193-85fb-f44d7786825b",{"image":"assets/images/backgrounds/mopp.jpeg","name":"MOPP","sellingPage":"/cursos/mopp/atualizacao","type":"atualizacao","value":289.99}],["bf3d8cd1-c741-431f-86fa-831e235b3be3",{"image":"assets/images/backgrounds/indivisible-load.jpg","name":"Transporte de Carga Indivisível","sellingPage":"/cursos/transporte-carga-indivisivel/formacao","type":"formacao","value":289.99}],["bf3d8cd1-dc4b-4fb9-964c-77ce3ccd5f86",{"image":"assets/images/backgrounds/indivisible-load.jpg","name":"Transporte de Carga Indivisível","sellingPage":"/cursos/transporte-carga-indivisivel/atualizacao","type":"atualizacao","value":289.99}],["cd215e96-91fd-4d5a-b445-4918bd9e5472",{"image":"assets/images/backgrounds/bus.jpg","name":"Transporte Coletivo","sellingPage":"/cursos/transporte-coletivo/atualizacao","type":"atualizacao","value":289.99}],["cd215e96-e97c-47e9-97f9-ed6c5b74795f",{"image":"assets/images/backgrounds/bus.jpg","name":"Transporte Coletivo","sellingPage":"/cursos/transporte-coletivo/formacao","type":"formacao","value":289.99}],["d12e3344-1e40-4ef7-8bac-09e6c1127644",{"image":"assets/images/backgrounds/school-bus.jpg","name":"Transporte Escolar","sellingPage":"/cursos/transporte-escolar/atualizacao","type":"atualizacao","value":289.99}],["d12e3344-de8a-42f0-a98a-ead67da3c988",{"image":"assets/images/backgrounds/school-bus.jpg","name":"Transporte Escolar","sellingPage":"/cursos/transporte-escolar/formacao","type":"formacao","value":289.99}],["d2693c92-73a0-4a05-b460-55667eff2b3a",{"image":"assets/images/backgrounds/ambulance.jpg","name":"Veículos de Emergência","sellingPage":"/cursos/veiculos-de-emergencia/atualizacao","type":"atualizacao","value":289.99}],["d2693c92-d17d-40bd-baa3-647008677afa",{"image":"assets/images/backgrounds/ambulance.jpg","name":"Veículos de Emergência","sellingPage":"/cursos/veiculos-de-emergencia/formacao","type":"formacao","value":289.99}]];

test('should not find a course to serialize', () => {
    const searchParams = '';
    addToCartAutomatically(availableCourses, searchParams);
    const cart = localStorage.getItem('expresso-cursos-cart');
    expect(cart).toBe(null);
});

test('should add one serialized course to the local storage', () => {
    const searchParams = '?courses=%5B%22b05a64e1-bc67-45ac-b50e-e228b5af5cf9%22%5D';
    addToCartAutomatically(availableCourses, searchParams);
    const cart = localStorage.getItem('expresso-cursos-cart');
    expect(cart).toBe('[["b05a64e1-bc67-45ac-b50e-e228b5af5cf9",{"image":"assets/images/backgrounds/mopp.jpeg","name":"MOPP","sellingPage":"/cursos/mopp/formacao","type":"formacao","value":289.99}]]');
});

test('should add two serialized courses to the local storage', () => {
    const searchParams = '?courses=%5B%22cd215e96-e97c-47e9-97f9-ed6c5b74795f%22%2C%22d12e3344-de8a-42f0-a98a-ead67da3c988%22%5D';
    addToCartAutomatically(availableCourses, searchParams);
    const cart = localStorage.getItem('expresso-cursos-cart');
    expect(cart).toBe('[["cd215e96-e97c-47e9-97f9-ed6c5b74795f",{"image":"assets/images/backgrounds/bus.jpg","name":"Transporte Coletivo","sellingPage":"/cursos/transporte-coletivo/formacao","type":"formacao","value":289.99}],["d12e3344-de8a-42f0-a98a-ead67da3c988",{"image":"assets/images/backgrounds/school-bus.jpg","name":"Transporte Escolar","sellingPage":"/cursos/transporte-escolar/formacao","type":"formacao","value":289.99}]]');
});

test('should add two serialized courses to the local storage when the cart is already populated with one course', () => {
    localStorage.setItem('expresso-cursos-cart', '[["b05a64e1-bc67-45ac-b50e-e228b5af5cf9",{"image":"assets/images/backgrounds/mopp.jpeg","name":"MOPP","sellingPage":"/cursos/mopp/formacao","type":"formacao","value":289.99}]]');
    const searchParams = '?courses=%5B%22cd215e96-e97c-47e9-97f9-ed6c5b74795f%22%2C%22d12e3344-de8a-42f0-a98a-ead67da3c988%22%5D';
    addToCartAutomatically(availableCourses, searchParams);
    const cart = localStorage.getItem('expresso-cursos-cart');
    expect(cart).toBe('[["cd215e96-e97c-47e9-97f9-ed6c5b74795f",{"image":"assets/images/backgrounds/bus.jpg","name":"Transporte Coletivo","sellingPage":"/cursos/transporte-coletivo/formacao","type":"formacao","value":289.99}],["d12e3344-de8a-42f0-a98a-ead67da3c988",{"image":"assets/images/backgrounds/school-bus.jpg","name":"Transporte Escolar","sellingPage":"/cursos/transporte-escolar/formacao","type":"formacao","value":289.99}]]');
});
