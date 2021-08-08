import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import HelpLanding from './../../components/Help/HelpLanding'
import Articles from './../../components/Help/Articles'
import Article from '../../components/Help/Article'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './help.scss'

const HelpScreen = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <div>
      <Header help={true} />
      <Switch>
        <Route exact path='/help' component={HelpLanding} />
        <Route exact path='/help/:mode' component={Articles} />
        <Route exact path='/help/:mode/:query' component={Article} />
      </Switch>
      <Footer showLinks={false} showShadow={false} />
    </div>
  )
}

export default HelpScreen
