export const FormatDate = date => {
  if (typeof date === 'string') {
    const splittedDate = date.split('/');
    let formattedDate = splittedDate[1] + '/' + splittedDate[0] + '/' + splittedDate[2];
  
    return new Date(formattedDate).getTime();
  }

  return date;
}

export const ISOtoBRDate = date => {
  if (typeof date === 'string') {
    const splittedDate = date.split('-');
    let formattedDate = splittedDate[2] + '/' + splittedDate[1] + '/' + splittedDate[0];
  
    return formattedDate;
  }

  return date;
}