import { Link } from 'react-router-dom'

import oppurtunities from '../../assets/buttons/oppurtunities.png'
import skillListBtn from '../../assets/buttons/skill-list.png'
import becomeYatriBtn from '../../assets/buttons/become-yatri.png'

import PageImage from '../PageImage/PageImage'
import PageConnect from '../layout/PageConnect'
import ProsCons from './ProsCons'
import ListExpand from './ListExpand'

const pros = [
  'Travel around the world',
  'The ability of self-discovery and reinvention',
  'Meet new people and share stories',
  'Earn while you travel',
  'Its about the experience you’ll gain',
]

const cons = ['Homesickness', 'Nomadic life- it’s not meant for everyone', 'It will be a life of uncertainty']

const questions = [
  {
    question: 'Identify your skills',
    answers: [
      <>
        By joining a digital nomad community you get <b>access to like-minded individuals</b> who are ready to take the
        world by storm.
      </>,
      <>
        Joining them, you’ll have a <b>built-in support group and wealth of knowledge</b> as you navigate the waters of
        digital nomadism.
      </>,
      <>You can learn new skills from community members or get tips for working online or selecting a new home base.</>,
    ],
  },
  {
    question: 'Join the Digital Nomad Community',
    answers: [
      <>
        By joining a digital nomad community you get <b>access to like-minded individuals</b> who are ready to take the
        world by storm.
      </>,
      <>
        Joining them, you’ll have a <b>built-in support group and wealth of knowledge</b> as you navigate the waters of
        digital nomadism.
      </>,
      <>You can learn new skills from community members or get tips for working online or selecting a new home base.</>,
    ],
  },
  {
    question: 'Reducing your ties with a permanent location',
    answers: [
      <>
        By joining a digital nomad community you get <b>access to like-minded individuals</b> who are ready to take the
        world by storm.
      </>,
      <>
        Joining them, you’ll have a <b>built-in support group and wealth of knowledge</b> as you navigate the waters of
        digital nomadism.
      </>,
      <>You can learn new skills from community members or get tips for working online or selecting a new home base.</>,
    ],
  },
  {
    question: 'Make sure you’ve a reliable income source',
    answers: [
      <>
        By joining a digital nomad community you get <b>access to like-minded individuals</b> who are ready to take the
        world by storm.
      </>,
      <>
        Joining them, you’ll have a <b>built-in support group and wealth of knowledge</b> as you navigate the waters of
        digital nomadism.
      </>,
      <>You can learn new skills from community members or get tips for working online or selecting a new home base.</>,
    ],
  },
  {
    question: 'Travel, collaborate and live your best life',
    answers: [
      <>
        By joining a digital nomad community you get <b>access to like-minded individuals</b> who are ready to take the
        world by storm.
      </>,
      <>
        Joining them, you’ll have a <b>built-in support group and wealth of knowledge</b> as you navigate the waters of
        digital nomadism.
      </>,
      <>You can learn new skills from community members or get tips for working online or selecting a new home base.</>,
    ],
  },
]

const DigitalNomad = () => {
  return (
    <>
      <PageImage showOutline={true} title={'Digital Nomad'} height={400} />
      <div className='container-fluid vertical-margin become-nomad'>
        <h1 className='text-semi-bold'>Become a Digital Nomad</h1>
        <p className='p4 text-semi-bold lead pt-5'>Learn how one can start traveling as a digital nomad across India</p>
        <div className='p2'>
          <p className='p2 text-medium lead pt-3'>
            When you love traveling and discovering your hidden self while having an opportunity to travel which in turn
            becomes a lifetime memory.
          </p>
          <p className='p2 text-medium lead pt-3'>
            Choose volunteering opportunities like Place marketing, Design, IT, Writing, Media, Tutoring, and
            Consulting, among others.
          </p>
        </div>
        <Link to='/travel-oppurtunities'>
          <img src={oppurtunities} alt='' className='cursor zoom-2' />
        </Link>
      </div>

      <div className='what-is-nomad vertical-margin'>
        <div className='container-fluid'>
          <h1 className='text-semi-bold'>What is a Digital Nomad?</h1>
        </div>
        <div className='row no-gutters'>
          <div className='card'>
            <p className='p3 text-justify text-medium lead pb-3'>
              Ever considered <b>working while you travel around the world</b>, that’s what the digital nomads do. As
              the name suggests they work digitally while traveling or have multiple jobs to gain their skills from.
            </p>
            <p className='p3 text-justify text-medium lead pb-3'>
              The freelancers and telecommuters can also be considered digital nomads.
            </p>
            <p className='p3 text-justify text-medium lead'>
              They can be found working in most industries in the knowledge economy:{' '}
              <b>marketing, design, IT, writing, media, tutoring, and consulting,</b> among others.
            </p>
          </div>
        </div>
      </div>

      <ListExpand
        questions={questions}
        title={
          <>
            How to become a <br />
            Digital Nomad?
          </>
        }
      />

      <ProsCons pros={pros} cons={cons} />
      <PageConnect
        color='gray'
        content={
          <>
            <h3 className='text-semi-bold lead py-1'>
              Best digital nomad jobs on the basis of <br /> skill opportunities, few are listed below:
            </h3>
            <p className='p4 text-center text-bold green-blue py-3'>
              Marketing, design, IT, writing, media, tutoring, and consulting, among others
            </p>
            <Link className='text-center' to='/info/host#skills'>
              <img src={skillListBtn} alt='' className='cursor zoom-2' style={{ width: '40%' }} />
            </Link>
          </>
        }
      />
      <PageConnect
        content={
          <>
            <p className='p4 text-center pt-3'>
              Plan your year ahead with <b className='green-blue'>Volunteer Yatra</b>
            </p>
            <Link to='/register/yatri' className='text-center'>
              <img src={becomeYatriBtn} alt='' className='cursor zoom-2 pb-5' style={{ width: '35%' }} />
            </Link>
          </>
        }
      />
    </>
  )
}

export default DigitalNomad
