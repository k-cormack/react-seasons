import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor(props) { // 'constructor' is a keyword
    super(props);

    // ONLY time this.state is directly assigned without using 'setState' function
    this.state = { lat: null, errorMessage: '' }; //defining state properties

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //calling 'setState' here
        this.setState({ lat: position.coords.latitude }); // 'setState is a function brought in from React.Component
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }



  render() { // 'render' is a funtion brought in from React.Component
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>LOADING......Please wait....</div>;
  }
}

ReactDOM.render(
  <App />,
document.querySelector('#root')
);