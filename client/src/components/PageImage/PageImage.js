import { Link } from 'react-router-dom'
import outline from '../../assets/vectors/white-outline.svg'
import './pageimage.scss'

const PageImage = ({ imgSrc, imgTitle, imgBtn, height, showOutline, title, expandImgText }) => {
  return (
    <div className='bg-image-container' style={{ height: !imgSrc ? height : 'auto', backgroundColor: '#A4A4A4' }}>
      <img src={imgSrc} alt='' className='imgSrc' height={height} />
      {showOutline && <img src={outline} alt='' className='outline move-up' />}
      <div className='container-fluid'>
        <div className='row first-row'>
          <div className='col-md-7'>
            <div className='main-title'>
              {title ? (
                <div className='title text-bold'>{title}</div>
              ) : (
                imgTitle && <img src={imgTitle} alt='' style={{ width: expandImgText ? '165%' : '' }} />
              )}
            </div>
            <Link to='/register/yatri'>
              {imgBtn && <img src={imgBtn} alt='' className='community-button zoom-2' />}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

PageImage.defaultProps = {
  height: 'auto',
  showOutline: false,
  expandImgText: false,
}

export default PageImage
