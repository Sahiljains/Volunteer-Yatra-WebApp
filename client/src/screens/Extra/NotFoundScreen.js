import { Link } from 'react-router-dom'

import img404 from '../../assets/vectors/404.svg'
import backHome from '../../assets/buttons/back-home.png'

const NotFoundScreen = () => {
  return (
    <div className='container-fluid'>
      <div className='row vertical-margin'>
        <div className='col-sm-8'>
          <img src={img404} alt='' />
        </div>
        <div className='col-sm-4 d-flex flex-column justify-content-center p-5'>
          <h1 className='text-bold lead'>OOPS!</h1>
          <h4 className='text-bold lead py-2'>We can’t seem to find the page you’re looking for buddy.</h4>
          <h4 className='text-medium lead py-4'>But the adventure never ends, why not try again by going</h4>
          <Link to='/'>
            <img src={backHome} alt='' className='w-50 cursor zoom-2' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundScreen
