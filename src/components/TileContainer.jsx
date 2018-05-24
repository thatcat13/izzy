import React from 'react';
import Tile from './Tile';
import PropTypes from 'prop-types';

export default function TileContainer(props){

  const containerStyles = {
    alignItems: 'center'
  };

  console.log('test');
  return (
    <div style={containerStyles}>

      {Object.keys(props.artCollection).map(function(tileId, key) {
        let tile = props.artCollection[tileId];
        return <Tile title={tile.title}
          image={tile.image}
          key={tileId}
          />;
        })
      }
    </div>
  );
}

TileContainer.propTypes = {
  artCollection: PropTypes.object
};
