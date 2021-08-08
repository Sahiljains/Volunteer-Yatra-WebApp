import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
	getStates
} from "../../services/volunteer";
import Rajasthan from '../../assets/images/Rajasthan.jpg'
import Uttrakhand from '../../assets/images/Uttrakhand.jpg'
import Bihar from '../../assets/images/Bihar.jpg'
import Himachal_Pradesh from '../../assets/images/Himachal Pradesh.jpg'
import Jammu from '../../assets/images/Jammu.jpg'
// import Mumbai from '../../assets/images/Jammu.jpg'
// import Delhi from '../../assets/images/Jammu.jpg'
// import Tamil_Nadu from '../../assets/images/Jammu.jpg'

import leftButtonArrow from '../../assets/buttons/left-button-arrow.png'

const places = [Rajasthan, Uttrakhand, Bihar, Himachal_Pradesh, Jammu]
const available = ['Rajasthan', 'Uttarakhand', 'Bihar', 'Himachal_Pradesh', 'Jammu'];

const PlaceToVisit = ({ title, showContent }) => {
  
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchData = async() => {

      const states = await getStates();

      // console.log(states)

      if(states.data.success) {
        console.log(states.data.data)
        setNames(states.data.data.states);
      }
      // console.log(names)
    }

    fetchData();
  }, [])

  return (
    <div className='connect-to-hosts vertical-margin'>
      <div className='container-fluid'>
        <div className='explore-button zoom'>
          <Link to='/travel-oppurtunities'>
            <span className='text-bold'>View all hosts </span>
          </Link>
          <img src={leftButtonArrow} alt='' />
        </div>
        {title === 'Places to Visit' ? <h1 className='text-semi-bold'>Places to Visit</h1> : title}
        {showContent && (
          <p className='p2 pt-2'>
            Choose your favorite location and learn more about the skill exchange programs taking place across India.
          </p>
        )}
      </div>
      <div className='host-items'>
        <div className='container-fluid'>
          <div className='row'>
            {names.map((name, index) => (
              <div className='col' key={index}>
                <Link to={`/travel-oppurtunities/#${name.state}`}>
                  <div className='frame-container zoom-2'>
                    <div className='image-overlay'></div>
                    {
                      name.state.includes(" ") ? 
                      
                      <img src={available.includes(name.state.replace(" ", "_")) ? places[available.indexOf(name.state.replace(" ", "_"))] : Jammu} alt={name.state} className='main-image' /> 
                      
                      : 
                      
                      <img src={available.includes(name.state) ? places[available.indexOf(name.state)] : places[Math.floor(Math.random() * (places.length - 1 - 0 + 1)) + 0]} alt={name.state} className='main-image' />
                    }
                    
                    <div className='img-title'>
                      <span className='text-bold'>{name.state}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

PlaceToVisit.defaultProps = {
  title: 'Places to Visit',
  showContent: true,
}

export default PlaceToVisit
