// Code DelayedButton Component Here
import React from "react"

export default function DelayedButton(props){
  return(
    <button onClick={(event)=>{
      event.persist();
      window.setTimeout(() => {
        props.onDelayedClick(event);
      }, props.delay);
    })}>Delayed</button>;
  )
}
