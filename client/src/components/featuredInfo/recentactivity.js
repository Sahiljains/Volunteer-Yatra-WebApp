import { lazy, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PageConnect from '../../components/layout/PageConnect'
import landingBG from '../../assets/images/bg.png'
import landingText from '../../assets/images/main-title-img.png'
import travelpng from '../../assets/images/travel-text.png'
import langingImgButton from '../../assets/buttons/community_button.png'
import communityButtonBlue from '../../assets/buttons/community_button_blue.png'

import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'


import { Card,Button, Row, Col , CardGroup} from 'react-bootstrap'

const card={
    textAlign:'center',
    fontWeight: '700',
    fontSize:'40px',
    marginTop: '150px'
  }
  const cardstyle={
    height:'400px',
    width:'400px',
    borderRadius:'10px',
    margin:'70px 270px',
    display:'flex',
    cursor: 'pointer',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    backgroundColor: 'rgb(232,235,236)'
  }
  const cardd={
    textAlign:'center',
    fontWeight: '700',
    fontSize:'40px',
    marginTop: '150px'
  }
  const cardstylee={
    height:'400px',
    width:'400px',
    borderRadius:'10px',
    margin:'-470px 750px',
    display:'flex',
    cursor: 'pointer',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    backgroundColor: 'White'
  
  }
  
  
  const RecentActivity = () => {
    useEffect(() => window.scrollTo(0, 0), [])
    return (
      <>
        <Header />
        <Navbar />
        
      
        <Card style={cardstyle}>
          <Card.Body>
  
           <Link to='/yatriactivity'> <Card.Title style={card}>Yatri</Card.Title></Link>
    
          </Card.Body>
        </Card>
        <Card style={cardstylee}>
          <Card.Body>
          <Link to='/hostactivity'> <Card.Title style={cardd}>Host</Card.Title></Link>
    
          </Card.Body>
        </Card>
      
   
       
      </>
    )
  }
  export default RecentActivity