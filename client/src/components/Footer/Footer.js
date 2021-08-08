/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo-header.png'

import insta from '../../assets/buttons/insta.png'
import fb from '../../assets/buttons/fb.png'
import yt from '../../assets/buttons/yt.png'
import twitter from '../../assets/buttons/twitter.png'
import linkd from '../../assets/buttons/linkd.png'
import rightShiftArrow from '../../assets/buttons/right-blog-shift.png'

import outline from '../../assets/vectors/outline.svg'

import './footer.scss'

const Footer = ({ showShadow, showLinks }) => {
  return (
    <footer className={`move-bottom ${showShadow ? 'top-shadow' : ''}`}>
      <div className='container-fluid'>
        <div className='row d-flex no-gutters'>
          <Link to='/'>
            <img src={logo} alt='' className='logo' />
          </Link>
          <div className='social-links d-flex ml-auto align-items-center'>
            <img src={insta} alt='' className='zoom-2 cursor' />
            <img src={fb} alt='' className='zoom-2 cursor' />
            <img src={yt} alt='' className='zoom-2 cursor' />
            <img src={twitter} alt='' className='zoom-2 cursor' />
            <img src={linkd} alt='' className='zoom-2 cursor' />
          </div>
        </div>
        {showLinks && (
          <div className='row pt-5 px-3'>
            <div className='col-md-8'>
              <div className='row page-links no-gutters'>
                <div className='col-6 col-md-4'>
                  <h4 className='text-regular'>Destinations</h4>
                  <div className='links ml-4'>
                    <div>
                      <Link to='/travel-oppurtunities/#RRajasthan'>Rajasthan</Link>
                    </div>
                    <div>
                      <Link to='/travel-oppurtunities/#Uttarakhand'>Uttarakhand</Link>
                    </div>
                    <div>
                      <Link to='/travel-oppurtunities/#Bihar'>Bihar</Link>
                    </div>
                    <div>
                      <Link to='/travel-oppurtunities/#Himachal Pradesh'>Himachal Pradesh</Link>
                    </div>
                    <div>
                      <Link to='/travel-oppurtunities/#Jammu'>Jammu</Link>
                    </div>
                  </div>
                </div>
                <div className='col-6 col-md-4'>
                  <h4 className='text-regular'>Travel with us</h4>
                  <div className='links ml-4'>
                    <div>
                      <Link to='/getting-started'>Getting Started</Link>
                    </div>
                    <div>
                      <Link to='/plan-your-trip'>Plan your trip</Link>
                    </div>
                    <div>
                      <Link to='/blogs'>Blog</Link>
                    </div>
                    <div>
                      <Link to='/help'>Help</Link>
                    </div>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <h4 className='text-regular'>Other Links</h4>
                  <div className='links ml-4'>
                    <div>
                      <a href='#'>About Us</a>
                    </div>
                    <div>
                      <a href='#'>Terms</a>
                    </div>
                    <div>
                      <a href='#'>Privacy</a>
                    </div>
                    <div>
                      <a href='#'>Sitemap</a>
                    </div>
                    <div>
                      <a href='#'>Covid-19</a>
                    </div>
                    <div>
                      <Link to='/admin'><a>Admin</a></Link>
                    </div>
                    <div>
                      <Link to='/hostpanel'><a>Host Dashboard</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 my-2 text-semi-bold'>
              <h4 className='footer-join-links zoom-3 cursor'>
                <Link to='/register/host'>
                  Join as Host <img src={rightShiftArrow} alt='' />
                </Link>
              </h4>
              <h4 className='footer-join-links zoom-3 cursor'>
                <Link to='/register/yatri'>
                  Join as Yatri <img src={rightShiftArrow} alt='' />
                </Link>
              </h4>
              <h4 className='footer-join-links zoom-3 cursor'>
                <Link to='/register/yatri'>
                  Visit The Social Adventures <img src={rightShiftArrow} alt='' />
                </Link>
              </h4>
            </div>
          </div>
        )}
      </div>
      <img src={outline} alt='' className='outline' />
      <div className='copy-right text-center py-4'>The Social Adventures &#169; All Right Reserved 2021</div>
    </footer>
  )
}

Footer.defaultProps = {
  showShadow: true,
  showLinks: true,
}

export default Footer
