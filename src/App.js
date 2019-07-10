import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'd221524e3a274ee994e5e629560fd2a0'
});

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log('face');
    console.log(face);
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width);
    console.log(height);    
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)      
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log('box');
    console.log(this.state.box);
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
      </div>
    );
  }
}

export default App;
