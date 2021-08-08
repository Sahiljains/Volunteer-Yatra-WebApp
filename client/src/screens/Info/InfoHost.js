import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './info.scss'

import hostInfo from '../../assets/vectors/host-info.svg'
import searchHost from '../../assets/vectors/search-host.svg'
import finishProject from '../../assets/vectors/finish-project.svg'
import skilled from '../../assets/vectors/skilled.svg'
import transaction from '../../assets/vectors/transaction.svg'
import getVolunteer from '../../assets/vectors/get-volunteer.svg'
import growTogether from '../../assets/vectors/grow-together.svg'
import fullSupport from '../../assets/vectors/full-support.svg'
import searchBox from '../../assets/vectors/search-box.svg'
import searchIcon from '../../assets/vectors/search-icon.png'

import leftArrow from '../../assets/buttons/left-blog-shift.png'
import rightArrow from '../../assets/buttons/right-blog-shift.png'
import becomeHost from '../../assets/buttons/become-host.png'

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageImage from '../../components/PageImage/PageImage'
import PageConnect from '../../components/layout/PageConnect'
import ListExpand from '../../components/PlanTrip/ListExpand'
import ProjectType from './ProjectType'

const questions = [
  {
    question: 'Create a meaningful learning experience',
    answers: [
      <>
        This is the <b className='green-blue'>primary expectation</b> which usually consists of some combination of
        projects, meetings, mentoring observational opportunities, and participation in the project/task as a whole.
      </>,
    ],
  },
  {
    question: 'Talk to your yatri before their arrival',
    answers: [
      <>
        This is the <b className='green-blue'>primary expectation</b> which usually consists of some combination of
        projects, meetings, mentoring observational opportunities, and participation in the project/task as a whole.
      </>,
    ],
  },
  {
    question: 'Have an on-site supervisor',
    answers: [
      <>
        This is the <b className='green-blue'>primary expectation</b> which usually consists of some combination of
        projects, meetings, mentoring observational opportunities, and participation in the project/task as a whole.
      </>,
    ],
  },
  {
    question: 'A clear project plan',
    answers: [
      <>
        This is the <b className='green-blue'>primary expectation</b> which usually consists of some combination of
        projects, meetings, mentoring observational opportunities, and participation in the project/task as a whole.
      </>,
    ],
  },
  {
    question: 'Regular check-in meetings',
    answers: [
      <>
        This is the <b className='green-blue'>primary expectation</b> which usually consists of some combination of
        projects, meetings, mentoring observational opportunities, and participation in the project/task as a whole.
      </>,
    ],
  },
  {
    question: 'Project support',
    answers: [
      <>
        This is the <b className='green-blue'>primary expectation</b> which usually consists of some combination of
        projects, meetings, mentoring observational opportunities, and participation in the project/task as a whole.
      </>,
    ],
  },
]

const InfoHost = ({ location }) => {
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
      <PageImage showOutline={true} title={'I am a Host'} height={400} />
      <div className='container-fluid vertical-margin'>
        <div className='row'>
          <div className='col-sm-8'>
            <h1 className='text-semi-bold'>Dear Hosts</h1>
            <p className='p4 text-medium pt-2'>
              Are you looking for a skilled/unskilled volunteers? <br /> Do you have a cool tasks for them in your mind?
            </p>
            <p className='p4 text-semi-bold green-blue pt-4'>Well then you are in the right place!</p>
            <p className='p4 text-medium'>
              We’re putting together hosts from all over India who are willing to give Yatris a lifetime experience and
              in return, Yatris will help you complete your tasks with their skills and expertise.
            </p>
          </div>
          <div className='col-sm-4'>
            <img src={hostInfo} alt='' />
          </div>
        </div>
      </div>

      <div className='container-fluid vertical-margin key-benefits'>
        <h1 className='text-semi-bold'>Key benefits for Hosts</h1>
        <div className='row'>
          <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
            <img src={searchHost} alt='' />
            <p className='py-3 p1 text-medium lead'>
              Completely free platform, no hidden charges, just register and{' '}
              <Link to='/register/host' className='green-blue text-semi-bold'>
                <u>Be a Host</u>
              </Link>
            </p>
          </div>
          <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
            <img src={finishProject} alt='' />
            <p className='py-3 px-5 p1 text-medium lead'>Finish your dream projects</p>
          </div>
          <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
            <img src={skilled} alt='' />
            <p className='py-3 p1 text-medium lead'>Have skilled professionals onboard</p>
          </div>
          <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
            <img src={transaction} alt='' />
            <p className='py-3 p1 text-medium lead'>Zero money transaction involvement</p>
          </div>
          <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
            <img src={getVolunteer} alt='' />
            <p className='py-3 p1 text-medium'>
              Volunteers who not only understand your task but the vision behind it too
            </p>
          </div>
          <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
            <img src={growTogether} alt='' />
            <p className='py-3 p1 text-medium'>Grow together</p>
          </div>
          <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'></div>
          <div className='col-sm-4 info-key-col d-flex flex-column align-items-center'>
            <img src={fullSupport} alt='' />
            <p className='py-3 p1 text-medium'>TSA’s full community support in scaling up your initiative</p>
          </div>
        </div>
      </div>

      <ProjectType />

      <PageConnect
        color='yellow'
        content={
          <>
            <h3 className='text-semi-bold lead text-center my-4 mx-5 px-5'>
              Couldn’t find your project of interest? Register yourself as a host with the project you are interested
              in.
            </h3>
            <Link to='/register/host' className='text-center zoom-2'>
              <img src={becomeHost} alt='' style={{ width: '30%' }} />
            </Link>
          </>
        }
      />

      <ListExpand title={<>What is expected from you?</>} questions={questions} showBullets={false} />

      <div className='skilled-people'>
        <div className='container-fluid' id='skills'>
          <h1 className='text-semi-bold'>All the skillful people we have.</h1>
        </div>
        <div className='gray-info mt-5'>
          <div className='container-fluid'>
            <div className='row py-5'>
              <div className='col-sm-12 d-flex align-items-center text-box'>
                <img src={searchBox} alt='' className='search-bar w-100' />
                <div className='search-textbox'>
                  <img src={searchIcon} alt='' className='search-icon' />
                  <input
                    type='text'
                    name='search'
                    id='search'
                    className='search-input-box'
                    placeholder='Search by skills'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row px-5'>
            <div className='col-1 d-flex align-items-center'>
              <img src={leftArrow} alt='' className='zoom cursor' />
            </div>
            <div className='col-10'>
              <div className='row skills-row my-5'>
                <div className='col-sm-4 d-flex flex-column align-items-center px-5 py-2'>
                  <div className='skill mb-5' />
                  <p className='p4 text-justify text-semi-bold'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  </p>
                </div>
                <div className='col-sm-4 d-flex flex-column align-items-center px-5 py-2'>
                  <div className='skill mb-5' />
                  <p className='p4 text-justify text-semi-bold'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  </p>
                </div>
                <div className='col-sm-4 d-flex flex-column align-items-center px-5 py-2'>
                  <div className='skill mb-5' />
                  <p className='p4 text-justify text-semi-bold'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  </p>
                </div>
                <div className='col-sm-4 d-flex flex-column align-items-center px-5 py-2'>
                  <div className='skill mb-5' />
                  <p className='p4 text-justify text-semi-bold'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  </p>
                </div>
                <div className='col-sm-4 d-flex flex-column align-items-center px-5 py-2'>
                  <div className='skill mb-5' />
                  <p className='p4 text-justify text-semi-bold'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  </p>
                </div>
                <div className='col-sm-4 d-flex flex-column align-items-center px-5 py-2'>
                  <div className='skill mb-5' />
                  <p className='p4 text-justify text-semi-bold'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  </p>
                </div>
              </div>
            </div>
            <div className='col-1 d-flex align-items-center'>
              <img src={rightArrow} alt='' className='zoom cursor' />
            </div>
          </div>
        </div>
      </div>

      <PageConnect
        content={
          <div className='mt-4 mb-5 d-flex flex-column'>
            <h3 className='text-semi-bold lead text-center my-4 mx-5 px-5'>Connect with our amazing Yatris</h3>
            <Link to='/register/host' className='text-center zoom-2'>
              <img src={becomeHost} alt='' style={{ width: '30%' }} />
            </Link>
          </div>
        }
      />
      <Footer showShadow={false} />
    </>
  )
}

export default InfoHost
