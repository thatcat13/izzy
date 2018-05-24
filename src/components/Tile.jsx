import React from "react";
import PropTypes from 'prop-types';


export default function Tile(props){

  const imageStyles = {
    width: '25%',
    margin: '0 auto',
    objectFit: 'cover'
  };

  return (
      <div>
        <img style={imageStyles} src={props.image}/>
        <h3>{props.title}</h3>
      </div>
   );
}

Tile.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};
