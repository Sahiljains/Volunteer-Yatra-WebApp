import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import member from '../../assets/vectors/member.svg'
import explorer from '../../assets/vectors/explorer.svg'
import correct from '../../assets/vectors/correct.png'
import planTripBtn from '../../assets/buttons/plan-trip.png'

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PageImage from '../../components/PageImage/PageImage'
import PageConnect from '../../components/layout/PageConnect'
import Footer from '../../components/Footer/Footer'

const PricingScreen = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <>
      <Header />
      <Navbar />
      <PageImage showOutline={true} title={'Plans & Pricing'} height={400} />

      <div className='plans-pricing container-fluid vertical-margin'>
        <h1 className='text-semi-bold text-center'>Check out our plans</h1>
        <div className='row'>
          <div className='col-sm-6 card-col px-4'>
            <div className='price-card card-shadow p-4'>
              <div className='row no-gutters img-row'>
                <div className='col-6 d-flex flex-column justify-content-center'>
                  <h2 className='text-semi-bold lead'>Schedule a Trip</h2>
                  <p className='p4 text-semi-bold green-blue'>INR 999/-</p>
                </div>
                <div className='col-6 p-4'>
                  <img src={explorer} alt='' className='w-100' />
                </div>
              </div>
              <div className='row shift-up d-flex flex-column px-3'>
                <h4 className='text-bold lead h-100'>Features:</h4>
                <div className='feature-list my-3'>
                  <div className='feature d-flex'>
                    <img src={correct} alt='' />{' '}
                    <h4 className='text-medium lead'>Choose a single project (upto 1 month)</h4>
                  </div>
                  <div className='feature d-flex'>
                    <img src={correct} alt='' />{' '}
                    <h4 className='text-medium lead'>
                      Access to <b className='green-blue'>public community</b> group
                    </h4>
                  </div>
                  <div className='feature d-flex'>
                    <img src={correct} alt='' /> <h4 className='text-medium lead'>Learn and develop new skills</h4>
                  </div>
                </div>
                <Link to='/register/yatri' className='text-center'>
                  <img src={planTripBtn} alt='' className='cursor zoom-2 plan-trip-btn pb-4' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6 card-col px-4'>
            <div className='price-card card-shadow p-4'>
              <div className='row no-gutters img-row'>
                <div className='col-6 d-flex flex-column justify-content-center'>
                  <h2 className='text-semi-bold lead'>Join our Community</h2>
                  <p className='p4 text-semi-bold green-blue'>INR 1999/-</p>
                </div>
                <div className='col-6 p-4'>
                  <img src={member} alt='' className='w-100' />
                </div>
              </div>
              <div className='row shift-up d-flex flex-column px-3'>
                <h4 className='text-bold lead h-100'>Features:</h4>
                <div className='feature-list my-3'>
                  <div className='feature d-flex'>
                    <img src={correct} alt='' />{' '}
                    <h4 className='text-medium lead'>
                      Choose as <b className='green-blue'>many projects as you want</b> (upto 1 year)
                    </h4>
                  </div>
                  <div className='feature d-flex'>
                    <img src={correct} alt='' />{' '}
                    <h4 className='text-medium lead'>
                      Access to <b className='green-blue'>pro community</b> group
                    </h4>
                  </div>
                  <div className='feature d-flex'>
                    <img src={correct} alt='' /> <h4 className='text-medium lead'>TSA Fellowship</h4>
                  </div>
                  <div className='feature d-flex'>
                    <img src={correct} alt='' />{' '}
                    <h4 className='text-medium lead'>Community benefits as well as support</h4>
                  </div>
                  <div className='feature d-flex'>
                    <img src={correct} alt='' />{' '}
                    <h4 className='text-medium lead'>
                      Live as a <b className='green-blue'>Digital Nomad</b>
                    </h4>
                  </div>
                </div>
                <Link to='/register/yatri' className='text-center'>
                  <img src={planTripBtn} alt='' className='cursor zoom-2 plan-trip-btn pb-4' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageConnect
        color={'gray'}
        content={
          <>
            <h1 className='text-semi-bold text-center lead'>We value your money!</h1>
            <h3 className='text-medium text-center lead mx-5'>
              At the end of a year, a report will be sent to u giving a glimpse of how your money has been spent!
            </h3>
          </>
        }
      />
      <PageConnect
        content={
          <div className='container-fluid py-3'>
            <p className='p4 text-medium text-justify lead'>
              “To build a community strong you don’t need to be a hero, you <br /> can be a significant human and{' '}
              <b className='green-blue'>yet make a distinct difference.”</b>
            </p>
          </div>
        }
      />
      <Footer showShadow={false} />
    </>
  )
}

export default PricingScreen
