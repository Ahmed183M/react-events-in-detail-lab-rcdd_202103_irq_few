// Code CoordinatesButton Component Here
import React from "react"

export default function CoordinatesButton(props){
  return(
    <button onClick={props.onReceiveCoordinates([event.clientX, event.clientY]);}>Coords</button>;
  )
}
