import React from "react";
import Header from './Header';
import Gallery from './Gallery';

export default function App(){
  return (
    <div>
      <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 20;
            padding: 20;
          }
          body {
            font-family: 'Amatic SC', cursive;
            width: 100%;
          }
          `}</style>
        <Header />
        <Gallery />
    </div>
  );
}
