export const parseType = type => {
  return type === 'formacao' ? 'formação' : 'atualização';
};

export const upperCaseParseType = type => {
  return (type === 'formacao' ? 'formação' : 'atualização').toUpperCase();
};

export const firstLetterUpperCaseParseType = type => {
  return (type === 'formacao' ? 'Formação' : 'Atualização');
};

export const reverseParseType = type => {
  return type === 'formacao' ? 'atualização' : 'formação';
}

export const reverseUpperCaseParseType = type => {
  return (type === 'formacao' ? 'atualização' : 'formação').toUpperCase();
}

export const reverseFirstLetterUpperCaseParseType = type => {
  return (type === 'formacao' ? 'Atualização' : 'Formação');
}