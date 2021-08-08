import { Link } from 'react-router-dom'
import pageRef from '../../assets/vectors/page-ref.svg'
import pageRefNext from '../../assets/vectors/page-ref-next.svg'

const HelpNavbar = ({ url }) => {
  const links = url.replace('/', '').split('/')
  const firstCapital = word => word.charAt(0).toUpperCase() + word.slice(1)

  const returnLink = desired => {
    let returnStr = [...links].reduce((acc, link, i, arr) => {
      if (link === desired) arr.splice(i)
      return (acc += '/' + link)
    }, '')
    return returnStr
  }

  return (
    <div className='yellow-bg p-4'>
      <div className='container-fluid'>
        <div className='d-flex links-div'>
          {links.map((link, index) => (
            <div key={index} className='link-div d-flex'>
              {index <= links.length - 2 ? (
                <Link to={returnLink(link)}>
                  <h4 className='text-semi-bold my-0 mr-3'>{firstCapital(link)}</h4>
                </Link>
              ) : (
                <h4 className='text-semi-bold my-0 mr-3'>{firstCapital(link)}</h4>
              )}
              {index !== links.length - 1 && (
                <img src={index === links.length - 2 ? pageRef : pageRefNext} alt='' className='page-ref-img mr-3' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HelpNavbar
