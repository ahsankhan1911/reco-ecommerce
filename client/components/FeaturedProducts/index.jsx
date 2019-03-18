import React from "react";
// plugin that creates slider
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import featuredProductsStyle from "../../assets/jss/featuredProductsStyle";

import ProductCard from './components/ProductCard'

class FeaturedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }


  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Featured Products</h2>
                <ProductCard/>
                <ProductCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(featuredProductsStyle)(FeaturedProducts);
