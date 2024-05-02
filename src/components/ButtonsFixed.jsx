import whats from '../assets/whats.jpg'
import '../styles/promociones.css'
import tel from '../assets/telefono.png'
import { useEffect, useState, useCallback } from 'react'

export const ButtonFixed = () => {
  const [show, setShow] = useState(false)
  const [y, setY] = useState(document.scrollingElement.scrollHeight)

  const handleNavigation = useCallback(() => {
    if (y > window.scrollY) {
      if (y < 100) {
        setShow(false)
      }
    } else if (y < window.scrollY) {
      setShow(true)
    }
    setY(window.scrollY)
  }, [y])

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)
    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])
  return (
    <div className={`container-fixed animado ${show ? 'show' : ''}`}>
      <div className='tel-fixed'>
        <a href='tel:5535362504' target='_blank' rel='noopener noreferrer'>
          <img src={tel} alt='Icono Teléfono' />
        </a>
      </div>
      <div className='urgencias-fixed'>
        <a
          href='https://api.whatsapp.com/send?phone=525529484701'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={whats} alt='Icono WhatsApp' />
        </a>
      </div>
    </div>
  )
}
