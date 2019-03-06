import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'
import HeaderLinks from '../components/Header/components/HeaderLinks.jsx'
import GridContainer from '../components/Grid/index.jsx'
import GridItem from '../components/Grid/components/GridItem'
import Parallax from '../components/Parallax'

// import Nav from '../components/nav'

const Home = () => (
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
    <div className="hero">
    

      {/* <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
        
        </Link>
        <Link href="https://open.segment.com/create-next-app">
        
        </Link>
        <Link href="https://github.com/segmentio/create-next-app">
       
        </Link>
      </div> */}
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
