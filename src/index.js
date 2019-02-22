import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor(props) { // 'constructor' is a keyword
    super(props);

    // ONLY time this.state is directly assigned without using 'setState' function
    this.state = { lat: null }; //defining state properties

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //calling 'setState' here
        this.setState({ lat: position.coords.latitude }); // 'setState is a function brought in from React.Component
      },
      (err) => console.log(err)
    );
  }



  render() { // 'render' is a funtion brought in from React.Component
    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App />,
document.querySelector('#root')
);