import { Link } from 'react-router-dom'
import downArrow from '../../assets/buttons/down-arrow.png'

import './navbar.scss'

const Navbar = ({ showShadow }) => {
  return (
    <div className={`second-navbar py-2 ${showShadow ? 'bottom-shadow' : ''}`}>
      <div className='container'>
        <div className='row text-bold no-gutters'>
          <div className='column col col-xs-12'>
            <div className='nav-item dropdown'>
              <Link className='nav-link' to='/getting-started' id='navbarDropdownGT'>
                Getting Started <img src={downArrow} alt='' className='down-arrow' />
              </Link>
              <ul className='dropdown-menu' id='navbarDropdownGT'>
                <Link className='dropdown-item text-semi-bold' to='/getting-started#i-m-yatri'>
                  I am a Yatri
                </Link>
                <Link className='dropdown-item text-semi-bold' to='/getting-started#i-m-host'>
                  I am a Host
                </Link>
                <Link className='dropdown-item text-semi-bold' to='/getting-started#complete-guide'>
                  Complete Guide
                </Link>
              </ul>
            </div>
          </div>
          <div className='column col col-xs-12'>
            <div className='nav-item dropdown'>
              <Link className='nav-link ml-3' to='/plan-your-trip' id='navbarDropdownPT'>
                Plan your trip <img src={downArrow} alt='' className='down-arrow' />
              </Link>
              <div className='dropdown-menu' id='navbarDropdownPT'>
                <Link className='dropdown-item text-semi-bold' to='/plan-your-trip'>
                  Budget Trip
                </Link>
                <Link className='dropdown-item text-semi-bold' to='/plan-your-trip/trek-for-cause'>
                  Be a change maker
                </Link>
                <Link className='dropdown-item text-semi-bold' to='/plan-your-trip/digital-nomad'>
                  Become a digital nomad
                </Link>
              </div>
            </div>
          </div>
          <div className='column col col-xs-12'>
            <div className='nav-item dropdown'>
              <Link className='nav-link ml-5' to='/blogs' id='navbarDropdownBlog'>
                Blogs <img src={downArrow} alt='' className='down-arrow' />
              </Link>
              <div className='dropdown-menu' id='navbarDropdownBlog'>
                <Link className='dropdown-item text-semi-bold' to='/blogs#popular-blogs'>
                  Popular Blogs
                </Link>
                <Link className='dropdown-item text-semi-bold' to='/blogs#how-to'>
                  How-To
                </Link>
                <Link className='dropdown-item text-semi-bold' to='/blogs#popular-blogs'>
                  What’s New on VY
                </Link>
              </div>
            </div>
          </div>
          <div className='column col col-xs-12'>
            <Link className='nav-link ml-2' to='#'>
              About TSA
            </Link>
          </div>
          <div className='column col col-xs-12'>
            <Link className='nav-link' to='#'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
