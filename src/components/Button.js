import React, {useEffect} from "react";

const Button = (props) => {

  useEffect(() => {
    document.addEventListener("keydown", e => {
      let id = e.key.toUpperCase();
      let audio = document.querySelector(`#${id}`);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    })
  }, [])
  return (
    <button onMouseDown={props.onclick} className="drum-pad" id={props.id}><audio ref={props.forwardedRef} src={props.source} className="clip" id={props.value}></audio></button>
  )
}

export default Button;
