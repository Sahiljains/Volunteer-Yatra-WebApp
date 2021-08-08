import proImg from '../../assets/vectors/pros.svg'
import conImg from '../../assets/vectors/cons.svg'

const ProsCons = ({ pros, cons }) => {
  return (
    <div className='pros-cons container-fluid vertical-margin'>
      <h1 className='text-semi-bold'>The Pros and Cons of travelling</h1>
      <div className='row vertical-margin no-gutters'>
        <div className='col-sm-7'>
          <h2 className='text-semi-bold'>The pros</h2>
          <ul>
            {pros.map((pro, index) => (
              <li key={index}>
                <span className='text-medium lead'>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-sm-5'>
          <img src={proImg} alt='' />
        </div>
      </div>
      <div className='row vertical-margin no-gutters'>
        <div className='col-sm-5'>
          <img src={conImg} alt='' />
        </div>
        <div className='col-sm-7 con'>
          <h2 className='text-semi-bold'>The cons</h2>
          <ul>
            {cons.map((con, index) => (
              <li key={index}>
                <span className='text-medium lead'>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

ProsCons.defaultProps = {
  pros: [],
  cons: [],
}

export default ProsCons
