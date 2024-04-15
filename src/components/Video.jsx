import '../styles/video.css'
import poster from '../assets/poster.webp'
import '@justinribeiro/lite-youtube'

const Video = () => {
  const styles = {
    width: '100%',
    maxHeight: '560px',
    maxWidth: '950px',
    aspectRatio: '16/9'
  }
  return (
    <div className='video-container'>
      <div>
        <h3>Conoce más sobre nosotros</h3>
        <div className='video'>
          <lite-youtube
            videoid='AmsGJr2P4xg'
            videotitle='Nosotros Somos Urban Sonríe'
            posterquality={poster}
            videoplay='Reproducir video'
            style={styles}
          />
        </div>
      </div>
    </div>
  )
}

export default Video
