import { Link } from 'react-router-dom'
import testimonial from '../../assets/images/testimonial-image.jpg'
import Engagement from './Engagement'

const BlogPost = ({ showShare, small, spacing }) => {
  return (
    <div className={`blog ${small === 'sm' ? 'blog-sm' : small === 'xs' ? 'blog-xs' : ''} h-100 flex-fill`}>
      <img src={testimonial} alt='' className='blog-user' />
      <Engagement showShare={showShare} spacing={spacing} />
      <div className='blog-contents'>
        <h3 className='text-semi-bold'>
          <Link to='/blogs/:slug'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
        </h3>
        <p className='p4 lead text-medium'>Name</p>
        <p className='p4 lead text-medium'>November 3, 2020</p>
      </div>
    </div>
  )
}

export default BlogPost
