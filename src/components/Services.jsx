import { useState } from 'react'
import { CardService } from './CardService'
import { CardModal } from './CardModal'
import Services1 from '../assets/ultrasonica.png'
import Services2 from '../assets/limpieza-1.png'
import Services3 from '../assets/ortodoncia.png'
import Services4 from '../assets/endodoncia.png'
import Services5 from '../assets/maxilar.png'
import Services6 from '../assets/ortognatica.png'
import Services7 from '../assets/implantologia.png'
import Services8 from '../assets/cirugia-bucal.png'
import '../styles/services.css'

const Services = () => {
  const Servicios = [
    {
      id: 1,
      title: 'Implantología Dental',
      imgSrc: Services7,
      texto:
        'Es la disciplina encargada del reemplazo de las piezas dentales perdidas mediante la colocación quirúrgica de un aditamento intraóseo (implante dental) y un aditamento protésico (corona, puente o prótesis), tanto en el maxilar como en la mandíbula.'
    },
    {
      id: 2,
      title: 'Endodoncia',
      imgSrc: Services4,
      texto:
        'Es un procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando su pérdida. Para ello, se extrae la pulpa dental y la cavidad resultante, se rellena y sella con material inerte y biocompatible.'
    },
    {
      id: 3,
      title: 'Ortodoncia',
      imgSrc: Services3,
      texto:
        'Corrige los defectos de la posición dental para mantener una boca perfecta y sana. En Urban Sonríe, somos especialistas en ortodoncia y realizamos diferentes tipos de tratamientos para adaptarnos a tus necesidades.'
    },
    {
      id: 4,
      title: 'Limpieza Ultrasónica',
      imgSrc: Services1,
      texto:
        'Es la especialidad que se centra en el diagnóstico, tratamiento y prevención de los problemas primarios de la salud bucodental. Estos incluyen problemas que afectan a los dientes, a las encías, el tejido periodontal y la articulación temporomandibular.'
    },
    {
      id: 5,
      title: 'Prótesis Dental',
      imgSrc: Services5,
      texto:
        'Representan una solución apropiada para aquellas personas que necesitan recuperar el correcto funcionamiento de la boca, ya que se trata de dispositivos diseñados especialmente para reemplazar los dientes perdidos y favorecer la oclusión dental.'
    },
    {
      id: 6,
      title: 'Cirugía Maxilofacial',
      imgSrc: Services6,
      texto:
        'Se emplea en aquellos casos en los que, por ejemplo, se necesita realizar una elevación del seno maxilar o para promover la regeneración ósea. También cuando se llevan a cabo extracciones complejas o cirugías de la encía.'
    },
    {
      id: 7,
      title: 'Diseño de Sonrisa',
      imgSrc: Services8,
      texto:
        'Un candidato para la estética restauradora, primero debe agendar una cita general para formular un plan de tratamiento y lograr el resultado deseado. En Urban Sonríe, es nuestro enfoque dinámico e innovador en el manejo de la estética dental, el que nos diferencia de los demás.'
    },
    {
      id: 8,
      title: 'Blanqueamiento Dental',
      imgSrc: Services2,
      texto:
        'Es la disciplina encargada del reemplazo de las piezas dentales perdidas mediante la colocación quirúrgica de un aditamento intraóseo (implante dental) y un aditamento protésico (corona, puente o prótesis), tanto en el maxilar como en la mandíbula.'
    }
  ]
  const [isModal, setIsModal] = useState(false)
  const [idService, setIdService] = useState(0)
  const handleModal = (e) => {
    setIsModal(true)
    const event = e.target.id
    setIdService(event - 1)
  }

  return (
    <div className='services' id='servicios'>
      <h2 className='title-services'>Servicios</h2>
      <div className='container-services'>
        {
          Servicios.map((item) => (
            <CardService
              key={item.id}
              id={item.id}
              img={item.imgSrc}
              title={item.title}
              HandleModal={handleModal}
            />
          ))
        }
        <div className='item-services item-8'>
          <h2>
            Urban Sonríe <br /> Trabaja para ti{' '}
          </h2>

          <p>
            Estamos para brindarte una atención personalizada y un servicio integral, para lograr que tu sonrisa se
            vea como la imaginas.
          </p>
          <a
            href='https://api.whatsapp.com/send?phone=525529484701'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contacto
          </a>
        </div>
      </div>
      <div
        className={`modal-services-home ${isModal ? 'modal-services-home openModal' : ''}`}
        onClick={() => setIsModal(false)}
      >
        <div className='container-modal-services' id='modalContainer'>
          <i className='fa-solid fa-x' />
          <CardModal
            title={Servicios[idService].title}
            texto={Servicios[idService].texto}
            img={Servicios[idService].imgSrc}
          />
        </div>
      </div>
    </div>
  )
}

export default Services
