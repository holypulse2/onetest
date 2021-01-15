import React from 'react';

const Heading = (props) => {

  return( 
      <h2 className="text-4xl font-bold not-italic text-base sm:base normal-case pb-2"> {props.children} </h2>
  )
}

export default Heading;