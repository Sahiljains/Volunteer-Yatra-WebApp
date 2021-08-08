import views from '../../assets/buttons/views-blog-button.png'
import likes from '../../assets/buttons/like-blog-button.png'
import share from '../../assets/buttons/share-blog-button.png'

const Engagement = ({ showShare, smaller, spacing }) => {
  return (
    <div className={`engagement-buttons d-flex align-items-center ${smaller ? 'smaller' : ''}`}>
      <div className='engage'>
        <img src={views} alt='' className='eye' /> <span className={`lead ${spacing ? 'spacing' : ''}`}>100</span>
      </div>
      <div className='engage'>
        <img src={likes} alt='' className='heart' /> <span className={`lead ${spacing ? 'spacing' : ''}`}>60</span>
      </div>
      {showShare && (
        <div className='engage zoom-2'>
          <img src={showShare ? share : ''} alt='' className='share cursor' />{' '}
        </div>
      )}
    </div>
  )
}

Engagement.defaultProps = {
  showShare: false,
}

export default Engagement
