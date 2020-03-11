import React from 'react';
import './App.css';
import MusiciansContainer from './Components/MusiciansContainer'
import NewMusicianForm from './Components/NewMusicianForm'
import musiciansData from './musicians'

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     musicians: musiciansData
  //   };
  // }

  state={
    musicians: musiciansData
  }

  addOneMusician = (musician) => {
    console.log(musician);
  }


  render(){
    return (
      <div className="App">
        <h1>Musicians</h1>

        <NewMusicianForm
          addOneMusician={this.addOneMusician}
        />

        <MusiciansContainer
          title="Jam Studios"
          musicians={this.state.musicians}
        />
      </div>
    )
  }

}

export default App;
