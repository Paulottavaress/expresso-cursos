export const serializeCourses = (courses) => {
  const serializeCourses = encodeURIComponent(JSON.stringify(courses));

  return serializeCourses;
};

export const addToCartAutomatically = (availableCourses, searchParams = window.location.search) => {
  const params = new URLSearchParams(searchParams);
  const serializedCourses = params.get('courses');

  if (serializedCourses) {
    const coursesIds = JSON.parse(decodeURIComponent(serializedCourses));
    const courses = [];

    coursesIds.forEach(id => courses.push(availableCourses.filter((course => course[0] === id))[0]));
   
    localStorage.setItem('expresso-cursos-cart', JSON.stringify(courses));

    return true;
  };

  return false;
};