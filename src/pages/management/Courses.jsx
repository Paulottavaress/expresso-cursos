import React, { useEffect, useContext, useState } from 'react';
import CartContext from '../../context/cart/cartContext';
import { serializeCourses } from '../../utils/AddToCartAutomatically';
import ptBr from '../../internationalization/pt-br';
import { capitalizeFirstLetter } from '../../utils/FormatString';
import { parseType } from '../../utils/ParseType'
import AlertContext from '../../context/alert/alertContext';

const Courses = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const cartContext = useContext(CartContext);
  let { availableCourses } = cartContext;

  const [selectedOptions, setSelectedOptions] = useState([]);

  const selectedOptionsIds = () => {
    const selectedOptionsIds = [];
    selectedOptions.forEach(option => selectedOptionsIds.push(option[0]));
    return selectedOptionsIds;
  }

  const handleSelect = (option) => {
    const selectedCourse = availableCourses.filter(course => course[0] === option.target.value);
    const isDuplicate = selectedOptions.some(option => JSON.stringify(option) === JSON.stringify(selectedCourse[0]));

    if (isDuplicate) setSelectedOptions(selectedOptions.filter(option => option[0] !== selectedCourse[0][0]));
    else setSelectedOptions([...selectedOptions, selectedCourse[0]]);
  };

  useEffect(() => {
    let selectedOptionsNames = [];
    selectedOptions.forEach((option) => selectedOptionsNames.push(`${option[1].name} - ${option[1].type}`));

    const coursesInput = document.querySelector('#selected-courses-input');
    coursesInput.value = selectedOptionsNames.join(', ');
  }, [selectedOptions]);

  const serializeUrl = (() => {
    if (selectedOptionsIds().length === 0) {
      setAlert({
        type: 'danger',
        text:capitalizeFirstLetter(ptBr.mCurses['errSelectACourse']),
        time: 5000
      });

      return;
    };

    const serializedCourses = serializeCourses(selectedOptionsIds());
    const url = window.location.origin + '/carrinho?courses=' + serializedCourses;
    const serializeButton = document.querySelector('#serialize-url-area #serialize-url-input');
    serializeButton.value = url;
  });

  return (
    <>
      <div id='management-courses-page'>
        <form id='serialize-url-form' onSubmit={(event) => event.preventDefault()}>
          <div id='select-courses-area'>
            <label htmlFor='select-courses-select'>{capitalizeFirstLetter(ptBr.mCurses['selectCourses'])}:</label>
            <select id='select-courses-select' onChange={handleSelect}>
              <option disabled selected value>{capitalizeFirstLetter(ptBr.mCurses['select'])}</option>
              {availableCourses && availableCourses.map(course => (
                <option value={course[0]} key={course[0]}>{course[1].name} - {parseType(course[1].type)}</option>
              ))}
            </select>
          </div>
          <div id='selected-courses-area'>
            <label htmlFor='selected-courses-input'>{capitalizeFirstLetter(ptBr.mCurses['selectedCourses'])}</label>
            <input id='selected-courses-input' readOnly type='text' />
          </div>
          <div id='serialize-url-area'>
            <label htmlFor='serialize-url-input'>{capitalizeFirstLetter(ptBr.mCurses['generatedUrl'])}</label>
            <div id='serialize-url-generate-area'>
              <input id='serialize-url-input' readOnly type='text' />
              <button id='serialize-url-btn' onClick={() => serializeUrl()}>{capitalizeFirstLetter(ptBr.mCurses['serialize'])}</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};

export default Courses;