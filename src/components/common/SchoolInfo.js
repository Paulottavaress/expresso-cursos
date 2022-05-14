import React from 'react'

const SchoolInfo = () => {
  return (
    <div className='bg-secondary'>
      <div
        className="container py-5"
      >
        <p
          className="h1 text-center"
          style={{
            fontWeight: 'bold',
            marginBottom: '30px'
          }}
        >
          CONHEÇA A NOSSA ESCOLA
        </p>
        <p className="h3 text-left">A Inove é uma empresa mineira especializada em trânsito, nascemos em 2013 e estamos situados na cidade de Uberaba-MG. Atualmente oferecemos mais de 30 cursos na área de trânsito e atuamos em diversos estados do Brasil.</p>
        <p className="h3 text-left">Somos uma entidade de ensino em constante expansão e nossa missão é a de capacitar e atualizar condutores profissionais de maneira objetiva, técnica e qualificada. A Inove já capacitou mais de 15 mil alunos em todo o Brasil e está sempre inovando visando a segurança do Sistema de Trânsito Brasileiro.</p>
      </div>
    </div>
  )
}

export default SchoolInfo;