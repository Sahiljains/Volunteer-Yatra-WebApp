import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import graySearchBox from '../../assets/vectors/help-next-searchbox.svg'
import searchIcon from '../../assets/vectors/search-icon.png'

import HelpNavbar from './HelpNavbar'

const queries = [`Doubts`, `FAQ's`, `Trip Plan`, `Our Policies`, `Tips`]

const Articles = ({ match, history }) => {
  const { params } = match
  useEffect(() => {
    if (!params || (params.mode !== 'travellers' && params.mode !== 'host')) history.push('/')
    window.scrollTo(0, 0)
  }, [params, history])

  const pageTitle = params.mode.charAt(0).toUpperCase() + params.mode.slice(1)

  return (
    <>
      <HelpNavbar url={match.url} />
      <div className='container-fluid vertical-margin articles'>
        <div className='row no-gutters'>
          <div className='col-sm-6'>
            <h1 className='text-semi-bold lead'>{pageTitle}</h1>
          </div>
          <div className='col-sm-6 d-flex align-items-center text-box'>
            <img src={graySearchBox} alt='' className='search-bar w-100' />
            <div className='search-textbox'>
              <img src={searchIcon} alt='' className='search-icon' />
              <input type='text' name='search' id='search' className='search-input-box' placeholder='Search' />
            </div>
          </div>
        </div>

        <div className='row info-row'>
          {queries.map((query, index) => (
            <div className='col-md-6 mt-5 mb-3' key={index}>
              <h2 className='text-semi-bold lead'>{query}</h2>
              <div className='info-list'>
                {[...Array(query === 'Tips' ? 2 : 4)].map((_, i) => (
                  <p className='p4 text-medium my-3 lead' key={i}>
                    <Link to={`${match.url}/${query}?name=${'Lorem ipsum dolor'}`}>
                      <label className='cursor zoom-3'>Lorem ipsum dolor.</label>
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Articles
