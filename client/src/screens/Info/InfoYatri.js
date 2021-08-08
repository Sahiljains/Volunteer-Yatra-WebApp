import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import becomeYatri from '../../assets/buttons/become-yatri.png'
import checkOutPlans from '../../assets/buttons/check-out-plans.png'
import oppurtunities from '../../assets/buttons/oppurtunities.png'

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageImage from '../../components/PageImage/PageImage'
import PlaceToVisit from '../../components/PageLayouts/PlaceToVisit'
import ProjectType from './ProjectType'
import PageConnect from '../../components/layout/PageConnect'

const InfoYatri = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <>
      <Header />
      <Navbar />
      <PageImage showOutline={true} title={'I am a Yatri'} height={400} />
      <div className='container-fluid vertical-margin'>
        <h1 className='text-semi-bold'>Dear Yatri's</h1>
        <p className='p2 text-medium lead py-3'>
          We are seeking a community of youth, travellers and change makers who are passionate to travel to a new
          destination to fill their life with new experiences and stories to share while becoming a part of a mission to
          bring a real change in the life of people.
        </p>
        <Link to='/register/yatri'>
          <img src={becomeYatri} alt='' className='zoom-2 cursor' style={{ width: '18%' }} />
        </Link>
      </div>

      <PlaceToVisit title={<h2 className='text-semi-bold'>Choose from destinations</h2>} showContent={false} />

      <ProjectType
        content={
          <div className='text-center my-5 pb-5'>
            <Link to='/travel-oppurtunities'>
              <img src={oppurtunities} alt='' className='zoom-2' style={{ width: '25%' }} />
            </Link>
          </div>
        }
      />

      <PageConnect
        color='gray'
        content={
          <>
            <p className='p4 text-center'>
              Volunteer Yatra is a community of people who
              <br />
              believes in <b className='green-blue'>growth, transformation & collaboration.</b>
            </p>
            <Link to='/pricing' className='text-center'>
              <img src={checkOutPlans} alt='' className='cursor zoom-2 pt-3' style={{ width: '20%' }} />
            </Link>
          </>
        }
      />

      <Footer showShadow={false} />
    </>
  )
}

export default InfoYatri
