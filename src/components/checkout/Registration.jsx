import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';
import AlertContext from '../../context/alert/alertContext';
import CheckoutContext from '../../context/checkout/checkoutContext';

const Registration = ({ nextPage }) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const checkoutContext = useContext(CheckoutContext);
  const { 
    setRegistrationInfo,
    registrationInfo
  } = checkoutContext;

  const navigate = useNavigate();

  let isError = false;
  let errorMsg = '';

  const onChange = e => {
    if (e.target.name === 'zipCode' && e.target.value.trim().length === 9 && registrationInfo.country === 'Brasil') getCep(e.target.value);

    setRegistrationInfo(e);
  };

  const getCep = (cep) => {
    fetch(process.env.REACT_APP_CEP_API + cep + '/json/', {
      method: "GET"
    }).then((res) => {
      return res.json();
    }).then(data => {
      if (!data.hasOwnProperty('erro')) {
        const clickedFieldClasses = ['css-1r74e2h-MuiFormLabel-root-MuiInputLabel-root', 'MuiInputLabel-shrink', 'MuiFormLabel-filled'];
        const unclickedFieldClass = 'css-18nu0jg-MuiFormLabel-root-MuiInputLabel-root';

        const address = {
          target: {}
        };

        address.target.name = 'address';
        address.target.value = document.getElementById('form__address').value =`${data.logradouro}`;
        setRegistrationInfo(address);

        if (data.logradouro) {
          const addressFieldLabel = document.querySelector('#form__address_container label');
          addressFieldLabel.classList.remove(unclickedFieldClass);
          clickedFieldClasses.forEach(fieldClass => addressFieldLabel.classList.add(fieldClass));
        }
        
        const addressComplement = {
          target: {}
        };

        addressComplement.target.name = 'addressComplement';
        addressComplement.target.value = document.getElementById('form__address-complement').value =`${data.complemento}`;
        setRegistrationInfo(addressComplement);

        if (data.complemento) {
          const addressComplementFieldLabel = document.querySelector('#form__address-complement_container label');
          addressComplementFieldLabel.classList.remove(unclickedFieldClass);
          clickedFieldClasses.forEach(fieldClass => addressComplementFieldLabel.classList.add(fieldClass));
        }

        const neighbourhood = {
          target: {}
        };

        neighbourhood.target.name = 'neighbourhood';
        neighbourhood.target.value = document.getElementById('form__neighbourhood').value =`${data.bairro}`;
        setRegistrationInfo(neighbourhood);

        if (data.bairro) {
          const neighbourhoodFieldLabel = document.querySelector('#form__neighbourhood_container label');
          neighbourhoodFieldLabel.classList.remove(unclickedFieldClass);
          clickedFieldClasses.forEach(fieldClass => neighbourhoodFieldLabel.classList.add(fieldClass));
        }
  
        const city = {
          target: {}
        };

        city.target.name = 'city';
        city.target.value = document.getElementById('form__city').value =`${data.localidade}`;
        setRegistrationInfo(city);

        if (data.localidade) {
          const cityFieldLabel = document.querySelector('#form__city_container label');
          cityFieldLabel.classList.remove(unclickedFieldClass);
          clickedFieldClasses.forEach(fieldClass => cityFieldLabel.classList.add(fieldClass));
        }

        const state = {
          target: {}
        };

        state.target.name = 'state';
        state.target.value = document.getElementById('form_state_brazil').value =`${data.uf}`;
        setRegistrationInfo(state);
      }
    }).catch((err) => {
      console.log('It was no possible to find the CEP:' + cep)
    })
  }

  const validateFields = (e) => {
    e.preventDefault();
    errorMsg = '';
    isError = true;

    const fields = Object.values(registrationInfo);

    const emptyFields = fields.filter(field => field.replace(/[^\w\s]/gi, '') === '');

    if (emptyFields.length >= 2 && registrationInfo.addressComplement !== '') { 
      errorMsg = 'Favor preencher todos os campos. O único campo opcional é o de complemento.';
    } else if (registrationInfo.phoneNumber.trim().length < 11) {
      errorMsg = 'Favor incluir o DDD. O número do telefone deve conter 11 caracteres.';
    } else if (!registrationInfo.email.includes('@') || !registrationInfo.email.includes('.com')) {
      errorMsg = 'Favor inserir um e-mail válido.';
    } else if (validateBirthday()) {
      errorMsg = 'Favor inserir a data de aniversário no formato DD/MM/AAAA, com as barras. Por exemplo: 01/01/2000. Você precisa ser ter 21 anos completos para realizar a compra.';
    } else if (registrationInfo.identificationType === 'PF' && registrationInfo.identificationNumber.trim().length !== 11) {
      errorMsg = 'Favor conferir o CPF inserido. O número deve conter 11 caracteres, sem traços e pontos.';
    } else if (registrationInfo.identificationType === 'PJ' && registrationInfo.identificationNumber.trim().length !== 14) {
      errorMsg = 'Favor conferir o CNPJ inserido. O número deve conter 14 caracteres, sem traços e pontos.';
    } else if (registrationInfo.driversLicenseNumber.trim().length !== 11) {
      errorMsg = 'Favor conferir o CNH inserido. O número deve conter 11 caracteres.';
    } else if (validateCNH()) {
      errorMsg = 'Favor inserir a data de vencimento da CNH no formato DD/MM/AAAA. A sua CNH não pode estar vencida para realizar a compra.';
    } else if (registrationInfo.zipCode.trim().length !== 9) {
      errorMsg = 'Favor conferir o número do CEP inserido. O número deve conter 8 caracteres.';
    } else {
      isError = false;
    }

    if (!isError) {
      nextPage();
    } else {
      setAlert({
        type: 'danger',
        text: errorMsg,
        time: 5000
      });
    }; 
  }

  const validateBirthday = () => {
    const regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    const { birthDate } = registrationInfo;

    if (regex.test(birthDate)) {
      const parts = birthDate.split("/");
      const dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
      const dtCurrent = new Date();

      if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 21) return true;

      if (dtCurrent.getFullYear() - dtDOB.getFullYear() === 21) {
        if (dtCurrent.getMonth() < dtDOB.getMonth()) return true;

        if (dtCurrent.getMonth() === dtDOB.getMonth()) {
          if (dtCurrent.getDate() < dtDOB.getDate()) return true;
        }
      }
      return false;
    }

    return true;
  }

  const validateCNH = () => {
    const splicedDate = registrationInfo.driversLicenseExpiryDate.split('/');
    const formattedDate = moment(splicedDate[1] + '/' + splicedDate[0] + '/' + splicedDate[2]);

    if (!moment(formattedDate)._isValid) return true;

    const now = moment(new Date());
    
    const duration = moment.duration(formattedDate.diff(now));
    const days = duration.asDays();

    if (days < 0) return true;

    return false;
  }

  return (
    <form
      id='form-register'
      onSubmit={(e) => validateFields(e)}
    >
      <div className='form-basic-info bg-secondary p-3'>
        <div className='form-group'>
          <div className='form-field'>
            <TextField
              id='form__full-name'
              name='fullName'
              type='text'
              label='Nome completo'
              variant='standard'
              color='warning'
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <InputMask
              mask="(99) 9 9999 9999"
              onChange={onChange}
              maskChar=" "
            >
              {() => 
                <TextField
                  id='form_phone'
                  name='phoneNumber'
                  type='text'
                  variant='standard'
                  color='warning'
                  label='Celular'
                  required 
                />
              }
            </InputMask>
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <TextField
              id='form-register__cardholderEmail'
              name='email'
              type='text'
              label='E-mail'
              variant='standard'
              color='warning'
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <InputMask
              mask='99/99/9999'
              onChange={onChange}
              maskChar=' '
            >
              {() => 
                <TextField
                  id='form_birth-date'
                  name='birthDate'
                  type='text'
                  variant='standard'
                  color='warning'
                  label='Data de nascimento'
                  required 
                />
              }
            </InputMask>
          </div>
          <div className='form-field'>
            <TextField
              id='form_company'
              name='company'
              type='text'
              variant='standard'
              color='warning'
              label='Empresa para qual trabalha (opcional)'
              onChange={onChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <InputLabel id='form-register__identificationType_label'>Tipo de pessoa</InputLabel>
            <Select
              id='form-register__cardholderEmail'
              labelId='form-register__identificationType_label'
              label='Tipo de pessoa'
              value={registrationInfo.identificationType}
              name='email'
              type='text'
              variant='standard'
              color='warning'
              required
              onChange={onChange}
            >
              <MenuItem value='PF'>Pessoa física</MenuItem>
              <MenuItem value='PJ' disabled>Pessoa jurídica</MenuItem>
            </Select>
          </div>
          <div className='form-field justify-content-end'>
            <InputMask
              mask="999.999.999-99"
              onChange={onChange}
              maskChar=" "
            >
              {() => 
                <TextField
                  id='form-register__identificationNumber'
                  name='identificationNumber'
                  type='text'
                  variant='standard'
                  color='warning'
                  label={registrationInfo.identificationType === 'PF' ? 'CPF' : 'CNPJ'}
                  required 
                />
              }
            </InputMask>
          </div>
          <div className='form-field justify-content-end'>
            <InputMask
              mask="99/99/9999"
              onChange={onChange}
              maskChar=" "
            >
              {() => 
                <TextField
                  id='form_driver-first-license-issue-date'
                  name='firstDriversLicenseIssueDate'
                  type='text'
                  variant='standard'
                  color='warning'
                  label='Data de emissão da primeira habilitação'
                  required 
                />
              }
            </InputMask>
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field justify-content-end'>
            <InputMask
              mask='99999999999'
              onChange={onChange}
              maskChar=' '
            >
              {() => 
                <TextField
                  id='form_driver-license-number'
                  name='driversLicenseNumber'
                  type='text'
                  variant='standard'
                  color='warning'
                  label='Número da CNH'
                  required 
                />
              }
            </InputMask>
          </div>
          <div className='form-field'>
            <InputLabel id='form_driver-license-category_label'>Categoria da CNH</InputLabel>
            <Select
              id='form_driver-license-category'
              labelId='form_driver-license-category_label'
              label='Categoria da CNH'
              value={registrationInfo.driversLicenseCategory}
              name='driversLicenseCategory'
              type='text'
              variant='standard'
              color='warning'
              required
              onChange={onChange}
            >
              <MenuItem value='Categoria A'>Categoria A</MenuItem>
              <MenuItem value='Categoria B'>Categoria B</MenuItem>
              <MenuItem value='Categoria C'>Categoria C</MenuItem>
              <MenuItem value='Categoria D'>Categoria D</MenuItem>
              <MenuItem value='Categoria E'>Categoria E</MenuItem>
              <MenuItem value='Categoria AB'>Categoria AB</MenuItem>
              <MenuItem value='Categoria AC'>Categoria AC</MenuItem>
              <MenuItem value='Categoria AD'>Categoria AD</MenuItem>
              <MenuItem value='Categoria AE'>Categoria AE</MenuItem>
              <MenuItem value='Permissão ACC'>Permissão ACC</MenuItem>
            </Select>
          </div>
          <div className='form-field justify-content-end'>
            <InputMask
              mask="99/99/9999"
              onChange={onChange}
              maskChar=" "
            >
              {() => 
                <TextField
                  id='form_driver-license-expiry-date'
                  name='driversLicenseExpiryDate'
                  type='text'
                  variant='standard'
                  color='warning'
                  label='Data de vencimento da CNH'
                  required 
                />
              }
            </InputMask>
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <InputLabel id='form__country_label'>País</InputLabel>
            <Select
              id='form__country'
              labelId='form__country_label'
              label='País'
              value={registrationInfo.country}
              name='country'
              type='text'
              variant='standard'
              color='warning'
              required
              onChange={onChange}
            >
              <MenuItem value='Brasil'>Brasil</MenuItem>
              <MenuItem value='Afeganistão'>Afeganistão</MenuItem>
              <MenuItem value='África do Sul'>África do Sul</MenuItem>
              <MenuItem value='Albânia'>Albânia</MenuItem>
              <MenuItem value='Alemanha'>Alemanha</MenuItem>
              <MenuItem value='Andorra'>Andorra</MenuItem>
              <MenuItem value='Angola'>Angola</MenuItem>
              <MenuItem value='Anguilla'>Anguilla</MenuItem>
              <MenuItem value='Antilhas Holandesas'>Antilhas Holandesas</MenuItem>
              <MenuItem value='Antárctida'>Antárctida</MenuItem>
              <MenuItem value='Antígua e Barbuda'>Antígua e Barbuda</MenuItem>
              <MenuItem value='Argentina'>Argentina</MenuItem>
              <MenuItem value='Argélia'>Argélia</MenuItem>
              <MenuItem value='Armênia'>Armênia</MenuItem>
              <MenuItem value='Aruba'>Aruba</MenuItem>
              <MenuItem value='Arábia Saudita'>Arábia Saudita</MenuItem>
              <MenuItem value='Austrália'>Austrália</MenuItem>
              <MenuItem value='Áustria'>Áustria</MenuItem>
              <MenuItem value='Azerbaijão'>Azerbaijão</MenuItem>
              <MenuItem value='Bahamas'>Bahamas</MenuItem>
              <MenuItem value='Bahrein'>Bahrein</MenuItem>
              <MenuItem value='Bangladesh'>Bangladesh</MenuItem>
              <MenuItem value='Barbados'>Barbados</MenuItem>
              <MenuItem value='Belize'>Belize</MenuItem>
              <MenuItem value='Benim'>Benim</MenuItem>
              <MenuItem value='Bermudas'>Bermudas</MenuItem>
              <MenuItem value='Bielorrússia'>Bielorrússia</MenuItem>
              <MenuItem value='Bolívia'>Bolívia</MenuItem>
              <MenuItem value='Botswana'>Botswana</MenuItem>
              <MenuItem value='Brunei'>Brunei</MenuItem>
              <MenuItem value='Bulgária'>Bulgária</MenuItem>
              <MenuItem value='Burkina Faso'>Burkina Faso</MenuItem>
              <MenuItem value='Burundi'>Burundi</MenuItem>
              <MenuItem value='Butão'>Butão</MenuItem>
              <MenuItem value='Bélgica'>Bélgica</MenuItem>
              <MenuItem value='Bósnia e Herzegovina'>Bósnia e Herzegovina</MenuItem>
              <MenuItem value='Cabo Verde'>Cabo Verde</MenuItem>
              <MenuItem value='Camarões'>Camarões</MenuItem>
              <MenuItem value='Camboja'>Camboja</MenuItem>
              <MenuItem value='Canadá'>Canadá</MenuItem>
              <MenuItem value='Catar'>Catar</MenuItem>
              <MenuItem value='Cazaquistão'>Cazaquistão</MenuItem>
              <MenuItem value='Chade'>Chade</MenuItem>
              <MenuItem value='Chile'>Chile</MenuItem>
              <MenuItem value='China'>China</MenuItem>
              <MenuItem value='Chipre'>Chipre</MenuItem>
              <MenuItem value='Colômbia'>Colômbia</MenuItem>
              <MenuItem value='Comores'>Comores</MenuItem>
              <MenuItem value='Coreia do Norte'>Coreia do Norte</MenuItem>
              <MenuItem value='Coreia do Sul'>Coreia do Sul</MenuItem>
              <MenuItem value='Costa do Marfim'>Costa do Marfim</MenuItem>
              <MenuItem value='Costa Rica'>Costa Rica</MenuItem>
              <MenuItem value='Croácia'>Croácia</MenuItem>
              <MenuItem value='Cuba'>Cuba</MenuItem>
              <MenuItem value='Dinamarca'>Dinamarca</MenuItem>
              <MenuItem value='Djibouti'>Djibouti</MenuItem>
              <MenuItem value='Dominica'>Dominica</MenuItem>
              <MenuItem value='Egito'>Egito</MenuItem>
              <MenuItem value='El Salvador'>El Salvador</MenuItem>
              <MenuItem value='Emirados Árabes Unidos'>Emirados Árabes Unidos</MenuItem>
              <MenuItem value='Equador'>Equador</MenuItem>
              <MenuItem value='Eritreia'>Eritreia</MenuItem>
              <MenuItem value='Escócia'>Escócia</MenuItem>
              <MenuItem value='Eslováquia'>Eslováquia</MenuItem>
              <MenuItem value='Eslovênia'>Eslovênia</MenuItem>
              <MenuItem value='Espanha'>Espanha</MenuItem>
              <MenuItem value='Estados Federados da Micronésia'>Estados Federados da Micronésia</MenuItem>
              <MenuItem value='Estados Unidos'>Estados Unidos</MenuItem>
              <MenuItem value='Estônia'>Estônia</MenuItem>
              <MenuItem value='Etiópia'>Etiópia</MenuItem>
              <MenuItem value='Fiji'>Fiji</MenuItem>
              <MenuItem value='Filipinas'>Filipinas</MenuItem>
              <MenuItem value='Finlândia'>Finlândia</MenuItem>
              <MenuItem value='França'>França</MenuItem>
              <MenuItem value='Gabão'>Gabão</MenuItem>
              <MenuItem value='Gana'>Gana</MenuItem>
              <MenuItem value='Geórgia'>Geórgia</MenuItem>
              <MenuItem value='Gibraltar'>Gibraltar</MenuItem>
              <MenuItem value='Granada'>Granada</MenuItem>
              <MenuItem value='Gronelândia'>Gronelândia</MenuItem>
              <MenuItem value='Grécia'>Grécia</MenuItem>
              <MenuItem value='Guadalupe'>Guadalupe</MenuItem>
              <MenuItem value='Guam'>Guam</MenuItem>
              <MenuItem value='Guatemala'>Guatemala</MenuItem>
              <MenuItem value='Guernesei'>Guernesei</MenuItem>
              <MenuItem value='Guiana'>Guiana</MenuItem>
              <MenuItem value='Guiana Francesa'>Guiana Francesa</MenuItem>
              <MenuItem value='Guiné'>Guiné</MenuItem>
              <MenuItem value='Guiné Equatorial'>Guiné Equatorial</MenuItem>
              <MenuItem value='Guiné-Bissau'>Guiné-Bissau</MenuItem>
              <MenuItem value='Gâmbia'>Gâmbia</MenuItem>
              <MenuItem value='Haiti'>Haiti</MenuItem>
              <MenuItem value='Honduras'>Honduras</MenuItem>
              <MenuItem value='Hong Kong'>Hong Kong</MenuItem>
              <MenuItem value='Hungria'>Hungria</MenuItem>
              <MenuItem value='Ilha Bouvet'>Ilha Bouvet</MenuItem>
              <MenuItem value='Ilha de Man'>Ilha de Man</MenuItem>
              <MenuItem value='Ilha do Natal'>Ilha do Natal</MenuItem>
              <MenuItem value='Ilha Heard e Ilhas McDonald'>Ilha Heard e Ilhas McDonald</MenuItem>
              <MenuItem value='Ilha Norfolk'>Ilha Norfolk</MenuItem>
              <MenuItem value='Ilhas Cayman'>Ilhas Cayman</MenuItem>
              <MenuItem value='Ilhas Cocos (Keeling)'>Ilhas Cocos (Keeling)</MenuItem>
              <MenuItem value='Ilhas Cook'>Ilhas Cook</MenuItem>
              <MenuItem value='Ilhas Feroé'>Ilhas Feroé</MenuItem>
              <MenuItem value='Ilhas Geórgia do Sul e Sandwich do Sul'>Ilhas Geórgia do Sul e Sandwich do Sul</MenuItem>
              <MenuItem value='Ilhas Malvinas'>Ilhas Malvinas</MenuItem>
              <MenuItem value='Ilhas Marshall'>Ilhas Marshall</MenuItem>
              <MenuItem value='Ilhas Menores Distantes dos Estados Unidos'>Ilhas Menores Distantes dos Estados Unidos</MenuItem>
              <MenuItem value='Ilhas Salomão'>Ilhas Salomão</MenuItem>
              <MenuItem value='Ilhas Virgens Americanas'>Ilhas Virgens Americanas</MenuItem>
              <MenuItem value='Ilhas Virgens Britânicas'>Ilhas Virgens Britânicas</MenuItem>
              <MenuItem value='Ilhas Åland'>Ilhas Åland</MenuItem>
              <MenuItem value='Indonésia'>Indonésia</MenuItem>
              <MenuItem value='Inglaterra'>Inglaterra</MenuItem>
              <MenuItem value='Índia'>Índia</MenuItem>
              <MenuItem value='Iraque'>Iraque</MenuItem>
              <MenuItem value='Irlanda do Norte'>Irlanda do Norte</MenuItem>
              <MenuItem value='Irlanda'>Irlanda</MenuItem>
              <MenuItem value='Irã'>Irã</MenuItem>
              <MenuItem value='Islândia'>Islândia</MenuItem>
              <MenuItem value='Israel'>Israel</MenuItem>
              <MenuItem value='Itália'>Itália</MenuItem>
              <MenuItem value='Iêmen'>Iêmen</MenuItem>
              <MenuItem value='Jamaica'>Jamaica</MenuItem>
              <MenuItem value='Japão'>Japão</MenuItem>
              <MenuItem value='Jersey'>Jersey</MenuItem>
              <MenuItem value='Jordânia'>Jordânia</MenuItem>
              <MenuItem value='Kiribati'>Kiribati</MenuItem>
              <MenuItem value='Kuwait'>Kuwait</MenuItem>
              <MenuItem value='Laos'>Laos</MenuItem>
              <MenuItem value='Lesoto'>Lesoto</MenuItem>
              <MenuItem value='Letônia'>Letônia</MenuItem>
              <MenuItem value='Libéria'>Libéria</MenuItem>
              <MenuItem value='Liechtenstein'>Liechtenstein</MenuItem>
              <MenuItem value='Lituânia'>Lituânia</MenuItem>
              <MenuItem value='Luxemburgo'>Luxemburgo</MenuItem>
              <MenuItem value='Líbano'>Líbano</MenuItem>
              <MenuItem value='Líbia'>Líbia</MenuItem>
              <MenuItem value='Macau'>Macau</MenuItem>
              <MenuItem value='Macedônia'>Macedônia</MenuItem>
              <MenuItem value='Madagáscar'>Madagáscar</MenuItem>
              <MenuItem value='Malawi'>Malawi</MenuItem>
              <MenuItem value='Maldivas'>Maldivas</MenuItem>
              <MenuItem value='Mali'>Mali</MenuItem>
              <MenuItem value='Malta'>Malta</MenuItem>
              <MenuItem value='Malásia'>Malásia</MenuItem>
              <MenuItem value='Marianas Setentrionais'>Marianas Setentrionais</MenuItem>
              <MenuItem value='Marrocos'>Marrocos</MenuItem>
              <MenuItem value='Martinica'>Martinica</MenuItem>
              <MenuItem value='Mauritânia'>Mauritânia</MenuItem>
              <MenuItem value='Maurícia'>Maurícia</MenuItem>
              <MenuItem value='Mayotte'>Mayotte</MenuItem>
              <MenuItem value='Moldávia'>Moldávia</MenuItem>
              <MenuItem value='Mongólia'>Mongólia</MenuItem>
              <MenuItem value='Montenegro'>Montenegro</MenuItem>
              <MenuItem value='Montserrat'>Montserrat</MenuItem>
              <MenuItem value='Moçambique'>Moçambique</MenuItem>
              <MenuItem value='Myanmar'>Myanmar</MenuItem>
              <MenuItem value='México'>México</MenuItem>
              <MenuItem value='Mônaco'>Mônaco</MenuItem>
              <MenuItem value='Namíbia'>Namíbia</MenuItem>
              <MenuItem value='Nauru'>Nauru</MenuItem>
              <MenuItem value='Nepal'>Nepal</MenuItem>
              <MenuItem value='Nicarágua'>Nicarágua</MenuItem>
              <MenuItem value='Nigéria'>Nigéria</MenuItem>
              <MenuItem value='Niue'>Niue</MenuItem>
              <MenuItem value='Noruega'>Noruega</MenuItem>
              <MenuItem value='Nova Caledônia'>Nova Caledônia</MenuItem>
              <MenuItem value='Nova Zelândia'>Nova Zelândia</MenuItem>
              <MenuItem value='Níger'>Níger</MenuItem>
              <MenuItem value='Omã'>Omã</MenuItem>
              <MenuItem value='Palau'>Palau</MenuItem>
              <MenuItem value='Palestina'>Palestina</MenuItem>
              <MenuItem value='Panamá'>Panamá</MenuItem>
              <MenuItem value='Papua-Nova Guiné'>Papua-Nova Guiné</MenuItem>
              <MenuItem value='Paquistão'>Paquistão</MenuItem>
              <MenuItem value='Paraguai'>Paraguai</MenuItem>
              <MenuItem value='País de Gales'>País de Gales</MenuItem>
              <MenuItem value='Países Baixos'>Países Baixos</MenuItem>
              <MenuItem value='Peru'>Peru</MenuItem>
              <MenuItem value='Pitcairn'>Pitcairn</MenuItem>
              <MenuItem value='Polinésia Francesa'>Polinésia Francesa</MenuItem>
              <MenuItem value='Polônia'>Polônia</MenuItem>
              <MenuItem value='Porto Rico'>Porto Rico</MenuItem>
              <MenuItem value='Portugal'>Portugal</MenuItem>
              <MenuItem value='Quirguistão'>Quirguistão</MenuItem>
              <MenuItem value='Quênia'>Quênia</MenuItem>
              <MenuItem value='Reino Unido'>Reino Unido</MenuItem>
              <MenuItem value='República Centro-Africana'>República Centro-Africana</MenuItem>
              <MenuItem value='República Checa'>República Checa</MenuItem>
              <MenuItem value='República Democrática do Congo'>República Democrática do Congo</MenuItem>
              <MenuItem value='República do Congo'>República do Congo</MenuItem>
              <MenuItem value='República Dominicana'>República Dominicana</MenuItem>
              <MenuItem value='Reunião'>Reunião</MenuItem>
              <MenuItem value='Romênia'>Romênia</MenuItem>
              <MenuItem value='Ruanda'>Ruanda</MenuItem>
              <MenuItem value='Rússia'>Rússia</MenuItem>
              <MenuItem value='Saara Ocidental'>Saara Ocidental</MenuItem>
              <MenuItem value='Saint Martin'>Saint Martin</MenuItem>
              <MenuItem value='Saint-Barthélemy'>Saint-Barthélemy</MenuItem>
              <MenuItem value='Saint-Pierre e Miquelon'>Saint-Pierre e Miquelon</MenuItem>
              <MenuItem value='Samoa Americana'>Samoa Americana</MenuItem>
              <MenuItem value='Samoa'>Samoa</MenuItem>
              <MenuItem value='Santa Helena, Ascensão e Tristão da Cunha'>Santa Helena, Ascensão e Tristão da Cunha</MenuItem>
              <MenuItem value='Santa Lúcia'>Santa Lúcia</MenuItem>
              <MenuItem value='Senegal'>Senegal</MenuItem>
              <MenuItem value='Serra Leoa'>Serra Leoa</MenuItem>
              <MenuItem value='Seychelles'>Seychelles</MenuItem>
              <MenuItem value='Singapura'>Singapura</MenuItem>
              <MenuItem value='Somália'>Somália</MenuItem>
              <MenuItem value='Sri Lanka'>Sri Lanka</MenuItem>
              <MenuItem value='Suazilândia'>Suazilândia</MenuItem>
              <MenuItem value='Sudão'>Sudão</MenuItem>
              <MenuItem value='Suriname'>Suriname</MenuItem>
              <MenuItem value='Suécia'>Suécia</MenuItem>
              <MenuItem value='Suíça'>Suíça</MenuItem>
              <MenuItem value='Svalbard e Jan Mayen'>Svalbard e Jan Mayen</MenuItem>
              <MenuItem value='São Cristóvão e Nevis'>São Cristóvão e Nevis</MenuItem>
              <MenuItem value='São Marino'>São Marino</MenuItem>
              <MenuItem value='São Tomé e Príncipe'>São Tomé e Príncipe</MenuItem>
              <MenuItem value='São Vicente e Granadinas'>São Vicente e Granadinas</MenuItem>
              <MenuItem value='Sérvia'>Sérvia</MenuItem>
              <MenuItem value='Síria'>Síria</MenuItem>
              <MenuItem value='Tadjiquistão'>Tadjiquistão</MenuItem>
              <MenuItem value='Tailândia'>Tailândia</MenuItem>
              <MenuItem value='Taiwan'>Taiwan</MenuItem>
              <MenuItem value='Tanzânia'>Tanzânia</MenuItem>
              <MenuItem value='Terras Austrais e Antárticas Francesas'>Terras Austrais e Antárticas Francesas</MenuItem>
              <MenuItem value='Território Britânico do Oceano Índico'>Território Britânico do Oceano Índico</MenuItem>
              <MenuItem value='Timor-Leste'>Timor-Leste</MenuItem>
              <MenuItem value='Togo'>Togo</MenuItem>
              <MenuItem value='Tonga'>Tonga</MenuItem>
              <MenuItem value='Toquelau'>Toquelau</MenuItem>
              <MenuItem value='Trinidad e Tobago'>Trinidad e Tobago</MenuItem>
              <MenuItem value='Tunísia'>Tunísia</MenuItem>
              <MenuItem value='Turcas e Caicos'>Turcas e Caicos</MenuItem>
              <MenuItem value='Turquemenistão'>Turquemenistão</MenuItem>
              <MenuItem value='Turquia'>Turquia</MenuItem>
              <MenuItem value='Tuvalu'>Tuvalu</MenuItem>
              <MenuItem value='Ucrânia'>Ucrânia</MenuItem>
              <MenuItem value='Uganda'>Uganda</MenuItem>
              <MenuItem value='Uruguai'>Uruguai</MenuItem>
              <MenuItem value='Uzbequistão'>Uzbequistão</MenuItem>
              <MenuItem value='Vanuatu'>Vanuatu</MenuItem>
              <MenuItem value='Vaticano'>Vaticano</MenuItem>
              <MenuItem value='Venezuela'>Venezuela</MenuItem>
              <MenuItem value='Vietname'>Vietname</MenuItem>
              <MenuItem value='Wallis e Futuna'>Wallis e Futuna</MenuItem>
              <MenuItem value='Zimbabwe'>Zimbabwe</MenuItem>
              <MenuItem value='Zâmbia'>Zâmbia</MenuItem>
            </Select>
          </div>
          <div className='form-field justify-content-end'>
          <InputMask
              mask="99999-999"
              onChange={onChange}
              maskChar=" "
            >
              {() => 
                <TextField
                  id='form__zip-code'
                  name='zipCode'
                  type='text'
                  variant='standard'
                  color='warning'
                  label='CEP'
                  required 
                />
              }
            </InputMask>
          </div>
        </div>
        <div className={((registrationInfo.country === 'Brasil' && registrationInfo.zipCode.trim().length === 9) || registrationInfo.country !== 'Brasil') ? 'd-block' : 'd-none'}>
          <div className='form-group'>
            <div
              id='form__address_container'
              className='form-field'
            >
              <TextField
                id='form__address'
                name='address'
                type='text'
                label='Endereço'
                variant='standard'
                color='warning'
                required
                onChange={onChange}
              />
            </div>
            <div
              id='form__address-number_container'
              className='form-field'
            >
              <TextField
                id='form__address-number'
                name='addressNumber'
                type='text'
                label='Número'
                variant='standard'
                color='warning'
                required={((registrationInfo.country === 'Brasil' && registrationInfo.zipCode.length === 9) || registrationInfo.country !== 'Brasil')}
                onChange={onChange}
              />
            </div>
            <div
              id='form__address-complement_container'
              className='form-field'
            >
              <TextField
                id='form__address-complement'
                name='addressComplement'
                type='text'
                label='Complemento (opcional)'
                variant='standard'
                color='warning'
                onChange={onChange}
              />
            </div>
          </div>
          <div className='form-group address-line'>
            <div
              id='form__neighbourhood_container'
              className='form-field justify-content-end'
            >
              <TextField
                id='form__neighbourhood'
                name='neighbourhood'
                type='text'
                label='Bairro'
                variant='standard'
                color='warning'
                required={((registrationInfo.country === 'Brasil' && registrationInfo.zipCode.length === 9) || registrationInfo.country !== 'Brasil')}
                onChange={onChange}
              />
            </div>
            <div
              id='form__city_container'
              className='form-field justify-content-end'
            >
              <TextField
                id='form__city'
                name='city'
                type='text'
                label='Cidade'
                variant='standard'
                color='warning'
                required={((registrationInfo.country === 'Brasil' && registrationInfo.zipCode.length === 9) || registrationInfo.country !== 'Brasil')}
                onChange={onChange}
              />
            </div>
            <div
              id='form_state_container'
              className='form-field'
            >
              {registrationInfo.country === 'Brasil' ? (
              <div>
                <InputLabel id='form_state_brazil_label'>Estado</InputLabel>
                <Select
                  id='form_state_brazil'
                  labelId='form_state_brazil_label'
                  label='Estado'
                  value={registrationInfo.state}
                  name='state'
                  type='text'
                  variant='standard'
                  color='warning'
                  required
                  onChange={onChange}
                >
                  <MenuItem value='AC'>Acre</MenuItem>
                  <MenuItem value='AL'>Alagoas</MenuItem>
                  <MenuItem value='AP'>Amapá</MenuItem>
                  <MenuItem value='AM'>Amazonas</MenuItem>
                  <MenuItem value='BA'>Bahia</MenuItem>
                  <MenuItem value='CE'>Ceará</MenuItem>
                  <MenuItem value='DF'>Distrito Federal</MenuItem>
                  <MenuItem value='ES'>Espírito Santo</MenuItem>
                  <MenuItem value='GO'>Goiás</MenuItem>
                  <MenuItem value='MA'>Maranhão</MenuItem>
                  <MenuItem value='MT'>Mato Grosso</MenuItem>
                  <MenuItem value='MS'>Mato Grosso do Sul</MenuItem>
                  <MenuItem value='MG'>Minas Gerais</MenuItem>
                  <MenuItem value='PA'>Pará</MenuItem>
                  <MenuItem value='PB'>Paraíba</MenuItem>
                  <MenuItem value='PR'>Paraná</MenuItem>
                  <MenuItem value='PE'>Pernambuco</MenuItem>
                  <MenuItem value='PI'>Piauí</MenuItem>
                  <MenuItem value='RJ'>Rio de Janeiro</MenuItem>
                  <MenuItem value='RN'>Rio Grande do Norte</MenuItem>
                  <MenuItem value='RS'>Rio Grande do Sul</MenuItem>
                  <MenuItem value='RO'>Rondônia</MenuItem>
                  <MenuItem value='RR'>Roraima</MenuItem>
                  <MenuItem value='SC'>Santa Catarina</MenuItem>
                  <MenuItem value='SP'>São Paulo</MenuItem>
                  <MenuItem value='SE'>Sergipe</MenuItem>
                  <MenuItem value='TO'>Tocantins</MenuItem>
                </Select>
              </div>
              ) : (
              <TextField
                id='form_state'
                name='state'
                type='text'
                label='Bairro'
                variant='standard'
                color='warning'
                onChange={onChange}
              />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='btn-area d-flex align-items-center bg-secondary my-3 p-3'>
        <div className='btn-group d-flex'>
          <button
            className="form-previous-page contact-btn btn btn-remove d-flex align-items-center"
            type="button"
            onClick={() => navigate('/cart')}
          >
            Voltar
          </button>
          <button
            className="form-next-page btn btn-success text-white"
            type="submit"
          >
            Ir para o pagamento
          </button>
        </div>
      </div>
    </form>
  )
};

export default Registration;