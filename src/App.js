import React, { Fragment } from 'react';
import './App.scss';

import TechTree from './components/TechTree';
import CivDescription from './components/CivDescription';
// import { civilizations, CivilizationContext } from '../data/civilization-context'
import { civilizations } from './data/civilization-context';

function App() {
  const [civilization, setValue] = React.useState(10271)
  const civOptions = []
  for (let [key, value] of Object.entries(civilizations)) {
    civOptions.push({key, value})
  }

  return (
    <div className="App">
      {
        <section className="sidebar">
          <div className="sidebar-inner">
          <Fragment>
            <center><select value={civilization} onChange={e => setValue(e.target.value)}>
              {civOptions.map(item => {
                return(<option value={item.value}>{item.key}</option>)
              })}
            </select></center>
          <CivDescription civ={civilization}/>
          </Fragment>
          </div>
          <div className="info-bar">
                <Fragment>
                  <b>Star Wars Galactic Battlegrounds Tech Tree</b>.<br/>
                  This website contains tech trees for the base factions and the <a href="https://www.moddb.com/mods/star-wars-galactic-battlegrounds-expanding-fronts">Expanded Fronts mod factions</a><br/>
                  Please message <i>aoe2#9999</i> or <i>petr#9882</i> on Discord if you see any errors.<br/>
                  We recommend joining <a href="https://discord.gg/uHS9rrS8RY">Expanded Fronts discord server.</a><br/>
                  <i>Last updated on 09/10/2021</i>. - Project source code @ <a href="https://github.com/azurda/swgb-tech-tree">Github</a>.     
                </Fragment>
                </div>
        </section>

            
      }
      
      
      <div className="container">
        <section className="techtree">
          <div className="techtree-inner">
            <TechTree civ={civilization} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
