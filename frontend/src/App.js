import React, { Component } from 'react';

 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.fetchItems = this.fetchItems.bind(this)
  }
  componentDidMount(){
    this.fetchItems();
  }
  fetchItems(){
    fetch('http://127.0.0.1:8000/api/')
    .then(response => response.json())
    .then(data =>
      console.log('Data:', data)
      )
  }
  render() { 
    return ( 
      <h1> Hello</h1>
     );
  }
}
 
export default App;