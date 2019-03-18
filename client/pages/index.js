import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
// nodejs library that concatenates classes
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from '../components/Header'
import Parallax from '../components/Parallax'
import homepageStyle from '../assets/jss/homepageStyle.jsx'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

import '../assets/scss/index.scss?v=1.4.0'

class Home extends React.Component {


  render() {

    const { classes } = this.props
    return (
      <div>
        <Head title="Home" />
        <Header
          brand="Reco"
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
        />
        <Parallax image="/static/images/bg4.jpg">
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <FeaturedProducts />
        </div>
        <Footer />
      </div>
    )
  }

}

export default withStyles(homepageStyle)(Home)
