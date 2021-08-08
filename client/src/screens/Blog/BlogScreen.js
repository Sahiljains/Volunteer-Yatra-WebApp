import { Route, Switch } from 'react-router-dom'

import Popular from './../../components/Blog/Popular'
import SingleBlog from './../../components/Blog/SingleBlog'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'

import './blogs.scss'

const BlogScreen = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/blogs' component={Popular} />
        <Route exact path='/blogs/:slug' component={SingleBlog} />
      </Switch>
      <Footer />
    </>
  )
}

export default BlogScreen
