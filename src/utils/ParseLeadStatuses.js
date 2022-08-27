export const colorStatuses = status => {
  switch (status) {
    case 'Registration completed':
      return '#2AC511';
    case 'Purchase completed':
      return '#FBAB11';
    case 'Awaiting compensation':
      return '#FAFF0A';
    case 'Pending payment':
      return '#1C9EC7';
    case 'Form filled':
      return '#37B4B4';
    case 'In contact':
      return '#646532';
    case 'Withdrawal':
      return '#0D0D0C';
    default:
      return '#ffffff'
  }
};

export const translateStatuses = status => {
  switch (status) {
    case 'Registration completed':
      return 'Cadastro concluído';
    case 'Purchase completed':
      return 'Compra concluída';
    case 'Awaiting compensation':
      return 'Aguardando compensação';
    case 'Pending payment':
      return 'Pagamento pendente';
    case 'Form filled':
      return 'Formulário preenchido';
    case 'In contact':
      return 'Em contato';
    case 'Withdrawal':
      return 'Desistência';
    default:
      return 'Outro'
  }
};