export const capitalizeFirstLetter = str => {
  return str 
    ? str.trim()[0].toUpperCase() + str.trim().slice(1)
    : '';
};