import React, { useContext } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext';
// import FormatDate from '../utils/FormatDate';

const Registration = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { 
    setRegistrationInfo,
    registrationInfo
  } = checkoutContext;

  const onChange = e => {
    setRegistrationInfo(e);
  };

  return (
    <form
      id="form-register"
      className="bg-secondary p-3"
    >
      <div className="form-basic-info">
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form__full-name"
              className='font-weight-bold'
            >Nome completo<span className='text-danger'> *</span></label>
            <input
              id="form__full-name"
              type="text"
              name="fullName"
              required
              onChange={onChange}
            />
          </div>
          <div className="form-field">
            <label
              htmlFor="form-checkout__identificationType"
              className='font-weight-bold'
            >Tipo de pessoa<span className='text-danger'> *</span></label>
            <select
              id="form-checkout__identificationType"
              name="identificationType"
              onChange={onChange}
            >
              <option value="PF">Pessoa física</option>
              <option value="PJ">Pessoa jurídica</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__identificationNumber"
              className='font-weight-bold'
            >{registrationInfo.identificationType === 'PF' ? 'CPF' : 'CNPJ'}<span className='text-danger'> *</span></label>
            <input
              id="form-checkout__identificationNumber"
              type="text"
              name="identificationNumber"
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <label
              htmlFor="form__country"
              className='font-weight-bold'
            >País<span className='text-danger'> *</span></label>
            <select
              id="form__country"
              name="country"
              onChange={onChange}
            >
              <option value="Brasil">Brasil</option>
              <option value="Afeganistão">Afeganistão</option>
              <option value="África do Sul">África do Sul</option>
              <option value="Albânia">Albânia</option>
              <option value="Alemanha">Alemanha</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antilhas Holandesas">Antilhas Holandesas</option>
              <option value="Antárctida">Antárctida</option>
              <option value="Antígua e Barbuda">Antígua e Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Argélia">Argélia</option>
              <option value="Armênia">Armênia</option>
              <option value="Aruba">Aruba</option>
              <option value="Arábia Saudita">Arábia Saudita</option>
              <option value="Austrália">Austrália</option>
              <option value="Áustria">Áustria</option>
              <option value="Azerbaijão">Azerbaijão</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrein">Bahrein</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belize">Belize</option>
              <option value="Benim">Benim</option>
              <option value="Bermudas">Bermudas</option>
              <option value="Bielorrússia">Bielorrússia</option>
              <option value="Bolívia">Bolívia</option>
              <option value="Botswana">Botswana</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgária">Bulgária</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Butão">Butão</option>
              <option value="Bélgica">Bélgica</option>
              <option value="Bósnia e Herzegovina">Bósnia e Herzegovina</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Camarões">Camarões</option>
              <option value="Camboja">Camboja</option>
              <option value="Canadá">Canadá</option>
              <option value="Catar">Catar</option>
              <option value="Cazaquistão">Cazaquistão</option>
              <option value="Chade">Chade</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Chipre">Chipre</option>
              <option value="Colômbia">Colômbia</option>
              <option value="Comores">Comores</option>
              <option value="Coreia do Norte">Coreia do Norte</option>
              <option value="Coreia do Sul">Coreia do Sul</option>
              <option value="Costa do Marfim">Costa do Marfim</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croácia">Croácia</option>
              <option value="Cuba">Cuba</option>
              <option value="Dinamarca">Dinamarca</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Egito">Egito</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Emirados Árabes Unidos">Emirados Árabes Unidos</option>
              <option value="Equador">Equador</option>
              <option value="Eritreia">Eritreia</option>
              <option value="Escócia">Escócia</option>
              <option value="Eslováquia">Eslováquia</option>
              <option value="Eslovênia">Eslovênia</option>
              <option value="Espanha">Espanha</option>
              <option value="Estados Federados da Micronésia">Estados Federados da Micronésia</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Estônia">Estônia</option>
              <option value="Etiópia">Etiópia</option>
              <option value="Fiji">Fiji</option>
              <option value="Filipinas">Filipinas</option>
              <option value="Finlândia">Finlândia</option>
              <option value="França">França</option>
              <option value="Gabão">Gabão</option>
              <option value="Gana">Gana</option>
              <option value="Geórgia">Geórgia</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Granada">Granada</option>
              <option value="Gronelândia">Gronelândia</option>
              <option value="Grécia">Grécia</option>
              <option value="Guadalupe">Guadalupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernesei">Guernesei</option>
              <option value="Guiana">Guiana</option>
              <option value="Guiana Francesa">Guiana Francesa</option>
              <option value="Guiné">Guiné</option>
              <option value="Guiné Equatorial">Guiné Equatorial</option>
              <option value="Guiné-Bissau">Guiné-Bissau</option>
              <option value="Gâmbia">Gâmbia</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungria">Hungria</option>
              <option value="Ilha Bouvet">Ilha Bouvet</option>
              <option value="Ilha de Man">Ilha de Man</option>
              <option value="Ilha do Natal">Ilha do Natal</option>
              <option value="Ilha Heard e Ilhas McDonald">Ilha Heard e Ilhas McDonald</option>
              <option value="Ilha Norfolk">Ilha Norfolk</option>
              <option value="Ilhas Cayman">Ilhas Cayman</option>
              <option value="Ilhas Cocos (Keeling)">Ilhas Cocos (Keeling)</option>
              <option value="Ilhas Cook">Ilhas Cook</option>
              <option value="Ilhas Feroé">Ilhas Feroé</option>
              <option value="Ilhas Geórgia do Sul e Sandwich do Sul">Ilhas Geórgia do Sul e Sandwich do Sul</option>
              <option value="Ilhas Malvinas">Ilhas Malvinas</option>
              <option value="Ilhas Marshall">Ilhas Marshall</option>
              <option value="Ilhas Menores Distantes dos Estados Unidos">Ilhas Menores Distantes dos Estados Unidos</option>
              <option value="Ilhas Salomão">Ilhas Salomão</option>
              <option value="Ilhas Virgens Americanas">Ilhas Virgens Americanas</option>
              <option value="Ilhas Virgens Britânicas">Ilhas Virgens Britânicas</option>
              <option value="Ilhas Åland">Ilhas Åland</option>
              <option value="Indonésia">Indonésia</option>
              <option value="Inglaterra">Inglaterra</option>
              <option value="Índia">Índia</option>
              <option value="Iraque">Iraque</option>
              <option value="Irlanda do Norte">Irlanda do Norte</option>
              <option value="Irlanda">Irlanda</option>
              <option value="Irã">Irã</option>
              <option value="Islândia">Islândia</option>
              <option value="Israel">Israel</option>
              <option value="Itália">Itália</option>
              <option value="Iêmen">Iêmen</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japão">Japão</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordânia">Jordânia</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Laos">Laos</option>
              <option value="Lesoto">Lesoto</option>
              <option value="Letônia">Letônia</option>
              <option value="Libéria">Libéria</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lituânia">Lituânia</option>
              <option value="Luxemburgo">Luxemburgo</option>
              <option value="Líbano">Líbano</option>
              <option value="Líbia">Líbia</option>
              <option value="Macau">Macau</option>
              <option value="Macedônia">Macedônia</option>
              <option value="Madagáscar">Madagáscar</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldivas">Maldivas</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Malásia">Malásia</option>
              <option value="Marianas Setentrionais">Marianas Setentrionais</option>
              <option value="Marrocos">Marrocos</option>
              <option value="Martinica">Martinica</option>
              <option value="Mauritânia">Mauritânia</option>
              <option value="Maurícia">Maurícia</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Moldávia">Moldávia</option>
              <option value="Mongólia">Mongólia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Moçambique">Moçambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="México">México</option>
              <option value="Mônaco">Mônaco</option>
              <option value="Namíbia">Namíbia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Nicarágua">Nicarágua</option>
              <option value="Nigéria">Nigéria</option>
              <option value="Niue">Niue</option>
              <option value="Noruega">Noruega</option>
              <option value="Nova Caledônia">Nova Caledônia</option>
              <option value="Nova Zelândia">Nova Zelândia</option>
              <option value="Níger">Níger</option>
              <option value="Omã">Omã</option>
              <option value="Palau">Palau</option>
              <option value="Palestina">Palestina</option>
              <option value="Panamá">Panamá</option>
              <option value="Papua-Nova Guiné">Papua-Nova Guiné</option>
              <option value="Paquistão">Paquistão</option>
              <option value="Paraguai">Paraguai</option>
              <option value="País de Gales">País de Gales</option>
              <option value="Países Baixos">Países Baixos</option>
              <option value="Peru">Peru</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Polinésia Francesa">Polinésia Francesa</option>
              <option value="Polônia">Polônia</option>
              <option value="Porto Rico">Porto Rico</option>
              <option value="Portugal">Portugal</option>
              <option value="Quirguistão">Quirguistão</option>
              <option value="Quênia">Quênia</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="República Centro-Africana">República Centro-Africana</option>
              <option value="República Checa">República Checa</option>
              <option value="República Democrática do Congo">República Democrática do Congo</option>
              <option value="República do Congo">República do Congo</option>
              <option value="República Dominicana">República Dominicana</option>
              <option value="Reunião">Reunião</option>
              <option value="Romênia">Romênia</option>
              <option value="Ruanda">Ruanda</option>
              <option value="Rússia">Rússia</option>
              <option value="Saara Ocidental">Saara Ocidental</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Saint-Barthélemy">Saint-Barthélemy</option>
              <option value="Saint-Pierre e Miquelon">Saint-Pierre e Miquelon</option>
              <option value="Samoa Americana">Samoa Americana</option>
              <option value="Samoa">Samoa</option>
              <option value="Santa Helena, Ascensão e Tristão da Cunha">Santa Helena, Ascensão e Tristão da Cunha</option>
              <option value="Santa Lúcia">Santa Lúcia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serra Leoa">Serra Leoa</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Singapura">Singapura</option>
              <option value="Somália">Somália</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Suazilândia">Suazilândia</option>
              <option value="Sudão">Sudão</option>
              <option value="Suriname">Suriname</option>
              <option value="Suécia">Suécia</option>
              <option value="Suíça">Suíça</option>
              <option value="Svalbard e Jan Mayen">Svalbard e Jan Mayen</option>
              <option value="São Cristóvão e Nevis">São Cristóvão e Nevis</option>
              <option value="São Marino">São Marino</option>
              <option value="São Tomé e Príncipe">São Tomé e Príncipe</option>
              <option value="São Vicente e Granadinas">São Vicente e Granadinas</option>
              <option value="Sérvia">Sérvia</option>
              <option value="Síria">Síria</option>
              <option value="Tadjiquistão">Tadjiquistão</option>
              <option value="Tailândia">Tailândia</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tanzânia">Tanzânia</option>
              <option value="Terras Austrais e Antárticas Francesas">Terras Austrais e Antárticas Francesas</option>
              <option value="Território Britânico do Oceano Índico">Território Britânico do Oceano Índico</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Toquelau">Toquelau</option>
              <option value="Trinidad e Tobago">Trinidad e Tobago</option>
              <option value="Tunísia">Tunísia</option>
              <option value="Turcas e Caicos">Turcas e Caicos</option>
              <option value="Turquemenistão">Turquemenistão</option>
              <option value="Turquia">Turquia</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Ucrânia">Ucrânia</option>
              <option value="Uganda">Uganda</option>
              <option value="Uruguai">Uruguai</option>
              <option value="Uzbequistão">Uzbequistão</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vaticano">Vaticano</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietname">Vietname</option>
              <option value="Wallis e Futuna">Wallis e Futuna</option>
              <option value="Zimbabwe">Zimbabwe</option>
              <option value="Zâmbia">Zâmbia</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form__zip-code"
              className='font-weight-bold'
            >CEP<span className='text-danger'> *</span></label>
            <input
              id="form__zip-code"
              type="text"
              name="zipCode"
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <label
              htmlFor="form__address"
              className='font-weight-bold'
            >Endereço<span className='text-danger'> *</span></label>
            <input
              id="form__address"
              type="text"
              placeholder="Nome da rua"
              name="address"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form__address-number"
              className='font-weight-bold'
            >Número<span className='text-danger'> *</span></label>
            <input
              id="form__address-number"
              type="text"
              name="addressNumber"
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <label
              htmlFor="form__address-complement"
              className='font-weight-bold'
            >Complemento (opcional)</label>
            <input
              id="form__address-complement"
              type="text"
              placeholder="Apartamento, suíte, unidade, bloco, etc... (opcional)"
              name="addressComplement"
              onChange={onChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form__neighbourhood"
              className='font-weight-bold'
            >Bairro<span className='text-danger'> *</span></label>
            <input
              id="form__neighbourhood"
              type="text"
              name="neighbourhood"
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <label
              htmlFor="form__city"
              className='font-weight-bold'
            >Cidade<span className='text-danger'> *</span></label>
            <input
              id="form__city"
              type="text"
              name="city"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor={registrationInfo.country === 'Brasil' ? 'form_state_brazil' : 'form_state'}
              className='font-weight-bold'
            >Estado<span className='text-danger'> *</span></label>
            {registrationInfo.country === 'Brasil' ? (
            <select
              id="form_state_brazil"
              type="text"
              name="state"
              onChange={onChange}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            ) : (
            <input
              id="form_state"
              type="text"
              name="state"
              required
              onChange={onChange}
            />
            )}
          </div>
          <div className='form-field'>
            <label
              htmlFor="form_phone"
              className='font-weight-bold'
            >Celular<span className='text-danger'> *</span></label>
            <input
              id="form_phone"
              type="text"
              name="phoneNumber"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__cardholderEmail"
              className='font-weight-bold'
            >E-mail<span className='text-danger'> *</span></label>
            <input
              id="form-checkout__cardholderEmail"
              type="text"
              name="email"
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <label
              htmlFor="form_birth-date"
              className='font-weight-bold'
            >Data de nascimento<span className='text-danger'> *</span></label>
            <input
              id="form_birth-date"
              type="text"
              placeholder="dd/mm/aaaa"
              name="birthDate"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form_driver-license-number"
              className='font-weight-bold'
            >Número da CNH<span className='text-danger'> *</span></label>
            <input
              id="form_driver-license-number"
              type="text"
              name="driversLicenseNumber"
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <label
              htmlFor="form_driver-license-category"
              className='font-weight-bold'
            >Categoria da CNH<span className='text-danger'> *</span></label>
            <select
              id="form_state"
              name="driversLicenseCategory"
              onChange={onChange}
            >
              <option value="Categoria A">Categoria A</option>
              <option value="Categoria B">Categoria B</option>
              <option value="Categoria C">Categoria C</option>
              <option value="Categoria D">Categoria D</option>
              <option value="Categoria E">Categoria E</option>
              <option value="Categoria AB">Categoria AB</option>
              <option value="Categoria AC">Categoria AC</option>
              <option value="Categoria AD">Categoria AD</option>
              <option value="Categoria AE">Categoria AE</option>
              <option value="Permissão ACC">Permissão ACC</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form_driver-license-expiry-date"
              className='font-weight-bold'
            >Data de vencimento da CNH<span className='text-danger'> *</span></label>
            <input
              id="form_driver-license-expiry-date"
              type="text"
              placeholder="dd/mm/aaaa"
              name="driversLicenseExpiryDate"
              required
              onChange={onChange}
            />
          </div>
          <div className='form-field'>
            <label
              htmlFor="form_password"
              className='font-weight-bold'
            >Senha para sua conta na plataforma de cursos da INOVE<span className='text-danger'> *</span></label>
            <input
              id="form_password"
              type="password"
              name="password"
              required
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </form>
  )
};

export default Registration;