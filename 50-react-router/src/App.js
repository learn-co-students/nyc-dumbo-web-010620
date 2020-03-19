import React from 'react';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import Header from './Header'

import Character from './CharacterComponents/Character'
import { Cat, Horton, Lorax, Thing1, Thing2 } from './CharacterComponents';

import {Route, Switch, Link, NavLink} from 'react-router-dom'


export default class App extends React.Component {


  state = {
    characters: [
    {
      id: 1,
      name: "The Cat in the Hat",
      gif: "https://media2.giphy.com/media/YrJ9irppjno2c/giphy.gif",
      slug: "cat",
    },
    {
      id: 2,
      name: "Horton",
      gif: "https://media0.giphy.com/media/DkVadqL1Sl5vi/giphy.gif",
      slug: "horton",
    },
    {
      id: 3,
      name: "The Lorax",
      gif: "https://media.giphy.com/media/RlE7socaGwjm/giphy.gif",
      slug: "lorax"
    },
    {
      id: 4,
      name: "Thing1",
      gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
      slug: "thing1",
    },
    {
      id: 5,
      name: "Thing2",
      gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
      slug: "thing2",
    },
  ]
  }


  decideWhatToRender = (routerProps) => {
    // the return value of this function is what gets slapped on the DOM
      // the component being returned from this function cannot call lifecycle methods nicely
    console.log(routerProps);
    let slugFromURL = routerProps.match.params.characterNamePlease
    console.log(slugFromURL);
    let foundCharacter = this.state.characters.find((character) => {
      return character.slug === slugFromURL
    })


    if (foundCharacter) {
      return <Character name={foundCharacter.name} gif={foundCharacter.gif} />
    } else {
      return <NotFound/>
    }

  }


  render() {

    const arrayOfNavLinks = this.state.characters.map((character) => {
      return <li key={character.id}><NavLink to={`/characters/${character.slug}`}>{character.name}</NavLink></li>
    })

    return (
      <div className="App">
        <header className="App-header">
          <Header/>

            <aside className="sidebar">
              <ul>
                <li>
                  <NavLink to="/" exact activeClassName="selected">Home</NavLink>
                </li>
                {arrayOfNavLinks}
              </ul>
            </aside>
        </header>

        <Switch>
          <Route path="/characters/:characterNamePlease" render={ this.decideWhatToRender }/>
          <Route path="/" exact component={ Home } />
          <Route component={ NotFound }/>
        </Switch>
      </div>
    );
  }
}
