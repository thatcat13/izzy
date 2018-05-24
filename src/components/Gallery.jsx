import React from "react";
import Tile from './Tile';
import crowSkull from './../crowSkull.jpg';

export default function Gallery(){

  return (
    <div>
      <Tile
        title = 'Figure 1'
        image = {crowSkull}
      />
    </div>
  );
}
