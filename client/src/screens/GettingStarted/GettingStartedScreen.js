import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import landingBG from '../../assets/images/blog-bg.png'
import aboutMain from '../../assets/images/about-us-main.svg'
import img1 from '../../assets/images/img-1.svg'
import img2 from '../../assets/images/img-2.svg'
import img3 from '../../assets/images/img-3.svg'
import yatri from '../../assets/images/yatri.svg'
import host from '../../assets/images/host.svg'

import contentCircle1 from '../../assets/vectors/content-circle-1.svg'
import downLeft from '../../assets/vectors/down-left-arrow.svg'
import downRight from '../../assets/vectors/down-right-arrow.svg'

import hostBtn from '../../assets/buttons/host.png'
import yatriBtn from '../../assets/buttons/yatri.png'

import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'
import PageImage from '../../components/PageImage/PageImage'

import './getting-started.scss'

const GettingStartedScreen = () => {
  const location = useLocation()
  useEffect(() => {
    const id = location.hash
    if (id !== '') {
      const res = document.querySelector(`${id}`)
      window.scrollTo(0, res.offsetTop - 10)
    } else window.scrollTo(0, 0)
  }, [location.hash])

  return (
    <>
      <Header />
      <Navbar />
      <PageImage imgSrc={landingBG} title={'Getting Started.'} showOutline={true} />
      <div className='container-fluid about-us-section vertical-margin'>
        <div className='row'>
          <div className='col-sm-8'>
            <h1 className='text-semi-bold lead'>About Us.</h1>
            <p className='p3 pt-3 text-medium lead text-justify'>
              Volunteer Yatra is an <b>adventure filled initiative</b> to travel across the country while volunteering
              and elevating INDIA like never before. In this campaign we will be mobilizing the youth to the untouched
              natural where they will be allowed to get connected and understand the various problems of that community.
            </p>
            <p className='p3 pt-3 text-medium lead text-justify'>
              The <b>travel will be free</b> as they will have to exchange their skills for accommodation with
              incredible hosts across India. We will have many skill exchange programs and fun-filled activities to
              bring.
            </p>
          </div>
          <div className='col-sm-4'>
            <img src={aboutMain} alt='' />
          </div>
        </div>
      </div>

      <div className='start-journey-section container-fluid vertical-margin'>
        <h1 className='text-semi-bold lead text-right'>Start your journey with</h1>
        <h1 className='text-semi-bold lead text-right'>Volunteer Yatra</h1>
        <div className='row'>
          <img src={img1} alt='' className='img img-1' />
          <img src={contentCircle1} alt='' className='content content-circle-1' />
          <div className='text-content text-content-1'>
            Volunteer Yatra is a community of people who believes in <b>growth, transformation, and collaboration.</b>
          </div>
        </div>
        <div className='row py-3'>
          <img src={downLeft} alt='' className='arrow down-left' />
        </div>
        <div className='row'>
          <img src={contentCircle1} alt='' className='content content-circle-2' />
          <div className='text-content text-content-2'>
            The more you live with this spirit, the more you can share it and <b>help more people</b> to believe in it.
          </div>
          <img src={img2} alt='' className='img img-2' />
        </div>
        <div className='row py-3'>
          <img src={downRight} alt='' className='arrow down-right' />
        </div>
        <div className='row last-row'>
          <img src={img3} alt='' className='img img-3' />
          <img src={contentCircle1} alt='' className='content content-circle-1' />
          <div className='text-content text-content-1'>
            So, confirm trips and get reviews on our site <b>to be recognized by the community</b> and selected for the
            programs.
          </div>
        </div>
      </div>

      <div className='container-fluid complete-guide'>
        <h2 className='text-semi-bold lead text-center' id='complete-guide'>
          Complete Guide
        </h2>
        <div className='row vertical-margin'>
          <div className='col-sm-6' id='i-m-yatri'>
            <div className='card bg-card'>
              <h2 className='text-semi-bold'>
                For our <br />
                Yatris.
              </h2>
              <ol>
                <li>Choose a project from the list of opportunities that suits you the most</li>
                <li>Connect and Chat with the host and click on “Confirm Trip”</li>
                <li>Check/Fill necessary documents and information provided</li>
                <li>Travel, Collaborate, Learn and experience living like a Local</li>
                <li>Become part of the whole community after your first project</li>
                <li>Be an Inspiration, share your stories, write a blog</li>
              </ol>
              <img src={yatri} alt='' />
            </div>
            <Link to='/info/yatri'>
              <img src={yatriBtn} alt='' className='type-btn cursor zoom-2' />
            </Link>
          </div>
          <div className='col-sm-6' id='i-m-host'>
            <div className='card'>
              <h2 className='text-semi-bold'>
                For our <br />
                Hosts.
              </h2>
              <ol>
                <li>Create an opportunity that fulfills all your requirements.</li>
                <li>Connect and Chat with the yatri for queries if any.</li>
                <li>Wait for the yatri to click on “Confirm Trip”</li>
                <li>Check/Fill necessary documents and information provided</li>
                <li>Experience the affordable barter system just like the old</li>
                <li>Be an Inspiration, share your stories, write a blog</li>
              </ol>
              <img src={host} alt='' />
            </div>
            <Link to='/info/host'>
              <img src={hostBtn} alt='' className='type-btn cursor zoom-2' />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GettingStartedScreen
