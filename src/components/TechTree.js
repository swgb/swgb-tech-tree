import React, { Fragment } from 'react';

import RATechTree from './RATechTree';
import EmpireTechTree from './EmpireTechTree';
import TFTechTree from './TFTechTree';
import RepTechTree from './RepTechTree';
import RSTechTree from './RSTechTree';
import RNTechTree from './RNTechTree';
import GunganTechTree from './GunganTechTree';
import WoTechTree from './WoTechTree';
import GeoTechTree from './GeoTechTree';
import FOTechTree from './FOTechTree';
import ConfTechTree from './ConfTechTree';
import ZannTechTree from './ZannTechTree';

/**
 * The default Tech Tree
 */
const TechTree = (props) => {
  if (props.civ == "10271") {
    return (<RATechTree />)
  }

  if (props.civ == "10272") {
    return (<EmpireTechTree />)
  }

  if (props.civ == "10273") {
    return (<TFTechTree />)
  }

  if (props.civ == "10274") {
    return (<RepTechTree />)
  }

  if (props.civ == "10281") {
    return (<RSTechTree />)
  }

  if (props.civ == "10278") {
    return (<ZannTechTree />)
  }

  if (props.civ == "10280") {
    return (<FOTechTree />)
  }

  if (props.civ == "10277") {
    return (<WoTechTree />)
  }

  if (props.civ == "10275") {
    return (<ConfTechTree />)
  }

  if (props.civ == "10276") {
    return (<GunganTechTree />)
  }

  if (props.civ == "10282") {
    return (<GeoTechTree />)
  }
  if (props.civ == "10279") {
    return (<RNTechTree />)
  }

  return (<span>WOLOLOLOLO!!1!</span>)
}

export default TechTree;