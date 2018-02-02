import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
//Styles
import styles from "./Styles/ImageGridStyles";

import { Grid, Row, Col } from "native-base";

export default class RowImage extends Component {
  //Tranform flat array to arrays
  imagesArrayToGridArray(totalColumns) {
    let gridArray = [[]];

    let countColumns = 1;
    for (var i = 0; i < this.props.images.length; i++) {
      gridArray[gridArray.length - 1].push(this.props.images[i]);
      if (countColumns <= totalColumns) {
        countColumns++;
      }
      if (countColumns > totalColumns && i !== this.props.images.length - 1) {
        countColumns = 1;
        gridArray.push([]);
      }
    }

    return gridArray;
  }

  renderGrid(gridArray) {
    const { selectImage } = this.props;
    return gridArray.map((row, rowIndex) => (
      <Row key={rowIndex} style={{marginHorizontal: -3}}>
        {row.map((col, colIndex) => (
          <TouchableOpacity
            key={colIndex}
            style={{ flex: 1, alignSelf: "center" }}
            onPress={selectImage.bind(this, rowIndex * 3 + colIndex)}
          >
            <Col style={{ marginTop: 3 }}>
              <Image style={styles.gridImage} source={col} />
            </Col>
          </TouchableOpacity>
        ))}
      </Row>
    ));
  }

  //merge
  render() {
    let gridArray = this.imagesArrayToGridArray(3);
    return (
      <Grid style={{ maxHeight: 1300, backgroundColor: "white" }}>
        {this.renderGrid(gridArray)}
      </Grid>
    );
  }
}

//Validate all props
import PropTypes from "prop-types";
RowImage.propTypes = {
  images: PropTypes.images,
  selectImage: PropTypes.function
};
