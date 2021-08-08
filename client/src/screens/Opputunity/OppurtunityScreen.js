import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getOpportunities } from "../../services/volunteer";

import executeTostr from "../../containers/common/tostrMsg/TostrComponent";
import landingBG from '../../assets/images/blog-bg.png'
import landingText from '../../assets/images/travel-text.png'
import searchIcon from '../../assets/vectors/search-icon.png'
import checkOutPlans from '../../assets/buttons/check-out-plans.png'
import explorerHat from '../../assets/images/explorer-hat.svg'
import review from '../../assets/images/review.svg'
import vip from '../../assets/images/vip-card.svg'
import signUp from '../../assets/images/sign-up-comp.svg'
import star from '../../assets/vectors/star.svg'
import next from '../../assets/buttons/next.png'
import Dropdown from './../../utils/Dropdown'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import PageImage from './../../components/PageImage/PageImage'
import PageConnect from './../../components/layout/PageConnect'

import './oppurtunity.scss'

const filterOptions = [
  {
    name: 'Destinations',
    options: ['Rajasthan', 'Delhi', 'Maharashtra', 'Himachal Pradesh', 'Tamil Nadu'],
    toAdd: 5,
  },
  {
    name: 'Host Type',
    options: Array(25).fill('Lorem ipsum'),
    toAdd: 10,
  },
  {
    name: 'Experience Type',
    options: Array(25).fill('Lorem ipsum'),
    toAdd: 10,
  },
]

const durationArray = ['Days', 'Weeks', 'Months']

const oppurtunity = {
  title: 'Lorem ipsum dolor sit, amet, consectetur elit.',
  location: 'Jaipur, Rajasthan',
  rating: 4.5,
  filters: ['10 days', 'Host Type 1', 'Exp. Type 1'],
  perks: ['Perk1', 'Perk2', 'Perk 3'],
}

const options = ['Sort By', 'Perks', 'Duration', 'Rating']

const OppurtunityScreen = ({ location, history }) => {
  useEffect(() => {
    window.scrollTo(0, location.hash !== null ? document.getElementById('hashed').offsetTop - 10 : 0)
    if (location.hash) {
      setDestination(location.hash.replace('#', ''))
      setIsFilter(true)
    }
  }, [location.hash])

  const [opportunities, setOpportunities] = useState([]);
  const [destinationLimit, setDestinationLimit] = useState(5)
  const [hostTypeLimit, setHostTypeLimit] = useState(5)
  const [experienceTypeLimit, setExperienceTypeLimit] = useState(5)

  const [destination, setDestination] = useState('')
  const [hostType, setHostType] = useState('')
  const [experienceType, setExperienceType] = useState('')
  const [duration, setDuration] = useState('')
  const [isFilter, setIsFilter] = useState(false)

  const resetFilter = () => {
    setDestination('')
    setHostType('')
    setExperienceType('')
    setDuration('')
    setIsFilter(false)
    if (location.hash) {
      history.push('/travel-oppurtunities')
    }
  }

  useEffect(() => {
		const fetchOpportunities = async () => {
			const response = await getOpportunities(destination);

			console.log(response);

			if (response && !response.data) {
				executeTostr("Server error", { type: "error" });
			} else if (response && response.status === 401) {
				executeTostr(response.data.message, { type: "error" });
			} else if (response && response.data && !response.data.success) {
				executeTostr(response.data.data.err);
			} else if (response && response.data && response.data.success) {
				setOpportunities(response.data.data);
				console.log("Oppo", opportunities);
			}
		};

		fetchOpportunities();
	}, [destination]);

  return (
    <>
      <Header />
      <Navbar />
      <PageImage imgSrc={landingBG} imgTitle={landingText} showOutline={true} expandImgText={true} />

      <div className='container-fluid vertical-margin' id='hashed'>
        <h1 className='text-semi-bold'>Volunteering Opportunities</h1>
        <div className='row vertical-margin filter-row'>
          <div className='col-md-3 filter-col'>
            <div className='d-flex align-items-center'>
              <h3 className='text-bold'>Filters</h3>
              <h4 className='text-medium green-blue ml-auto cursor'>
                <label className='cursor zoom-2 m-0' onClick={resetFilter}>
                  Clear all
                </label>
              </h4>
            </div>
            <div className='yellow-line mt-2'></div>
            <div className='d-flex align-items-center text-box'>
              <div className='search-textbox'>
                <div className='search-input-box'>
                  <input
                    type='text'
                    name='search'
                    id='search'
                    className='search-input'
                    placeholder='Search for a destination'
                  />
                  <img src={searchIcon} alt='' className='search-icon' />
                </div>
              </div>
            </div>
            <div className='filter-options mx-3 mt-5'>
              {filterOptions.map((fop, index) => (
                <div key={index}>
                  <h4 className='text-bold my-3 mx-4'>{fop.name}</h4>
                  {fop.options.map(
                    (op, i) =>
                      i <
                        (fop.name === 'Destinations'
                          ? destinationLimit
                          : fop.name === 'Host Type'
                          ? hostTypeLimit
                          : experienceTypeLimit) && (
                        <div
                          className={`choices d-flex align-items-center cursor ml-4 my-2 ${
                            fop.name === 'Destinations'
                              ? destination === op
                                ? 'selected'
                                : ''
                              : fop.name === 'Host Type'
                              ? hostType === op
                                ? 'selected'
                                : ''
                              : fop.name === 'Experience Type'
                              ? experienceType === op
                                ? 'selected'
                                : ''
                              : ''
                          }`}
                          key={i}
                          onClick={() => {
                            if (fop.name === 'Destinations') setDestination(op)
                            else if (fop.name === 'Host Type') setHostType(op)
                            else if (fop.name === 'Experience Type') setExperienceType(op)
                            setIsFilter(true)
                          }}>
                          <div className='bullet' />
                          <h4 className='text-medium lead mx-2 my-0'>{op}</h4>
                        </div>
                      )
                  )}
                  {fop.options.length >
                    (fop.name === 'Destinations'
                      ? destinationLimit
                      : fop.name === 'Host Type'
                      ? hostTypeLimit
                      : experienceTypeLimit) && (
                    <h6
                      className='green-blue ml-5 mt-3 cursor'
                      onClick={() => {
                        if (fop.name === 'Destinations') setDestinationLimit(destinationLimit + fop.toAdd)
                        else if (fop.name === 'Host Type') setHostTypeLimit(hostTypeLimit + fop.toAdd)
                        else if (fop.name === 'Experience Type') setExperienceTypeLimit(experienceTypeLimit + fop.toAdd)
                      }}>
                      + {fop.toAdd} more
                    </h6>
                  )}
                  <div className='yellow-line'></div>
                </div>
              ))}
              <div className='duration mx-4'>
                <h4 className='text-bold my-3'>Duration</h4>
                <div className='gray-line'></div>
                <div className='row time-line no-gutters'>
                  {durationArray.map((dr, i) => (
                    <div
                      className={`col d-flex flex-column cursor ${duration === dr ? 'selected-bullet' : ''}`}
                      onClick={() => {
                        setDuration(dr)
                        setIsFilter(true)
                      }}
                      key={i}>
                      <div className={`bullet ml-${2 + i}`} />
                      <p className={`text-semi-bold mt-2 ${dr === 'Months' ? 'px-2' : ''}`}>{dr}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='yellow-line mt-4 mb-4'></div>
              <h5 className='text-medium green-blue ml-auto text-right'>
                <label className='cursor zoom-2' onClick={resetFilter}>
                  Clear all
                </label>
              </h5>
            </div>
          </div>
          <div className='col-md-9 filtered-options-col'>
            <h3 className={`text-bold ${isFilter ? 'w-75' : ''}`}>
              {isFilter ? (
                <>
                  Volunteering opportunities <br />
                  {destination !== '' && `in ${destination} `}
                  {hostType !== '' && `with host type ${hostType.toLowerCase()} `}
                  {experienceType !== '' && `as ${experienceType.toLowerCase()} `}
                  {duration !== '' && `for ${duration.toLowerCase()} `}
                </>
              ) : (
                <>
                  Endless volunteering opportunities <br /> with Volunteer Yatra.
                </>
              )}
            </h3>
            {isFilter && (
              <Dropdown
                className={'dropdown-div border-frame position-absolute top right'}
                options={options}
                defaultOption='Sort By'
              />
            )}
            <div className='row no-filter-row'>
              {!isFilter
                ? opportunities.map((oppo, index) => (
                    <div className='col-sm-4' key={index}>
                      <div className='img-div' />
                      <Link to={`/travel-oppurtunities/${oppo.placeId}`}>
                        <p className='text-bold lead mt-2 mb-1'>{oppo.placeName}</p>
                      </Link>
                      <h6 className='text-medium green-blue'>{`${oppo.Address.city}, ${oppo.Address.state}`}</h6>
                      <div className='rating gray d-flex align-items-center'>
                        <img src={star} alt='' />
                        <h6 className='m-0'>
                          <span>{oppo.rating - (index % 3)}</span> <span className='gray'>/ 5</span>
                        </h6>
                      </div>
                    </div>
                  ))
                : opportunities.map((oppo, index) => (
                    <div className='col-sm-12 d-flex' key={index}>
                      <div className='row'>
                        <div className='col-6'>
                          <div className='img-div' />
                        </div>
                        <div className='col-6'>
                          <Link to={`/travel-oppurtunities/${oppo.placeId}`}>
                            <p className='text-bold lead mt-2 mb-1'>{oppo.placeName}</p>
                          </Link>
                          <h6 className='text-medium green-blue'>{`${oppo.Address.city}, ${oppo.Address.state}`}</h6>
                          {oppurtunity.filters.map((fil, index) => (
                            <label className='bg-gray' key={index}>
                              {fil}
                            </label>
                          ))}
                          {oppurtunity.perks.map((perk, index) => (
                            <label className='bg-sky' key={index}>
                              {perk}
                            </label>
                          ))}
                          <div className='rating gray d-flex align-items-center mt-2'>
                            <img src={star} alt='' />
                            <h6 className='m-0'>
                              <span>{oppurtunity.rating - (index % 3)}</span> <span className='gray'>/ 5</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
            <img src={next} alt='' className='next cursor my-2 float-right zoom-2' />
          </div>
        </div>
      </div>

      <div className='container-fluid how-to-text'>
        <h1 className='text-semi-bold ml-4'>How to participate</h1>
        <h2 className='text-semi-bold ml-4 mb-4'>(Quick Guide)</h2>
      </div>
      <div className='opp-participate'>
        <div className='row no-gutters color-row'>
          <div className='container-fluid'>
            <div className='row my-5'>
              <div className='col-md-3'>
                <img src={vip} alt='' />
                <h3 className='text-bold'>Become a member of our community</h3>
                <p className='p3 text-medium text-justify'>Join us in this yatra and become a part of our community.</p>
              </div>
              <div className='col-md-3'>
                <img src={explorerHat} alt='' />
                <h3 className='text-bold'>Be an explorer</h3>
                <p className='p3 text-medium text-justify'>
                  Choose opportunities to travel across the country & volunteer in our skill exchange programs.
                </p>
              </div>
              <div className='col-md-3'>
                <img src={review} alt='' />
                <h3 className='text-bold'>Get positive reviews & become an expert</h3>
                <p className='p3 text-medium text-justify'>
                  Earning good reviews would take you a level higher to the rank of an expert.
                </p>
              </div>
              <div className='col-md-3'>
                <img src={signUp} alt='' />
                <h3 className='text-bold'>Sign up for the programs that inspire you</h3>
                <p className='p3 text-medium text-justify'>
                  Your stories would now inspire your community & would help you in achieving success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageConnect
        content={
          <>
            <p className='p4 text-center mt-5'>
              Volunteer Yatra is a community of people who
              <br />
              believes in <b className='green-blue'>growth, transformation & collaboration.</b>
            </p>
            <Link to='/pricing' className='text-center mb-5'>
              <img src={checkOutPlans} alt='' className='cursor zoom-2 pt-3' style={{ width: '20%' }} />
            </Link>
          </>
        }
      />

      <Footer showShadow={false} />
    </>
  )
}

export default OppurtunityScreen
