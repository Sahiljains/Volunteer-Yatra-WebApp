import { Link } from 'react-router-dom'

import searchBox from '../../assets/vectors/search-box.svg'
import searchIcon from '../../assets/vectors/search-icon.png'
import tree from '../../assets/vectors/tree.svg'
import PageConnect from '../../components/layout/PageConnect'

const activity = {
  title: `Lorem ipsum dolor sit amet`,
  short: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  author: `Lorem ipsum`,
}

const HelpLanding = () => {
  return (
    <>
      <div className='help-main'>
        <div className='container-fluid help-container'>
          <img src={tree} alt='' className='tree-img' />
          <div className='row no-gutters'>
            <h1 className='text-semi-bold lead px-5'>How can we help you?</h1>
            <div className='text-box px-4 d-flex flex-column justify-content-center'>
              <img src={searchBox} alt='' className='search-bar' />
              <div className='search-textbox'>
                <img src={searchIcon} alt='' className='search-icon' />
                <input type='text' name='search' id='search' className='search-input-box' placeholder='Search' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageConnect
        content={
          <div className='row button-redirect-row pt-5'>
            <Link to='/help/travellers'>
              <button className='zoom-2 cursor mx-5'>
                <h3 className='text-bold m-0'>Travellers</h3>
              </button>
            </Link>
            <Link to='/help/host'>
              <button className='zoom-2 cursor mx-5'>
                <h3 className='text-bold m-0'>Host</h3>
              </button>
            </Link>
          </div>
        }
      />

      <div className='container-fluid'>
        <div className='yellow-line'></div>

        <div className='container-fluid p-0 recent-container vertical-margin'>
          <h1 className='text-semi-bold recent'>Recent activities</h1>
          <div className='activities-list my-5'>
            {[...Array(5)].map((_, index) => (
              <div className='activity' key={index}>
                <h3 className='text-semi-bold'>
                  <label className='cursor'>{activity.title}</label>
                </h3>
                <div className='content row no-gutters'>
                  <div className='col-md-10'>
                    <p className='p4 text-medium'>{activity.short}</p>
                  </div>
                  <div className='col-md-2'>
                    <p className='more float-right mr-2'>{activity.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='see-more d-flex'>
            <h4 className='text-bold zoom-2 cursor'>See More</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default HelpLanding
