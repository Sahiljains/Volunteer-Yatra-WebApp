import { Route, Switch } from 'react-router-dom'

import BudgetTravel from '../../components/PlanTrip/BudgetTravel'
import DigitalNomad from '../../components/PlanTrip/DigitalNomad'
import TrekForCause from './../../components/PlanTrip/TrekForCause'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './plan-your-trip.scss'

const PlanYourTripScreen = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/plan-your-trip' component={BudgetTravel} />
        <Route exact path='/plan-your-trip/digital-nomad' component={DigitalNomad} />
        <Route exact path='/plan-your-trip/trek-for-cause' component={TrekForCause} />
      </Switch>
      <Footer />
    </>
  )
}

export default PlanYourTripScreen
