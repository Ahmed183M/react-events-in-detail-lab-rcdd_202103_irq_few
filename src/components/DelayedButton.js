// Code DelayedButton Component Here
import React from "react"

export default function DelayedButton(){
  return(
    <button onClick={()=>{
      event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
    })}>Delayed</button>;
  )
}
