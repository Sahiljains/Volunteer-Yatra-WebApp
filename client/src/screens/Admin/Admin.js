import { Route, Switch } from 'react-router-dom'

import Popular from './../../components/Blog/Popular'

import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'
import FeaturedInfo from './../../components/featuredInfo/FeaturedInfo'
import Adminyatridetails from '../../components/featuredInfo/Adminyatridetails'
import Adminhostdetails from '../../components/featuredInfo/Adminhostdetails'
import RecentActivity from '../../components/featuredInfo/recentactivity'


const BlogScreen = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/admin' component={FeaturedInfo} />
        <Route exact path='/allyatridetails' component={Adminyatridetails} />
        <Route exact path='/allhostdetails' component={Adminhostdetails} />
        <Route exact path='/recentactivity' component={RecentActivity} />
      </Switch>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <Footer />
    </>
  )
}

export default BlogScreen
