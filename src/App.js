import React from 'react';
import './App.css';

const pads = [{
  letter: 'Q',
  id: 'Heater-1',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  letter: 'W',
  id: 'Heater-2',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  letter: 'E',
  id: 'Heater-3',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  letter: 'A',
  id: 'Heater-4',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  letter: 'S',
  id: 'Clap',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  letter: 'D',
  id: 'Open-HH',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  letter: 'Z',
  id: "Kick-n'-Hat",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  letter: 'X',
  id: 'Kick',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {

  letter: 'C',
  id: 'Closed-HH',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

class DrumPad extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
    document.addEventListener('keyup', this.keyUp);
  }
  componentWillMount() {
    document.removeEventListener('keydown', this.keyDown);
    document.removeEventListener("keyup", this.keyUp);
  }
  keyDown = (key) => {
    if (key.keyCode === this.props.letter.charCodeAt()) {
      this.handleClick();
      document.getElementById(this.props.letter).style.backgroundColor = "green";
    }
  }
  keyUp = () => {
    document.getElementById(this.props.letter).style.backgroundColor = "black";
  }
  handleClick = () => {
    this.props.handleDisplay(this.props.id);
    this.audio.play();
    this.audio.currentTime = 0;
  }
  render() {
    console.log(this.props.letter);
    return (
      // <div className="drum-pad" id={this.props.id}>
      //   <p className="btn btn-default">{this.props.letter}</p>
      //   <audio className="clip" id={this.props.letter} src={this.props.src}></audio>
      // </div>

      <div
        className="drum-pad btn btn-default"
        id={this.props.letter} onClick={this.handleClick}>
        <audio ref={ref => this.audio = ref} className="clip" id={this.props.letter} src={this.props.src}></audio>
        {this.props.letter}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }
  handleDisplay = display => this.setState({ display });
  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>

        <div id="drum-pads">
          {pads.map(d =>
            <DrumPad id={d.id} letter={d.letter} src={d.src} handleDisplay={this.handleDisplay} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
