import React from 'react';

const CivDescription = (props) => {
  if (props.civ == "10272") {
      return(
          <span><b>Strong Units</b>: Mech and Troopers.<br/>
        <b>Civilization Bonus</b>: Aircraft costs 5% less. Hvy Mech upgrades cost 10% less.<br/>
        <b>Fortress Bonus</b>: Fortresses are built 10% faster.<br/>
        <b>Unique Unit</b>: Dark Trooper (Trooper) and Probot (Scout)<br/>
        <b>Unique Technologies</b>: Walker Research (Mech Factory), Chain lightning (Sith Temple), Altered Bargains (Spaceport).<br/>
        <b>Team Bonus</b>: Mech factories work 10% faster.
         </span>)
  }
  if (props.civ == "10271") {
      return(
        <span><b>Strong units</b>: Air and Troopers.<br/>
        <b>Civilization Bonus</b>: Farm droids work 15% faster, Command Centers and turrets cost 15% less Ore. Temple units cost 12% less Nova (Hidden bonus).<br/>
        <b>Fortress Bonus</b>: Fortresses have +1 range, line of sight and search radius.<br/>
        <b>Unique Unit</b>: Airspeeder (Air Unit)<br/>
        <b>Unique Technologies</b>: Tougher Armor (War Center); Plasma Detonators (Troop Center); A-Wing, Astromech Repairs (Airbase); Evacuation Protocols (Research Center)<br/>
        <b>Team Bonus</b>: Farm food maximum raised by +35 food.
         </span>
      )
  }
  if (props.civ == "10273") {
    return(
        <span><b>Strong units</b>: Mechs and Ships.<br/>
      <b>Civilization Bonus</b>: Prefab Shelters are not necessary. Troop Center units cost -5/20/35% in Tech Level 2/3/4.<br/>
      <b>Weakness:</b> Carbon collection is 10% slower. Starts with -25 less Carbon. Aircraft take 5% longer to build and are 5% more expensive.<br/>
      <b>Fortress Bonus</b>: Fortresses' anti-air attack has +3 LoS, Search Radius, and Range.<br/>
      <b>Unique Unit</b>: Destroyer Droid (Trooper with Mech armor)<br/>
      <b>Unique Technologies</b>: Fusion Extractor (Ore Processing Center), Deployment Racks (Mech Factory), Inisder Trading, Market Control, Neimoidian Endorsement (Spaceport)<br/>
      <b>Team Bonus</b>: Heavy Weapons Factory units gain 15% speed.
       </span>)
  }
  if (props.civ == "10274") {
    return(
        <span><b>Strong units</b>: Jedi and Troopers.<br/>
      <b>Civilization Bonus</b>: Prefabs hold 1 more population; Holocron generates +15 Nova; Temples cost -10% Nova and Temple Units cost -12% Nova; Attackers can transport 6 infantry units.<br/>
      <b>Fortress Bonus</b>:  Fortresses heal garrisoned units 33% faster.<br/>
      <b>Unique Unit</b>: Jedi Starfighter (Jedi)<br/>
      <b>Unique Technologies</b>: Air Cruiser Boost (Fortress); Kaminoan Refit (Animal Nursery); Upgraded Med Droids (Command Ctr); Gal Senate Hub (Fortress); Sight Beyond Sight (Jedi Temple); Gunship Armaments (Airbase); Kaminoan Cloners (War Ctr)<br/>
      <b>Team Bonus</b>: Med Droids Heal twice as fast, Jedi gain 10% speed.
       </span>)
  }

  if (props.civ == "10281") {
    return(<span><b>Strong units</b>: Air and Stealth<br/>
    <b>Civilization Bonus</b>: Airbase technologies cost 20% less. Airbase military units move 5% faster.  Workers move 10% faster; conduct repairs 2x faster. A nova stockpile (400 Nova) is created at every newly built Command Center. Temple units cost 12% less Nova (hidden bonus).* Hvy Mech upgrades cost 10% less (hidden bonus, possibly bug).<br/>
    <b>Fortress Bonus</b>: Forts generate power for nearby structures.<br/>
    <b>Unique Unit</b>: Ski Speeder (Mech)<br/>
    <b>Unique Technologies</b>: Supply Lines (Spaceport); Sensor Cloak (War Center); Bunkerbusters (Airbase); Resilence (Fortress)<br/>
    <b>Team Bonus</b>: Scouts and Fighters gain +1 LoS, Spaceports work 25% faster. Hutt Endorsement is free.<br/>
    </span>)
  }

  if (props.civ == "10275") {
    return(<span><b>Strong Units</b>: Troopers and Mechs<br/>
    <b>Civilization Bonus</b>: Military buildings cost 10% less to construct (except Fortresses). Mech Factories work 15% faster.<br/>
    <b>Weakness</b>: Aircraft take 5% longer to build and are 5% more expensive.<br/>
    <b>Fortress Bonus</b>: Fortresses have +16 attack bonus vs Force Users.<br/>
    <b>Unique Unit</b>: Magna Guard (Melee Infantry)<br/>
    <b>Unique Technologies</b>: Confederacy Alliance (Spaceport); Battlefield Scanners (War Center); Fusion Extractor (Nova Processing Center); Droid Upgrades (Research Center).<br/>
    <b>Team Bonus</b>: Cargo Hovercraft and Cargo Freighters generates +25% Nova crystals<br/>
    </span>)
  }

  if (props.civ == "10282") {
    return(<span><b>Strong Units</b>: Mounted Troopers and Heavy Weapons<br/>
    <b>Civilization Bonus</b>: Workers gain Basic Training automatically; Predators can be produced at the Animal Nursery; Workers build 10% faster; Basic Armor, Light Armor, Hvy Armor free requires War Center. Hvy Mech upgrades cost 10% less (hidden bonus, possibly bug).<br/>
    <b>Fortress Bonus</b>: Fortresses have +5 Garrison Capacity and provide +5 Population Space.<br/>
    <b>Unique Units</b>: Geonosian Warrior (Air Unit), Controllable Predators (Mounted Trooper)<br/>
    <b>Unique Technologies</b>: Geonosian Dilligence (Command Center); Enhanced Dexerity (Troop Center); Beast Training (Animal Nursery); Hailfire Rocket Pods (Hvy Weapons Factory); Geonosian Engineers (Hvy Weapons Factory).<br/>
    <b>Team Bonus</b>: Fortress-based Unique Units are 10% cheaper.<br/>
    </span>)
  }

  if (props.civ == "10280") {
    return(<span>
      <b>Strong Units</b>: Hvy Weapons and Troopers<br/>
      <b>Civilization Bonus</b>: Workers carry +3 resources. Advancing tech levels require one fewer building. Troop Center technologies cost 25% less. Hvy Mech upgrades cost 10% less (Hidden bonus, possibly bug).<br/>
      <b>Fortress Bonus</b>: Forts attack 10% faster.<br/>
      <b>Unique Units</b>: Flametrooper (Trooper); Jet Trooper (Trooper)<br/>
      <b>Unique Technologies</b>: Indoctrination (Troop Center); Advanced Torpedoes (Research Center); Auxiliary Power Cells (Mech Factory); Conflagrine-14 (Troop Center).<br/>
      <b>Team Bonus</b>: Research Centers work 30% faster.<br/>
    </span>)
  }

  if (props.civ == "10276") {
    return(<span><b>Strong Units</b>: Ships and Mechs<br/>
    <b>Civilization Bonus</b>: Gungans can build Prefab Shelters underwater. Buildings have self-regeneration (except Power Core, Monument, Anti-Air Battery, Mine, Walls, Gate, Farm, and AquaHarvester). Workers have a +10% Ore Mining Bonus starting in TL-3. Military ships are detectors.<br/>
    <b>Weakness</b>: Aircraft take 5% longer to build and are 5% more expensive.<br/>
    <b>Fortress Bonus</b>: Fortresses cost 50 less Ore.<br/>
    <b>Unique Unit</b>: Fambaa Shield Generator (Mech)<br/>
    <b>Unique Technologies</b>: Creature Training (Hvy Weapons Factory); Gungan Creature Armor (Mech Factory); FarSeein Binoculars (Troop Ctr); Potent Plasma (War Center); Faster Growth Chambers (War Ctr)<br/>
    <b>Team Bonus</b>: Shipyards cost 15% less; Shield Generators cost 10% less.<br/>  
    </span>)
  }

  if (props.civ == "10278") {
    return(<span><b>Strong units</b>: Mechs and Heavy Weapons<br/>
    <b>Civilization Bonus</b>: War Center upgrades cost -15%; Hvy Weapons attack 10% faster; Bounty Hunters have +1 LoS, Search Radius, and Range. Hvy Mech upgrades cost 10% less (hidden bonus, possibly bug).<br/>
    <b>Fortress Bonus</b>: Each standing Fortress slightly reduces the Nova cost of Fortress units (up to -25%).<br/>
    <b>Unique Units</b>: Defiler (Grenade Trooper); Vornskr (Mounted Trooper); Nightsister Hunter (Jedi).<br/>
    <b>Unique Technologies</b>: Black Market Components (War Center); Piracy (Spaceport); Phased Pulse Cannons (Mech Factory)<br/>
    <b>Team bonus</b>: Hvy Weapon Factories work 10% faster.
    </span>)
  }

  if (props.civ == "10277") {
    return(<span><b>Strong Units</b>: Troopers and Air<br/>
    <b>Civilization Bonus</b>: Carbon Collection in Tech Level 3 and above is 5% faster.<br/>
    <b>Fortress Bonus</b>: Fortresses gain +5 LoS, and 10% hit points.<br/>
    <b>Unique Unit</b>: Berserker (Melee Trooper)<br/>
    <b>Unique Technologies</b>: Self Regeneration (Command Center); Berserker Jet Packs (Fortress); Forest Vision (Hvy Weapons Facotry); Wookiee Ingenuity (Mech Factory)<br/>
    <b>Team Bonus</b>: Troopers gain +2 Line of Sight and +2 search radius.<br/>
    </span>)
  }

  if (props.civ == "10279") {
    return(<span><b>Strong Units</b>: Air and Jedi<br/>
    <b>Civilization Bonus</b>: Nova collection is 10% faster; Holocrons generate +15 nova. Temple units cost 12% less Nova (hidden bonus).<br/>
    <b>Fortress Bonus</b>: +6 attack against Mechs and +3 Hvy Weapons.<br/>
    <b>Unique Unit</b>: Royal Crusader (Mounted Trooper)<br/>
    <b>Unique Technologies</b>: Advanced Engines (Airbase); Battle Armor, Taxation (Fortress)<br/>
    <b>Team Bonus</b>: Air Cruiser speed is increased by +10%.<br/>
    </span>)
  }

  return(<span>wololo! please file a bug.</span>)
}

export default CivDescription;
