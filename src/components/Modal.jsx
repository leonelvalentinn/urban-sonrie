import { useState } from 'react'
import Promo from '../assets/promo-1.webp'
import '../styles/modal.css'

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='modal-promo' id='modal'>
      <i className='fa-solid fa-x' onClick={() => setModalOpen(!modalOpen)} />
      <h1>Jornada de limpieza</h1>
      <img src={Promo} alt='' />
    </div>
  )
}

export default Modal
