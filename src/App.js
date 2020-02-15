import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello,React!'
    }
  }

  render() {
    return(
    <div className="text">{ this.state.msg }</div>
    )
  }
}

export default App;