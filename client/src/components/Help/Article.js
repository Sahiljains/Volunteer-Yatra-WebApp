import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import graySearchBox from '../../assets/vectors/help-next-searchbox.svg'
import searchIcon from '../../assets/vectors/search-icon.png'
import jini from '../../assets/images/jini.svg'

import HelpNavbar from './HelpNavbar'

const Article = ({ match, location, history }) => {
  const { params } = match
  const name = location.search.split('?name=')[1]

  useEffect(() => {
    if (!name || name === '') history.push('/help')
    window.scrollTo(0, 0)
  }, [name, history])

  const pageTitle = params.query.charAt(0).toUpperCase() + params.query.slice(1)

  return (
    <>
      <HelpNavbar url={match.url} />
      <div className='container-fluid vertical-margin article'>
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

        <h2 className='lead text-semi-bold my-5 add-border-bottom'>{name}?</h2>
        <div className='row'>
          <div className='col-md-8'>
            <p className='p4 text-medium mb-5'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla-
              mcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
              hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et ac- cumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
              te feugait nulla facilisi.
            </p>
            <p className='p4 text-medium mb-5'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla-
              mcorper suscipit lobortis nisl ut aliquip ex ea commo-
            </p>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-3'>
            <h4 className='text-bold'>Articles in this section</h4>
            <Link to={`${match.url}?name=${name}`}>
              <p className='text-medium p4 lead cursor zoom-3 mt-4'>Lorem ipsum dolor.</p>
            </Link>
            <Link to={`${match.url}?name=${name}`}>
              <p className='text-medium p4 lead cursor zoom-3'>Lorem ipsum dolor.</p>
            </Link>
            <Link to={`${match.url}?name=${name}`}>
              <p className='text-medium p4 lead cursor zoom-3'>Lorem ipsum dolor.</p>
            </Link>
            <Link to={`${match.url}?name=${name}`}>
              <p className='text-medium p4 lead cursor zoom-3'>Lorem ipsum dolor.</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='recent-articles-section'>
        <div className='container-fluid py-5'>
          <div className='row article-row px-4'>
            <div className='col-sm-8'>
              <h2 className='text-semi-bold lead'>Recently viewed articles</h2>
              <Link to={`${match.url}?name=${name}`}>
                <p className='text-medium p4 lead mt-4'>
                  <label className='cursor zoom-2'>Lorem ipsum dolor.</label>
                </p>
              </Link>
              <Link to={`${match.url}?name=${name}`}>
                <p className='text-medium p4 lead'>
                  <label className='cursor zoom-2'>Lorem ipsum dolor.</label>
                </p>
              </Link>
              <Link to={`${match.url}?name=${name}`}>
                <p className='text-medium p4 lead'>
                  <label className='cursor zoom-2'>Lorem ipsum dolor.</label>
                </p>
              </Link>
              <Link to={`${match.url}?name=${name}`}>
                <p className='text-medium p4 lead'>
                  <label className='cursor zoom-2'>Lorem ipsum dolor.</label>
                </p>
              </Link>
            </div>
            <div className='col-sm-4'>
              <h2 className='text-semi-bold lead'>Related articles</h2>

              <Link to={`${match.url}?name=${name}`}>
                <p className='text-medium p4 lead mt-4'>
                  <label className='cursor zoom-2'>Lorem ipsum dolor.</label>
                </p>
              </Link>
              <Link to={`${match.url}?name=${name}`}>
                <p className='text-medium p4 lead'>
                  <label className='cursor zoom-2'>Lorem ipsum dolor.</label>
                </p>
              </Link>
              <Link to={`${match.url}?name=${name}`}>
                <p className='text-medium p4 lead'>
                  <label className='cursor zoom-2'>Lorem ipsum dolor.</label>
                </p>
              </Link>
              <Link to={`${match.url}?name=${name}`}>
                <p className='text-medium p4 lead'>
                  <label className='cursor zoom-2'>Lorem ipsum dolor.</label>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5 vertical-margin'>
        <div className='row'>
          <div className='col-sm-8 d-flex flex-column justify-content-center'>
            <h1 className='text-semi-bold lead'>Have more questions ?</h1>
            <p className='text-semi-bold p4'>
              <label className='zoom-2 cursor'>Submit a request</label>
            </p>
          </div>
          <div className='col-sm-4'>
            <img src={jini} alt='' className='jini' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Article
