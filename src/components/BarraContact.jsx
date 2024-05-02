import '../styles/barra.css'
const BarraContact = () => {
  return (
    <div className='barra-contact'>
      <div className='container-contact'>
        <div className='item-contact'>
          <h3>Contacto</h3>
          <p>Agenda tu cita en solo unos minutos.</p>
          <a
            href='https://api.whatsapp.com/send?phone=525529484701'
            target='_blank'
            className='btn-rosa'
            rel='noopener noreferrer'
          >
            Agendar cita
          </a>
        </div>
        <div className='item-contact'>
          <h3>Nuestros horarios</h3>
          <div className='sub-item-contact'>
            <p>Lunes a Viernes </p>
            <p>10:00 am a 2:00pm y 4:00pm a 8:00pm</p>
            <p>Sábados de 10:00am a 3:00pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarraContact
