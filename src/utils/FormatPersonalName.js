export const uppercaseAllPersonalNames = personalName => {
  const nameArr = personalName.trim().split(' ');

  nameArr.forEach((name, i) => {
    let firstLetter = name.charAt(0).toUpperCase();
    nameArr[i] = firstLetter + name.slice(1).toLowerCase();
  });

  const output = (nameArr.length === 1)
    ? nameArr[0]
    : nameArr[0] + ' ' + nameArr[nameArr.length - 1];

  return output;
};

export const firstAndLastNames = personalName => {
  const nameArr = personalName.trim().split(' '); 

  return nameArr[0] + ' ' + nameArr[nameArr.length - 1];
};

export const firstAndLastNamesInitials = personalName => {
  const nameArr = firstAndLastNames(personalName).split(' ');
  let output = '';

  nameArr.forEach(name => output += name[0]);

  return output;
};