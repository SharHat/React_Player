import React, { Component } from 'react';
import './App.css';
import Waveform from "react-audio-waveform"
import Button from './Button';

const TEST_PEAKS = [0.04, 0.99, 0.54, 0.74, 0.76, 0.52, 0.79, 0.72, 0.83, 0.67, 0.88, 0.99, 0.95, 0.9399999999999999, 0.91, 0.82, 0.96, 0.91, 0.93, 0.93, 0.98, 0.99, 0.98, 0.99, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.98, 0.85, 0.82, 0.96, 0.99, 0.99, 0.99, 0.97, 0.97, 0.98, 1, 0.98, 0.98, 0.98, 0.98, 0.99, 0.99, 0.98, 0.98, 0.98, 0.99, 0.98, 0.99, 0.99, 0.98, 0.99, 0.9, 0.8, 0.91, 0.9, 0.88, 0.97, 0.98, 0.92, 0.98, 0.98, 0.99, 0.99, 0.98, 0.99, 0.99, 0.98, 0.98, 0.97, 0.98, 0.98, 0.98, 0.99, 0.99, 0.98, 0.99, 0.98, 0.99, 0.99, 0.98, 0.99, 0.98, 0.98, 0.99, 0.99, 0.98, 0.99, 0.99, 1, 0.99, 0.93, 0.96, 0.83, 0.9399999999999999, 0.98, 0]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: null
    }
  }

  // handleClick = (secs) => {
  //   this.setState({
  //     pos: secs
  //   })
  // }

  handleSubmission = () => {
    // this.setState({
    //   song : event.target.files[0]
    // })
    console.log(this.state.song); 
	};

  onFileChange = event => {
    
    // Update the state
    this.setState({ song: event.target.files[0] });
  
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click around below to see progress animation</h1>
        </header>
        <h2>Please enter the mp3 file of your choice!</h2>
        <p><label>Upload the song file here</label><input type="file" id="upload" onChange={this.onFileChange}/>
        <div>
				<button onClick={this.handleSubmission}>Submit</button>
			</div>
        </p>
        
      </div>
    );
  }
}

export default App;