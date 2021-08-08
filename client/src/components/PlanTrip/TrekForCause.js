import { Link } from 'react-router-dom'

import checkOutPlans from '../../assets/buttons/check-out-plans.png'
import oppurtunities from '../../assets/buttons/oppurtunities.png'

import PageImage from '../PageImage/PageImage'
import PageConnect from './../layout/PageConnect'
import QandA from './QandA'

const qA = [
  {
    title: (
      <>
        What is <b>Trek</b> for a <b>Cause?</b>
      </>
    ),
    content: (
      <>
        <p className='p4 text-justify'>
          <b>Trek for a cause</b> as the title suggests, in this, you are trekking to the different places of the coun-
          try while fulfilling a selfless motive for the betterment of society.
        </p>
        <p className='p4 text-bold green-blue'>
          These campaigns are usually organized by not-for-profit organizations that are working to make society a
          better place.
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        How can <b>you be</b> a part of this?
      </>
    ),
    content: (
      <>
        <p className='p4 text-justify'>
          To trek for a motive, you need to be first sure of what kind of work you would be willing to participate in.
          So, here are a few points you can consider for your beginning:-
        </p>
        <ol className='green-blue text-semi-bold'>
          <li className='p4 text-justify'>Search for a similar community.</li>
          <li className='p4 text-justify'>Know about their culture and history.</li>
          <li className='p4 text-justify'>Connect to the locals and discuss the livelihood problems they face.</li>
          <li className='p4 text-justify'>Come up with some solutions which are real-time and creative.</li>
          <li className='p4 text-justify'>Travel, tour and implement with the engagement of locals.</li>
          <li className='p4 text-justify'>Share your experience and here, you became an inspiration for others.</li>
        </ol>
      </>
    ),
  },
  {
    title: (
      <>
        What’s <br />
        <b>Rewarding?</b>
      </>
    ),
    content: (
      <>
        <p className='p4 text-justify'>
          Rewards are countless. The more you volunteer, the <b>more you will grow and rise as a human.</b>
          The locals whom you would help will get an opportunity to know more about the world and their income means, in
          a way you would be stopping rural migration.
        </p>
        <p className='p4 text-justify'>
          You will have an <b>unlimited stock of stories and experiences to share.</b> In return, you will also get an
          insight to generate your own income by understanding and evaluating the opportuni- ties which are still
          residing in the local parts of the country.
        </p>
        <p className='p4 text-bold green-blue'>And after everything, you will bring a change in the community.</p>
        <div className='text-center btn-div'>
          <Link to='/travel-oppurtunities'>
            <img src={oppurtunities} alt='' className='cursor zoom-2' />
          </Link>
        </div>
      </>
    ),
  },
]

const TrekForCause = () => {
  return (
    <>
      <PageImage
        showOutline={true}
        title={
          <>
            Trek for a<br />
            Cause
          </>
        }
        height={400}
      />

      <div className='container-fluid vertical-margin learn-how p2'>
        <h1 className='text-semi-bold'>Learn how one can travel for free and still impact society</h1>
        <p className='p2 text-semi-bold lead pt-5'>
          When you love traveling and discovering your hidden self while having an opportunity to make a change, travel
          becomes a lifetime memory that will always be inspiring to everyone.
        </p>
      </div>

      <QandA qA={qA} />

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
      <PageConnect
        content={
          <>
            <h3 className='text-bold lead py-1 text-center add-line-break'>
              If you aren’t able to travel but still want to make a difference? <br />
              We will contact you!{' '}
              <b className='green-blue'>
                <u>Contact Form</u>
              </b>
            </h3>
          </>
        }
      />
    </>
  )
}

export default TrekForCause
