import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "./components/Card.jsx";
import CardBody from "./components/CardBody.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import imagesStyles from "../../../../assets/jss/imagesStyles";

import { cardTitle } from "../../../../assets/jss/style.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
};

class ProductCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card style={{width: "20rem"}}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src="/static/images/products/adoration-of-the-kings-thumbnail.gif"
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>Card title</h4>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(ProductCard);