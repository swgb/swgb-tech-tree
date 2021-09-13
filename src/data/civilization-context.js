import React from 'react';

export let civilizations = {
  "Confederacy": 10275,
  "First Order": 10280,
  "Galactic Empire": 10272,
  "Geonosians": 10282,
  "Gungans": 10276,
  "Rebel Alliance": 10271,
  "Republic": 10274,
  "Resistance": 10281,
  "Royal Naboo": 10279,
  "Trade Federation": 10273,
  "Wookiees": 10277,
  "Zann Consortium": 10278,
};

export let CivilizationContext = React.createContext(
  civilizations['Confederacy']// default value
);