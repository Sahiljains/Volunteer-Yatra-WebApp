import { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'

import star from '../../assets/vectors/star.svg'
import unlike from '../../assets/buttons/unlike-blog-button.png'
import heart from '../../assets/buttons/like-blog-button.png'
import leftButtonArrow from '../../assets/buttons/left-button-arrow.png'
import apply from '../../assets/buttons/apply-now.png'
import KnowMore from '../../components/Oppurtunity/KnowMore'

const reviews = [
  {
    id: 1,
    name: 'Name',
    rating: 4.5,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at vestibulum odio, in malesuada velit. Aliquam gravida odio eget erat maximus porttitor. Duis at varius risus. Duis sit amet lectus et lectus tincidunt lacinia.`,
  },
  {
    id: 2,
    name: 'Name',
    rating: 4.5,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at vestibulum odio, in malesuada velit. Aliquam gravida odio eget erat maximus porttitor. Duis at varius risus. Duis sit amet lectus et lectus tincidunt lacinia. In ultricies, nisl et rhoncus hendrerit, nibh justo tempus velit, quis finibus ante arcu nec enim. Ut viverra orci ut enim condimentum malesuada. Nullam at sagittis odio. Nullam gravida pulvinar velit at laoreet. Cras cursus tortor sed convallis ultricies. Cras ac massa et ipsum fermentum feugiat. In condimentum justo in hendrerit ornare. Maecenas pulvinar condimentum aliquam. In vel elementum mauris.`,
  },
  {
    id: 3,
    name: 'Name',
    rating: 4.5,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at vestibulum odio, in malesuada velit. Aliquam gravida odio eget erat maximus porttitor. Duis at varius risus. Duis sit amet lectus et lectus tincidunt lacinia.`,
  },
]

const SingleOppurtunity = () => {
  const [like, setLike] = useState(false)
  const [more, setMore] = useState(false)

  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
    // console.log(params.placeId)
  }, [params])

  const scrollTo = (id, gap) => window.scrollTo(0, document.getElementById(id).offsetTop - gap)

  const titleOptions = (title, para, content = false) => {
    return (
      <>
        <div className='yellow-line mt-2'></div>
        <div className='mb-5'>
          <div className='explore-button zoom'>
            <span className='text-bold' onClick={() => setMore(true)}>
              Know More{' '}
            </span>
            <img src={leftButtonArrow} alt='' />
          </div>
          <h2 className='text-semi-bold mb-0 pb-0'>{title}</h2>
          <p className='p2 pt-2 text-semi-bold'>{para}</p>
          {content && (
            <div className='d-flex'>
              {[...Array(5)].map((_, index) => (
                <div className='info d-flex flex-column mt-5 mb-3 mr-5 align-items-center' key={index}>
                  <div className='circle-img-div'></div>
                  <p className='p4 text-medium mt-3'>Lorem ipsum</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <Navbar showShadow={true} />
      <div className='vertical-margin container-fluid single-place'>
        <h4 className='text-semi-bold mb-5' onClick={() => history.goBack()}>
          <label className='cursor zoom-4'>
            <img src={leftButtonArrow} alt='' style={{ width: '2%', transform: 'rotate(180deg)' }} /> Back To Travel
            Oppurtunities
          </label>
        </h4>
        <div className='row'>
          <div className='col-6 position-relative'>
            <div className='img-div br-2' />
          </div>
          <div className='col-6 px-5 pt-5 pb-4'>
            <h2 className='text-semi-bold'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</h2>
            <p className='p4 lead text-semi-bold my-3'>Jaipur, Rajasthan</p>
            <div className='rating gray d-flex align-items-center'>
              <img src={star} alt='' className='star' />
              <h6 className='m-0'>
                <span className='ml-1'>4.5</span> <span className='gray'>/ 5</span>
              </h6>
              <img
                src={!like ? unlike : heart}
                alt=''
                className='heart ml-5 zoom-2 cursor'
                onClick={() => setLike(!like)}
              />
            </div>
            <div className='like'></div>
            <Link to='/register/yatri'>
              <img src={apply} alt='' style={{ width: '37.5%', marginTop: '4rem' }} className='zoom-2 cursor' />
            </Link>
          </div>
        </div>

        {!more ? (
          <>
            <div className='row mt-5'>
              <div className='col-2'>
                <p className='p4 text-semi-bold cursor zoom-4' onClick={() => scrollTo('about-host', 40)}>
                  Host Details
                </p>
              </div>
              <div className='col-2'>
                <p className='p4 text-semi-bold cursor zoom-4' onClick={() => scrollTo('photos', 80)}>
                  Photos (10)
                </p>
              </div>
              <div className='col-2'>
                <p className='p4 text-semi-bold cursor zoom-4' onClick={() => scrollTo('map', 40)}>
                  Map
                </p>
              </div>
            </div>

            {titleOptions('What you give', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', true)}
            {titleOptions('What you get', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', true)}

            <div className='yellow-line mt-2'></div>
            <div className='ml-4'>
              <div className='explore-button zoom'>
                <span className='text-bold' onClick={() => setMore(true)}>
                  Know More
                </span>
                <img src={leftButtonArrow} alt='' />
              </div>
              <h2 className='text-semi-bold mb-0 pb-0'>Your experience</h2>
              <p className='p2 py-4 text-semi-bold'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum iriure dolor
                in hendrerit in
              </p>
            </div>

            <div className='yellow-line mt-4'></div>
            <h2 className='text-semi-bold ml-4'>Host reviews</h2>
            {reviews.map(review => (
              <div className='row my-5' key={review.id}>
                <div className='col-md-3 px-5'>
                  <div className='review-host-img'></div>
                </div>
                <div className='col-md-9 pt-4'>
                  <h4 className='text-semi-bold'>{review.name}</h4>
                  <div className='rating gray d-flex align-items-center'>
                    <img src={star} alt='' className='star' style={{ width: '1.75rem' }} />
                    <h6 className='m-0'>
                      <span className='ml-1'>{review.rating}</span> <span className='gray'>/ 5</span>
                    </h6>
                  </div>
                  <h6 className='p2 my-4 p-4 pr-5 bg-pink br-2 lead text-medium'>{review.description}</h6>
                </div>
              </div>
            ))}

            <div className='yellow-line mt-4 mb-0'></div>
            <div className='row m-4 no-gutters' id='photos'>
              {[...Array(6)].map((_, index) => (
                <div className='col-4 p-2' key={index}>
                  <div className='multi-img-div br-1'></div>
                </div>
              ))}
            </div>

            <div className='yellow-line mt-4'></div>
            <div className='row m-4 d-flex flex-column' id='about-host'>
              <h2 className='text-semi-bold'>About your Host</h2>
              <div className='row mt-5'>
                <div className='col-4'>
                  <div className='host-img'></div>
                </div>
                <div className='col-8 position-relative mt-4'>
                  <Link to='/register/yatri' className='position-absolute'>
                    <img src={apply} alt='' className='zoom-2 cursor float-right' style={{ width: '18%' }} />
                  </Link>
                  <h3 className='text-semi-bold'>Name - Surname</h3>
                  <div className='about my-5'>
                    <h3 className='text-semi-bold'>About</h3>
                    <p className='p4 text-medium'>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                      ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                      tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem vel eum
                      iriure dolor in hendrerit in
                    </p>
                  </div>
                  <div className='address my-5'>
                    <h3 className='text-semi-bold'>Address</h3>
                    <p className='p4 text-medium'>
                      Lorem ipsum dolor sit amet, consec- <br />
                      tetuer adipiscing elit, sed diam nonum-
                    </p>
                  </div>
                  <div className='contact my-5'>
                    <h3 className='text-semi-bold'>Contact</h3>
                    <p className='p4 text-medium'>XXXXXXXXXX, XXXXXXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='map vertical-margin' id='map'>
              <iframe
                width='100%'
                height='700'
                frameBorder='0'
                scrolling='no'
                marginHeight='0'
                marginWidth='0'
                title='map'
                src='https://maps.google.com/maps?width=100%25&amp;hl=en&amp;q=Kandivali%20East+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
            </div>
          </>
        ) : (
          <KnowMore
            setMore={() => {
              window.scrollTo(0, window.innerHeight / 3)
              setMore(false)
            }}
          />
        )}
      </div>
      <Footer />
    </>
  )
}

export default SingleOppurtunity
