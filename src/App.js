import './App.css';
import React, {useState, useEffect, useRef} from "react";
import Button from "./components/Button.js";
import Display from "./components/Display.js";

function App() {

  const [display, setDisplay] = useState("Press the buttons");
  const [sources, setSources] = useState([]);
  const childRef = useRef([]);

  useEffect(() => {
    setSources([{key: "Q",
    name: "Heater 1",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    {key: "W",
    name: "Heater 2",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {key: "E",
    name: "Heater 3",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {key: "A",
    name: "Heater 4",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {key: "S",
    name: "Clap",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {key: "D",
    name: "Open HH",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {key: "Z",
    name: "Kick n' Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {key: "X",
    name: "Kick",
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    {key: "C",
    name: "Closed HH",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]);
    childRef.current = new Array(sources.length);
  }, [])

  const trigger = (index, name) => {
    childRef.current[index].currentTime = 0;
    childRef.current[index].play();
    setDisplay(name);
  }

  return (
    <div className="app">
      <header>Drum Machine</header>
      <div className="drum-machine" id="drum-machine">
        <div className="header">
          <Display display={display} />
        </div>
        <div className="drum-pad-div">
          {
            sources.map((source, index) => (
              <Button onclick={() => trigger(index, source.name)} key={index} forwardedRef={el => childRef.current[index] = el} value={source.key} source={source.source} id={source.name} />
            ))
          }
        </div>
      </div>
      <footer>coded by Paolo Provveduto</footer>
    </div>
  );
}

export default App;
