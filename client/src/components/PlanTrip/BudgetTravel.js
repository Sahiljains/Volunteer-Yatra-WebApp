import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import planTrip from '../../assets/vectors/plan-trip-svg.svg'

import communityBlue from '../../assets/buttons/community_button_blue.png'

import PageImage from '../PageImage/PageImage'
import PlaceToVisit from '../PageLayouts/PlaceToVisit'
import ProsCons from './ProsCons'
import PageConnect from '../layout/PageConnect'
import QandA from './QandA'

const qA = [
  {
    title: (
      <>
        What is <b>travel</b> on a <b>Budget?</b>
      </>
    ),
    content: (
      <>
        <p className='p4 text-justify'>
          This assumption that we need a huge amount of money to travel is just a myth. You can definitely have a great
          trip on a low budget (or even free).... all you need to do is become creative on your part.
        </p>
        <p className='p4 text-justify'>
          With the right budget and the right mindset, you can make your travel dream a reality. The activities which
          would require budget planning are transport, accommodation, food, and tour.
        </p>
        <p className='p4 text-bold green-blue'>Making a realistic budget for them would help you in a budget trip.</p>
      </>
    ),
  },
  {
    title: (
      <>
        Best way to travel <b>accross India</b> on a Budget?
      </>
    ),
    content: (
      <>
        <p className='p4 text-justify'>
          Travel can be budget-friendly until we certainly believe in splurging our hard-earned money on unwanted
          things. So, here we have a few tips and tricks for you to travel in the best way across India, that too on a
          set budget:-
        </p>
        <ol className='green-blue text-medium'>
          <li className='p4 text-justify'>Know about your budget while choosing your destination.</li>
          <li className='p4 text-justify'>Research about the culture and off-season time to visit the place.</li>
          <li className='p4 text-justify'>
            Consider car sharing, public transports, over other expensive transport systems.
          </li>
          <li className='p4 text-justify'>Stay for cheap - with the locals.</li>
          <li className='p4 text-justify'>
            Prioritize and plan which meals you’ll splurge on will ensure that you will stay within your budget.
          </li>
          <li className='p4 text-justify'>
            It is very tempting to plan everything in advance, but it’s important to be flexible.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: (
      <>
        Where to <b>travel</b> on a <b>Budget?</b>
      </>
    ),
    content: (
      <>
        <p className='p4 text-justify'>
          Check a few of our worthy travel destinations with the best volunteering opportunities and accommodation, that
          too in your budget.
        </p>
        <p className='p4 text-bold green-blue'>
          Plan, concise, explore places, and get ready for an unforgettable journey.
        </p>
        <div className='text-center btn-div'>
          <Link to='/register/yatri'>
            <img src={communityBlue} alt='' className='cursor zoom-2' />
          </Link>
        </div>
      </>
    ),
  },
]

const pros = [
  'Opportunity for adventure and spontaneity',
  'The ability of self-discovery and reinvention',
  'It can be affordable',
  'You can learn new languages',
  'Make new friends',
  'Expand your knowledge',
  'Come out of your comfort zone',
]

const cons = [
  'Travelling can be costly',
  'It can be exhausting',
  'Carelessness might get you in trouble',
  'Homesickness',
  'You might get the travel bug',
  'Communication problems',
]

const BudgetTravel = () => {
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
      <PageImage showOutline={true} title={'Budget Travel'} height={400} />
      <div className='container-fluid travel-budget vertical-margin'>
        <div className='row'>
          <div className='col-sm-7 d-flex flex-column justify-content-center'>
            <h1 className='text-semi-bold'>Travel on a budget</h1>
            <p className='p4 pt-3 text-medium'>Learn how one can travel for free across India.</p>
            <p className='p4 text-regular'>
              Pick your favorite travel destination, load your creativity, and begin your travel on a budget.
            </p>
          </div>
          <div className='col-sm-5 d-flex justify-content-center'>
            <img src={planTrip} alt='' />
          </div>
        </div>
      </div>
      <PlaceToVisit />
      <QandA qA={qA} />
      <ProsCons pros={pros} cons={cons} />
      <PageConnect
        color='gray'
        content={
          <>
            <h3 className='text-bold lead py-1'>Travel will help you in dealing with stress.</h3>
            <h3 className='text-bold lead py-1'>You can learn about new communities & cultures.</h3>
          </>
        }
      />
    </>
  )
}

export default BudgetTravel
