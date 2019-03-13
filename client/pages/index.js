import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
// nodejs library that concatenates classes
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from '../components/Header'
import HeaderLinks from '../components/Header/components/HeaderLinks.jsx'
import GridContainer from '../components/Grid/index.jsx'
import GridItem from '../components/Grid/components/GridItem'
import Parallax from '../components/Parallax'
import homepageStyle from '../assets/jss/homepageStyle.jsx'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

import '../assets/scss/material-kit-react.scss?v=1.4.0'
// import Nav from '../components/nav'

class Home extends React.Component  {


  render () {

   const {classes } = this.props
    return (
      <div>
      <Head title="Home" />
      {/* <Nav /> */}
  <Header
     brand="Reco"
    //  rightLinks={<HeaderLinks />}
     fixed
     color="transparent"
     changeColorOnScroll={{
       height: 400,
       color: "white"
     }}
  />
  <Parallax image="/static/images/bg4.jpg">
            {/* <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Material Kit React.</h1>
                    <h3 className={classes.subtitle}>
                      A Badass Material-UI Kit based on Material Design.
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div> */}
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
          <FeaturedProducts/>
            {/* <SectionBasics /> */}
            {/* <SectionNavbars />
            <SectionTabs />
            <SectionPills />
            <SectionNotifications />
            <SectionTypography />
            <SectionJavascript />
            <SectionCarousel />
            <SectionCompletedExamples />
            <SectionLogin />
            <GridItem md={12} className={classes.textCenter}>
              <Link to={"/login-page"} className={classes.link}>
                <Button color="primary" size="lg" simple>
                  View Login Page
                </Button>
              </Link>
            </GridItem>
            <SectionExamples />
            <SectionDownload /> */}
          </div>
  
        {/* <div className="row">
          <Link href="https://github.com/zeit/next.js#getting-started">
          
          </Link>
          <Link href="https://open.segment.com/create-next-app">
          
          </Link>
          <Link href="https://github.com/segmentio/create-next-app">
         
          </Link>
        </div> */}
        <Footer/>
    </div>
    )
  }
 
    }

export default withStyles(homepageStyle)(Home)
