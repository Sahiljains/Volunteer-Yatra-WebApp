import { lazy, useEffect } from 'react'
import { Link } from 'react-router-dom'

import landingBG from '../../assets/images/bg.png'
import landingText from '../../assets/images/main-title-img.png'
import testimonial_image from '../../assets/images/testimonial-image.jpg'
import member from '../../assets/images/member.svg'
import explorer from '../../assets/images/explorer.svg'
import expert from '../../assets/images/expert.svg'
import signUp from '../../assets/images/sign-up.svg'
import jini from '../../assets/images/jini.svg'

import langingImgButton from '../../assets/buttons/community_button.png'
import leftButtonArrow from '../../assets/buttons/left-button-arrow.png'
import leftShiftArrow from '../../assets/buttons/left-arrow.png'
import rightShiftArrow from '../../assets/buttons/right-arrow.png'
import likes from '../../assets/buttons/like-blog-button.png'
import views from '../../assets/buttons/views-blog-button.png'
import share from '../../assets/buttons/share-blog-button.png'
import checkPlans from '../../assets/buttons/check-out-plans.png'
import yatri from '../../assets/buttons/yatri.png'
import host from '../../assets/buttons/host.png'
import readMore from '../../assets/buttons/read-more.png'

import what_is_vy from '../../assets/vectors/what_is_vy 1.png'

import './homescreen.scss'

const Header = lazy(() => import('../../components/Header/Header'))
const Footer = lazy(() => import('../../components/Footer/Footer'))
const Navbar = lazy(() => import('../../components/Navbar/Navbar'))
const PageImage = lazy(() => import('../../components/PageImage/PageImage'))
const PlaceToVisit = lazy(() => import('../../components/PageLayouts/PlaceToVisit'))

const HomeScreen = () => {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <Header />
      <Navbar />
      <PageImage imgSrc={landingBG} imgTitle={landingText} imgBtn={langingImgButton} />

      <div className='container-fluid vertical-margin'>
        <div className='row'>
          <div className='col-md-9'>
            <h1 className='text-semi-bold'>What is Volunteer Yatra?</h1>
            <p className='p1 pt-4'>
              Volunteer Yatra is an <b>adventure-filled initiative</b> to travel across the country while volunteering
              and elevating India like never before.
              <label className='mt-4'>
                Making <b>travel affordable for everyone</b> by connecting travelers (Yatris) & hosts across India who
                offer food & accommodation in exchange for the skills.
              </label>
            </p>
          </div>
          <div className='col-md-3'>
            <img src={what_is_vy} alt='' className='what-is-vy' />
          </div>
        </div>
      </div>

      <PlaceToVisit />

      <div className='container-fluid vertical-margin testimonial-section'>
        <div className='explore-button zoom'>
          <Link to='/blogs#popular-blogs'>
            <span className='text-bold'>View all stories </span>
          </Link>
          <img src={leftButtonArrow} alt='' />
        </div>
        <h1 className='text-semi-bold'>
          From the columns of <br /> Volunteer Yatra
        </h1>
        <p className='p2 pt-3'>
          The journey we started is registered in our memories and we would love to share our stories with you.
        </p>
        <div className='row vertical-margin'>
          <div className='col-sm-5'>
            <img src={testimonial_image} alt='' className='testimonial-image' />
            <div className='arrow-signs'>
              <img src={leftShiftArrow} alt='' className='left-shift zoom' />
              <img src={rightShiftArrow} alt='' className='right-shift zoom' />
            </div>
          </div>
          <div className='col-sm-7'>
            <div className='blog-data'>
              <h4 className='blog-title text-semi-bold'>
                Want to travel for free? I believe this article will help you.
              </h4>
              <p className='p2 blog-description'>
                It all starts with a need to have some change in life and a need to do some- thing that not only gives
                you immense pleasure but also teaches you about different cultures and ways of life.
                <Link to='/blogs/:slug'>
                  <img src={readMore} alt='' className='cursor zoom-2' />
                </Link>
              </p>
              <div className='blog-info d-flex'>
                <div className='blog-owner'>
                  <h6>Aakash</h6>
                  <h6>November 6, 2020</h6>
                </div>
                <div className='blog-interactions'>
                  <img src={views} alt='' /> 100
                  <img src={likes} alt='' /> 50
                  <img src={share} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='vertical-margin participate'>
        <div className='container-fluid'>
          <h1 className='text-semi-bold'>How to participate</h1>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <img src={member} alt='' />
            <h3 className='text-bold'>Become a member of our community</h3>
            <p className='p2'>Join us in this yatra and become a part of our community.</p>
          </div>
          <div className='col-sm-3'>
            <img src={explorer} alt='' />
            <h3 className='text-bold'>Be an explorer</h3>
            <p className='p2'>Choose opportunities to travel across the country & volunteer in our skill</p>
          </div>
          <div className='col-sm-3'>
            <img src={expert} alt='' />
            <h3 className='text-bold'>Get positive reviews & become an expert</h3>
            <p className='p2'>Earning good reviews would take you a level higher to the rank of an expert.</p>
          </div>
          <div className='col-sm-3'>
            <img src={signUp} alt='' />
            <h3 className='text-bold'>Sign up for the programs that inspire you</h3>
            <p className='p2'>Your stories would now inspire your community and would help you in achieving success.</p>
          </div>
        </div>
        <div className='text-center check-out-plans'>
          <Link to='/pricing'>
            <img src={checkPlans} alt='' className='zoom-2 cursor' />
          </Link>
        </div>
      </div>

      <div className='container-fluid vertical-margin questions'>
        <div className='row'>
          <div className='col-sm-7 d-flex flex-column justify-content-center'>
            <h1 className='text-semi-bold'>Hey ya!!</h1>
            <h1 className='text-semi-bold'>Still have questions?</h1>
            <p className='p2 pt-3'>We would love to answer your questions and have your suggestions.</p>
            <div className='d-flex btn-row'>
              <Link to='/info/yatri'>
                <img src={yatri} alt='' className='cursor zoom-2' />
              </Link>
              <Link to='/info/host'>
                <img src={host} alt='' className='cursor zoom-2' />
              </Link>
            </div>
          </div>
          <div className='col-sm-5 jini'>
            <img src={jini} alt='' />
          </div>
        </div>
      </div>

      <Footer showShadow={true} />
    </>
  )
}

export default HomeScreen
