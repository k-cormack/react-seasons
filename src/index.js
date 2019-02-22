import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';



class App extends React.Component {
  constructor(props) { // 'constructor' is a keyword
    super(props);

    // ONLY time this.state is directly assigned without using 'setState' function
    this.state = { lat: null, errorMessage: '' }; //defining state properties
    // alternate, without using a constructor: state = { lat: null, errorMessage: ''}; babel will create the corresponding js code
  }

  componentDidMount() {
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
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return (
      <Loader />
    );
  }
}

ReactDOM.render(
  <App />,
document.querySelector('#root')
);