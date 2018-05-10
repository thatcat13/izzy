import React from "react";
import PropTypes from 'prop-types';



function Tile(props){
  const crowSkullStyle = {
    width: '25%',
    margin: '0 auto',
    objectFit: 'cover'
  };

  return (
      <div>
        <h3>{props.title}</h3>
      </div>
   );
}

Tile.propTypes = {
  title: PropTypes.string
}

export default Tile;
