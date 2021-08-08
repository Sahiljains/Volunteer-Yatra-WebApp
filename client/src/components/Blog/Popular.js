import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import landingBG from '../../assets/images/blogBackground.jpg'
import landingText from '../../assets/images/blog-bg-text.png'

import latestBlogs from '../../assets/buttons/latest-blogs.png'
import next from '../../assets/buttons/next.png'

import howTo from '../../assets/vectors/how-to.svg'
import travelTips from '../../assets/vectors/travel-tips.svg'
import society from '../../assets/vectors/society.svg'
import searchbox from '../../assets/vectors/searchbox.svg'

import PageImage from './../PageImage/PageImage'
import PageConnect from './../layout/PageConnect'
import BlogPost from './BlogPost'

const Popular = () => {
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
      <PageImage imgSrc={landingBG} imgTitle={landingText} showOutline={true} />
      <div className='popular-blogs vertical-margin' id='popular-blogs'>
        <div className='container-fluid'>
          <div className='row blogs-first-row no-gutters'>
            <h1 className='text-semi-bold'>Popular Blogs</h1>
            <img src={latestBlogs} alt='' className='zoom-2 cursor ml-auto' />
          </div>

          <div className='bg-overlay'></div>

          <div className='row'>
            <div className='col-sm-6 blog-col'>
              <BlogPost showShare={true} />
            </div>
            <div className='col-sm-6 blog-col'>
              <BlogPost showShare={true} />
            </div>
            <div className='col-sm-4 blog-col'>
              <BlogPost small='sm' />
            </div>
            <div className='col-sm-4 blog-col'>
              <BlogPost small='sm' />
            </div>
            <div className='col-sm-4 blog-col'>
              <BlogPost small='sm' />
            </div>
          </div>

          <img src={next} alt='' className='next cursor my-2 float-right zoom-2' />
        </div>
      </div>

      <div className='container-fluid vertical-margin learn-step-by-step' id='how-to'>
        <h1 className='text-semi-bold'>Learn Step by Step</h1>
        <div className='row'>
          <div className='col-sm-4 vertical-margin'>
            <div>
              <img src={howTo} alt='' className='cursor zoom-2' />
            </div>
            <h2 className='text-semi-bold text-center pt-5'>"How To" Guide</h2>
          </div>
          <div className='col-sm-4 vertical-margin'>
            <div>
              <img src={travelTips} alt='' className='cursor zoom-2' />
            </div>
            <h2 className='text-semi-bold text-center pt-5'>Travel Tips</h2>
          </div>
          <div className='col-sm-4 vertical-margin'>
            <div>
              <img src={society} alt='' className='cursor zoom-2' />
            </div>
            <h2 className='text-semi-bold text-center pt-5'>How to Shape Society</h2>
          </div>
        </div>
      </div>

      <PageConnect
        color='gray'
        content={
          <>
            <h1 className='text-semi-bold lead'>Love our blogs?</h1>
            <h3 className='text-medium lead'>For more interesting facts and travel blog.</h3>
            <div className='search-box mt-4 mb-5'>
              <img src={searchbox} alt='' />
              <input type='text' name='blog-searchbox' id='blog-searchbox' placeholder='Enter your email id.' />
              <button className='zoom-2'>Subscribe</button>
            </div>
          </>
        }
      />
    </>
  )
}

export default Popular
