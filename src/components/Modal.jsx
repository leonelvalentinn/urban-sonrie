import { useEffect, useState } from 'react'
import Promo from '../assets/alineador_promo_urban.webp'
import Promo2 from '../assets/implante_promo_urban.webp'
import '../styles/modal.css'

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('load', () => {
      setModalOpen(true)
    })

    return window.removeEventListener('load', () => {
      setModalOpen(true)
    })
  }, [])

  return (
    <div className={`modal-promo ${modalOpen && 'modal-open'}`} id='modal' onClick={() => setModalOpen(!modalOpen)}>
      <h1>¡Aprovecha nuestras promociones exclusivas por el HOT SALE!</h1>
      <div className='container-promos-modal'>
        <img src={Promo} alt='Promoción alineadores invisibles' />
        <img src={Promo2} alt='Promoción implante dental' />
      </div>
      <a className='btn-modal' href='https://api.whatsapp.com/send?phone=525529484701' target='_blank' rel='noopener noreferrer'>Agenda tu cita</a>
    </div>
  )
}

export default Modal
