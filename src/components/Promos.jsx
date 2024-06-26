const Promociones = () => {
  return (
    <div>
      <div className='container-urgencias'>
        <h2>Urgencias</h2>
        <img src={urgencias} alt='Banner Urgencias' className='urgencias' />
        <img
          src={urgenciasDes}
          alt='Banner Urgencias'
          className='urgencias-des'
        />
      </div>
      <div className='promo'>
        <div className='title'>
          <h2>Promociones</h2>
        </div>
        <section className='promociones'>
          <div className='container-promo'>
            <img
              src={promotion3}
              alt='Promoción de blanqueamiento dental'
              className='promotion-img'
            />
            <a
              href='https://api.whatsapp.com/send?phone=525529484701'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contáctanos
            </a>
          </div>
          <div className='container-promo'>
            <img
              src={promotion2}
              alt='Promoción de limpieza dental'
              className='promotion-img'
            />
            <a
              href='https://api.whatsapp.com/send?phone=525529484701'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contáctanos
            </a>
          </div>
          <div className='container-promo'>
            <img
              src={promotion4}
              alt='Promoción extracción de muelas del juicio'
              className='promotion-img'
            />
            <a
              href='https://api.whatsapp.com/send?phone=525529484701'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contáctanos
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Promociones
