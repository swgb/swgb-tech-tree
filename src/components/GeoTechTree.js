import React, { Fragment } from 'react';

import Building from './Building';
import Unit from './Unit';
import Tech from './Tech';
import Wrapper from './Wrapper';

const TroopCenterTechTree = () => {
  return ( <Building faction="geo" name="Troop Center" carbon="160" hp="1500" attack="0" armor="1" duraarmor="7" range="0" description="Used to build and improve troopers. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
  <Unit faction="geo" name="Trooper Recruit" carbon="35" food="25" hp="30" attack="7" armor="0" duraarmor="0" range="3" unitname="Geonosian Drone" description="Ranged Combat Unit. Less effective at close range; better at battle from a distance. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, range, line of sight, speed, to Trooper 50F, 10N (Troop Center); more resistant to force users (Temple)">
    <Unit faction="geo" name="Trooper" carbon="35" food="25" hp="35" attack="8" armor="0" duraarmor="0" range="3" unitname="Geonosian Trooper" description="Stronger than Trooper Recruit. Ranged Combat Unit. Less effective at close range; better at battle from a distance. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, range, line of sight, speed, to Hvy Trooper 150F, 240N (Troop Center); more resistant to force users (Temple)">
      <Wrapper>
        <Unit faction="geo" name="Hvy. Trooper" carbon="35" food="25" hp="40" attack="8" armor="0" duraarmor="0" range="4" unitname="Hvy Geonosian Trooper" description="Stronger than Trooper. Ranged combat unit. Less effective at close range; better at battle from a distance. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, range, line of sight, speed, to Repeater Trooper 225F, 360N (Troop Center); more resistant to force users (Temple)">
          <Wrapper>
            <Unit faction="geo" name="Repeater Trooper" carbon="35" food="25" hp="45" attack="6" armor="0" duraarmor="1" range="4" unitname="Geonosian Repeater" description="Stronger than Hvy Trooper. Ranged combat unit. Trooper with a rapid fire weapon. Less effective at close range; better at battle from a distance. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, range, line of sight, speed (Troop Center); more resistant to force users (Temple)  ">
            </Unit>
          </Wrapper>
        </Unit>
      </Wrapper>
    </Unit>
  </Unit>
  <Unit faction="geo" name="Mounted Trooper" food="55" nova="20" hp="125" attack="5" armor="4" duraarmor="3" range="0" unitname="Picador. Animal Nursery is necessary for Mounted Trooper" description="Melee combat unit. Effective against Mechs and Heavy Weapons, a fast close range trooper. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, line of sight, speed, to Hvy Mounted Trooper 100F, 100N (Troop Center); more resistant to force users (Temple)">
    <Unit faction="geo" name="Hvy. Mounted Trooper" food="55" nova="20" hp="135" attack="7" armor="4" duraarmor="3" range="0" unitname="Hvy Picador" description="Stronger than Mounted Trooper. Melee combat unit. Effective against Mechs and Heavy Weapons, a fast close range trooper. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, line of sight, speed, to Adv Mounted Trooper 200F, 200N (Troop Center); more resistant to force users (Temple)">
      <Wrapper>
        <Unit faction="geo" name="Adv. Mounted Trooper" food="55" nova="20" hp="145" attack="9" armor="4" duraarmor="4" range="0" unitname="Adv Picador" description="Stronger than Hvy Mounted Trooper. Melee combat unit. Effective against Mechs and Heavy Weapons, a fast close range trooper. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, line of sight, speed (Troop Center); more resistant to force users (Temple)">
        </Unit>
      </Wrapper>
    </Unit>
  </Unit>
  <Wrapper>
    <Unit faction="geo" name="Grenade Trooper" food="90" nova="40" hp="45" attack="1" armor="1" duraarmor="3" range="6" unitname="Geonosian Mortar" description="Artillery combat unit. The thermal grenades that this trooper lobs have an area of attack effect, and are effective against mechs and shields, but ineffective against buildings and non-mechanized units. Upgrades: creation speed (Fortress); armor, attack (War Center); attack, build speed, range, line of sight, speed (Troop Center); more resistant to force users (Temple)"></Unit>
    <Tech faction="geo" name="Macro Binoculars" food="75" description="All Troop Center units gain +1 Line of Sight.  Additionally, all Troop Center units (except Mounted Troopers) gain +1 Range.">
      <Wrapper>
        <Tech faction="geo" name="Portable Scanners"  food="225" description="All Troop Center units gain +2 Line of Sight.  Additionally, all Troop Center units (except Mounted Troopers) gain +2 Range.">
          <Wrapper>
            <Tech faction="geo" name="Integrated Rangefinder" food="300" description="All Troop Center units gain +1 Line of Sight.  Additionally, all Troop Center units (except Mounted Troopers) gain +1 Range."></Tech>
          </Wrapper>
        </Tech>
      </Wrapper>
    </Tech>
    <Unit faction="geo" name="Anti-Air Trooper" carbon="35" food="35" hp="30" attack="13" armor="0" duraarmor="1" range="6" unitname="Stinger Missile" description="Anti-Aircraft combat unit. Good attack against all air units. Upgrades: creation speed (Fortress); armor, attack (War Center); attack (Research Center); build speed, range, line of sight, speed, to Hvy Anti-Air Trooper 100F, 50N (Troop Center); more resistant to force users (Temple)">
      <Wrapper>
        <Unit faction="geo" name="Hvy. Anti-Air Trooper" carbon="35" food="35" hp="35" attack="9" armor="0" duraarmor="1" range="7" unitname="Dual Stinger Missile" description="Stronger than Anti-Air Trooper. Anti-Aircraft combat unit. Good attack against all air units. Upgrades: creation speed (Fortress); armor, attack (War Center); attack (Research Center); build speed, range, line of sight, speed (Troop Center); more resistant to force users (Temple)"></Unit>
      </Wrapper>
    </Unit>
  </Wrapper>
  <Wrapper>
      <Wrapper>
      <Wrapper>
      <Tech faction="geo" name="Lighter Armor" food="100" description="All Troop Center units gain +5% speed.">
        <Wrapper>
          <Tech faction="geo" name="Dexterity" food="450" carbon="150" description="All Troop Center units gain +5% speed.">
              <Tech faction="geo" name="Enhanced Dexterity" food="500" carbon="200" unitname="Geonosian Specific" description="Troop Center units gain +10% speed." unique/>
          </Tech>
        </Wrapper>
      </Tech>
      </Wrapper>
      </Wrapper>
    </Wrapper>
  <Wrapper>
    <Wrapper>
      <Wrapper>
      <Wrapper>
        <Wrapper>
        <Tech faction="geo" name="Droid Assistants" food="100" carbon="100" description="All Troop Center units are created 20% faster."></Tech>
        <Tech faction="geo" name="Explosive Yields Increase" food="300" nova="450" description="Grenades do double the damage in double the area of attack." ></Tech>
        </Wrapper>
      </Wrapper>
      </Wrapper>
    </Wrapper>
  </Wrapper>
</Building>)
}

const MechFactoryTechTree = () => {
  return(
    <Wrapper connector={false}>
    <Wrapper connector={false}>
              <Building faction="geo" name="Mech Factory"  carbon="180" ore="25" hp="2500" attack="0" armor="2" duraarmor="8" range="0" description="Used to build and improve mechanized units for all  non-Gungan civilizations.  The Gungan Mech Factory produces creatures fitted with armor and mechanical devices. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
                  <Unit faction="geo" name="Scout" carbon="50" hp="60" attack="3" armor="0" duraarmor="2" range="2" unitname="Flitknot Speederbike" description="Ranged combat unit. Detector unit. Very fast scout unit, used to scout enemy locations. Upgrades: creation speed (Fortress); hit points, speed (Mech Factory); armor, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit>
                <Wrapper>
                  <Wrapper>
                    <Unit faction="geo" name="Strike Mech" food="50" carbon="100" hp="80" attack="4" armor="2" duraarmor="5" range="6" unitname="Crab Droid" description="Ranged combat unit. Very effective vs. troopers, but more expensive than troopers. Upgrades: creation speed (Fortress); hit points, speed, to Hvy Strike Mech 450C, 600N (Mech Factory); armor, attack, range, line of sight (War Center); more resistant to force users (Temple)">
                        <Unit faction="geo" notResearchable name="Hvy Strike Mech" food="50" carbon="100" hp="100" attack="5" armor="2" duraarmor="6" range="6" unitname="Hvy Crab Droid" description="Stronger than Strike Mech. Ranged combat unit. Very effective vs. troopers, but more expensive than troopers. Upgrades: creation speed (Fortress); hit points, speed (Mech Factory); armor, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit>
                    </Unit>
                    <Unit faction="geo" name="Mech Destroyer" food="100" carbon="175" hp="150" attack="6" armor="3" duraarmor="5" range="7" unitname="LGAT" description="Ranged combat unit. Very effective vs. other mechanized units. Can be used to transport smaller units, like troopers. Upgrades: creation speed (Fortress); hit points, speed, attack, to Hvy Mech Destroyer 500C, 750N (Mech Factory); armor, attack, range, line of sight (War Center); more resistant to force users (Temple)">
                        <Unit faction="geo" name="Hvy Mech Destroyer" food="100" carbon="175" hp="175" attack="7" armor="3" duraarmor="6" range="7" unitname="Ground Armored Tank" description="Stronger than Mech Destroyer. Ranged combat unit. Very effective vs. other mechanized units. Can be used to transport smaller units, like troopers. Upgrades: creation speed (Fortress); hit points, speed, attack (Mech Factory); armor, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit>
                    </Unit>
                    <Tech faction="geo" name="Upgraded Generator" food="100" carbon="75" description="All Mech Factory units gain +10% speed.">
                        <Tech faction="geo" name="Advanced Generator" nova="250" ore="200" description="All Mech Factory units gain +10% speed."></Tech>
                    </Tech>
                    <Unit faction="geo" name="Transport Mech" food="75" carbon="125" hp="175" attack="4" armor="2" duraarmor="5" range="6" unitname="XT Beetle Transport" description="Ranged combat unit. Lightly armored mech with medium attack. Can be used to transport smaller units, like troopers. Upgrades: creation speed (Fortress); hit points, speed (Mech Factory); armor, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit>
                    
                  </Wrapper>
                </Wrapper>
                <Wrapper>
                  <Wrapper>
                    <Wrapper>
                      <Unit faction="geo" name="Assault Mech" food="200" nova="350" hp="300" attack="18" armor="4" duraarmor="9" range="8" unitname="Super Tank" description="Ranged combat unit. Very effective against ships.  Heavily armored, powerful weapon used for storming a base.  Area of effect attack. Can be used to transport smaller units, like troopers. Upgrades: creation speed (Fortress); hit points, speed, to Hvy Assault Mech 600F, 600N (Mech Factory); armor, attack, range, line of sight (War Center); more resistant to force users (Temple)">
                          <Unit faction="geo" notResearchable name="Hvy Assault Mech" food="200" nova="350" hp="325" attack="20" armor="4" duraarmor="9" range="8" unitname="Ultra Tank" description="Stronger than Assault Mech. Ranged combat unit. Very effective against ships.  Heavily armored, powerful weapon used for storming a base.  Area of effect attack. Can be used to transport smaller units, like troopers.<i> Upgrades: creation speed (Fortress); hit points, speed (Mech Factory); armor, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit>
                      </Unit>
                      <Tech faction="geo" name="Adv Redesign" food="750" nova="450" description="All Mech Factory units gain +50 hit points."></Tech>
                      <Tech faction="geo" name="Technicians" food="700" ore="150" description="All Mech Factory units have 25% more hit points."></Tech>
                    </Wrapper>
                    </Wrapper>
                    </Wrapper>
              </Building>
    </Wrapper>
  </Wrapper>
  );
}

const JediTempleTechTree = () => {
  return(
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Building faction="geo" name="Sith Temple" carbon="180" nova="25" hp="2500" attack="0" armor="4" duraarmor="10" range="0" description="Used to create and improve force users. Garrisoned Holocrons generate nova crystals. Cannot be converted by enemy force users.">
          <Unit faction="geo" name="Sith Apprentice" food="100" nova="200" hp="125" attack="6" armor="0" duraarmor="4" range="0" description="A pupil, learning the ways of the Force. Effective against troops and some mechs. Upgrades: creation speed (Fortress); to Sith Knight 250F, 250N; speed (Temple)" >
            <Unit faction="geo" name="Sith Knight" food="100" nova="200" hp="200" attack="9" armor="1" duraarmor="5" range="0" description="Stronger than Sith Apprentice. Melee combat unit.
A Sith who has completed his training with a Sith Knight or Master. Effective against troops and some mechs. Turns enemy units to your civilization (player color). Upgrades: creation speed (Fortress); Conversion range, Conversion Recharge, speed (Temple)" ></Unit>
          </Unit>
          <Wrapper>
            <Tech faction="geo" name="Force Stamina" nova="120" description="Knights and Masters regain force power 50% faster after a successful turning.">
              <Wrapper>
                <Tech faction="geo" name="Force Strong" nova="200" description="Knights and Masters have +3 turning range and +3 line of sight."></Tech>
              </Wrapper>
              </Tech>
            <Tech faction="geo" name="Force Agility"  nova="140" description="Jedi, Sith, Ren, and Nightsister speed is increased by 15%"></Tech>
          </Wrapper>
          <Wrapper>
              <Wrapper>
                <Wrapper>
                <Unit faction="geo" notResearchable name="Sith Master" food="100" nova="400" hp="300" armor="1" duraarmor="6" range="0" attack="12"  description="Stronger than Sith Knight. Melee combat unit.
Self-regenerative. The highest form of Sith advancement. Effective against troops and some mechs. Turns enemy units to your civilization (player color). Upgrades: creation speed (Fortress); Conversion range, Conversion Recharge, detection capability, stealth capability, speed, buildings and piloted units turned (Temple)"></Unit>
                <Tech faction="geo" name="Force Purge" nova="1250" description="Turned units die when turned by an enemy force user."></Tech>
                <Tech faction="geo" notResearchable name="Faith in the Force" food="750" nova="1000" description="Units on your side are 50% harder to turn."></Tech>
                <Tech faction="geo" notResearchable name="Force Concentration" nova="475" description="Masters can turn most Buildings and Hvy Units."></Tech>
                <Tech faction="geo" notResearchable name="Force Influence" nova="325" description="Masters can turn other Jedi."></Tech>
                <Tech faction="geo" name="Force Meditation" food="400" nova="750" description="After a group of force users turn an enemy unit, only one of them has to rest before another attempt."></Tech>
                <Tech faction="geo" notResearchable name="Force Perception" nova="400" description="Knights and Masters can see stealth or submerged units."></Tech>
                <Tech faction="geo" notResearchable name="Jedi Mind Trick" nova="750" description="Masters and Jedi Starfighters gain stealth capability. They can not be seen by other units without detection capability, except when the unit is attacking or converting."></Tech>
                </Wrapper>
              </Wrapper>
            </Wrapper>
        </Building>
      </Wrapper>
    </Wrapper>
  );
}

const ShipyardTechTree = () => {
  return(<Building faction="geo" name="Shipyard" carbon="160" hp="1800" attack="0" armor="1" duraarmor="7" range="0" description="Used to build ships as well as deposit food collected by Utility Trawlers.  Upgrades to ships are available at the War Center. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
    <Unit faction="geo" name="Utility Trawler" carbon="45" hp="60" attack="0" armor="0" duraarmor="4" range="0" description="Non-combat unit. Gathers food from fish and AquaHarvester. Returns fish to the Shipyard automatically in the same way workers return food to the Command Center. Upgrades: speed, carry capacity (Command Center); line of sight (War Center); more resistant to force users (Temple)"></Unit>
    <Building faction="geo" name="Aqua Harvester" carbon="90" hp="50" attack="0" armor="0" duraarmor="0" range="0" description="A renewable source of food. Similar to a Farm, but in water. Provides a limited amount of food before it collapses and must be rebuilt. Cannot be converted by enemy force users. Upgrades: line of sight (Command Center); hit points (Research Center)."></Building>
    <Building faction="geo" name="Sensor Buoy" carbon="20" ore="10" hp="500" attack="0" armor="0" duraarmor="0" range="0" description="A fixed observation structure for the sea that provides advance warning of nearby enemy activity. Like their terrestrial equivalent, the Sentry Post, Sensor Buoys are excellent for detecting stealth units, like submarines.  Sensor Buoys do not attack or let you garrison units inside. Upgrades: line of sight (Command Center); line of sight (War Center);"></Building>
    <Wrapper>
      <Unit faction="geo" name="Lt Frigate" carbon="90" nova="20" hp="50" attack="6" armor="0" duraarmor="6" range="5" unitname="Lt Scout" description="Ranged combat unit. Detector unit. Nimble unit that is good for scouting and general defense vs. other ships.  Weak vs. buildings. Upgrades: to Frigate 180C, 90N (Shipyard); creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)">
        <Unit faction="geo" name="Frigate" carbon="90" nova="20" hp="60" attack="7" armor="0" duraarmor="7" range="6" unitname="Scout" description="Stronger than Lt. Frigate. Ranged combat unit. Detector unit. Nimble unit that is good for scouting and general defense vs. other ships.  Weak vs. buildings. Upgrades: to Adv Frigate 360C, 180N (Shipyard); creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)">
          <Unit faction="geo" notResearchable name="Adv Frigate" hp="70" attack="8" armor="0" duraarmor="8" range="7" unitname="Adv Scout" description="Stronger than Frigate. Ranged combat unit. Detector unit. Nimble unit that is good for scouting and general defense vs. other ships.  Weak vs. buildings. Upgrades: creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit>
        </Unit>
      </Unit>
      <Unit faction="geo" name="Transport Ship" carbon="125" nova="15" hp="160" attack="0" armor="4" duraarmor="8" range="0" unitname="Transport Ship" description="Non-combat unit. Used to move your units across water. Select the units you want to transport, then board them on the Transport Ship. Use the Unload button to unload units from the ship when it approaches the shore. Upgrades: armor, carry capacity, cost, detection capability, speed, line of sight (War Center); more resistant to force users (Temple)"></Unit>

    </Wrapper>
    <Wrapper>
      <Wrapper>
        <Wrapper>
          <Unit faction="geo" name="Destroyer" carbon="100" nova="25" hp="100" attack="2" armor="0" duraarmor="6" range="0" unitname="Destroyer" description="Melee combat unit. Agile and tough, the destroyer is an effective counterunit to other ships, especially the Cruiser. Upgrades: to Hvy Destroyer 210C, 510N (Shipyard); creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)">
            <Wrapper><Unit faction="geo" notResearchable name="Hvy Destroyer" carbon="100" nova="25" hp="120" attack="3" armor="0" duraarmor="8" range="0" unitname="Hvy Destroyer" description="Stronger than Destroyer. Melee combat unit. Agile and tough, the hvy destroyer is an effective counterunit to other ships, especially the Cruiser. Upgrades: creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit></Wrapper>
          </Unit>
          <Unit faction="geo" name="Anti-Air Destroyer" carbon="100" nova="35" hp="120" attack="25" armor="0" duraarmor="6" range="7" unitname="Missile Destroyer" description="Anti-Aircraft combat unit. Excellent attack against all air units. Upgrades: to Hvy Anti-Air Destroyer 210C, 410N (Shipyard); creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); attack (Research Center); more resistant to force users (Temple)">
            <Wrapper>
            <Unit faction="geo" name="Hvy Anti-Air Destroyer" carbon="100" nova="25" hp="120" attack="19" armor="0" duraarmor="8" range="8" unitname="Hvy Missile Destroyer" description="Stronger than Anti-Air Destroyer. Anti-Aircraft combat unit. Excellent attack against all air units.  Has additional accuracy because of homing projectiles. Upgrades: creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); attack (Research Center); more resistant to force users (Temple)"></Unit>
            </Wrapper>
          </Unit>
          <Unit faction="geo" name="Monitor"  carbon="70" nova="50" hp="80" attack="5" armor="0" duraarmor="8" range="8" unitname="Ostracoda Gunboat" description="Artillery combat unit. Excels at attacking land units. Weak vs. ships. Upgrades: to Hvy Monitor 200C, 500N (Shipyard); creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)">
                <Wrapper>
            <Unit faction="geo" name="Hvy Monitor" carbon="70" nova="50" hp="100" attack="6" armor="0" duraarmor="9" range="10" unitname="Heavy Ostracoda Gunboat" description="Stronger than Monitor. Artillery combat unit. Excels at attacking land units. Weak vs. ships. Upgrades: creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit>
                </Wrapper>
          </Unit>
        </Wrapper>
      </Wrapper>
    </Wrapper>
    <Wrapper>
      <Wrapper>
        <Wrapper>
          <Wrapper>
          <Wrapper>
              <Unit faction="geo" name="Cruiser" carbon="200" nova="150" hp="160" attack="35" armor="0" duraarmor="8" range="12" unitname="Cruiser" description="Artillery combat unit. Excellent for long range shelling of shore installations. Weak vs. Destroyers. Upgrades: to Adv Cruiser 200C, 500N (Shipyard); creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)">
            <Unit faction="geo" notResearchable name="Adv Cruiser" carbon="200" nova="150" hp="180" attack="23" armor="0" duraarmor="9" range="16" unitname="Adv Cruiser" description="Stronger than Cruiser. Artillery combat unit. Excellent for long range shelling of shore installations. Weak vs. Destroyers. Upgrades: creation speed (Fortress); armor, cost, detection capability, speed, attack, range, line of sight (War Center); more resistant to force users (Temple)"></Unit>
            </Unit>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
    
  </Building>)
}

const CommandCenterTechTree = () => {
  return(<Building faction="geo" name="Command Center"  carbon="275" ore="100" hp="2500" attack="5" armor="3" duraarmor="6" range="6" description="Used to create workers, deposit resources (food, carbon, ore, nova crystals), advance to the next tech level, and improve buildings as well as workers. Units can garrison inside for protection. Adds population support for 5 units. Cannot be converted by enemy force users. Upgrades: line of sight (Command Center); attack, range, line of sight (War Center);">
    <Unit faction="geo" name="Worker" food="50" hp="40" attack="3" armor="0" duraarmor="0" range="0" unitname="Geonosian Worker" description="Gathers food, carbon, ore, nova crystals. Builds and repairs buildings. Also repairs non-biological weapons and units. Upgrades: hit points, armor, efficiency (Command Center); resource-gathering (Carbon, Ore and Nova Crystal Processing Centers); build speed (Research Ctr); attack (Fortress); more resistant to force users (Temple)"></Unit>
    <Unit faction="geo" name="Medic" carbon="35" hp="55" attack="0" armor="0" duraarmor="0" range="1" unitname="Geonosian Healer" description="Heals wounded biological units.  Does not heal mechanical units. Upgrades: more resistant to force users (Temple)"></Unit>
    <Tech faction="geo" name="Basic Training" nova="50" description="Makes your workers harder to kill by providing +15 hit points and +1 normal/+1 duraarmor."></Tech>
    <Wrapper>
      <Tech faction="geo" name="Sensor Beacon" food="75" description="All Buildings gain +4 Line of Sight.">
        <Wrapper>
        <Tech faction="geo" name="Sensor Array" food="300" nova="200" description="All Buildings gain +4 Line of Sight."></Tech>
        </Wrapper>
      </Tech>
      <Tech faction="geo" name="Upgraded Motivator" food="175" carbon="50" description="Worker and Utility Trawler speed is increased by 10% and their carry capacity is increased by 25%.">
        <Wrapper>
        <Tech faction="geo" name="Optimized Motivator" food="300" carbon="200" description="Worker and Utility Trawler speed is increased by 10% and their carry capacity is increased by 50%."></Tech>
        </Wrapper>
      </Tech>
    </Wrapper>
    <Wrapper>
      <Wrapper>
        <Wrapper>
          <Wrapper>
            <Wrapper>
              <Tech faction="geo" name="Bacta Tanks" notResearchable carbon="200" ore="150" description="Units garrisoned within buildings and turrets heal at 4x the normal garrison heal rate."></Tech>
              <Tech faction="geo" name="Geonosian Diligence" food="650" nova="400" unitname="Geonosian Specific" description="Enhances worker statistics, including a work rate increase of +10% and an attack increase of +2 against troopers and buildings and +4 against turrets." unique/>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  </Building>)
}

const ResearchCenterTechTree = () => {
  return(
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
         <Wrapper connector={false}>
           <Building faction="geo" name="Research Center" carbon="210" hp="2000" attack="0" armor="3" duraarmor="9" range="0" description="Used to improve buildings and ranged units. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
             <Tech faction="geo" name="Durasteel Suppt Beams" food="175" ore="150" description="Building hit points and armor are increased by 10%.">
                <Tech faction="geo" name="Permacite Plating" carbon="200" ore="150" description="Building and turret hit points are increased by +10% and armor is increased by +1/+1."></Tech>
             </Tech>
             <Tech faction="geo" name="Ion Accu Accelerator" carbon="350" nova="150" description="Laser Turrets cause 225% more damage in general and do 50% more damage when attacking ships."></Tech>
             <Tech faction="geo" name="Rotation Bearings" food="200" ore="100" description="Turrets have no minimum range.">
                 <Tech faction="geo" name="Hvy Weapons Engineers" food="500" carbon="600" description="All Heavy Weapons Factory units (except Pummels) and Cannons gain +1 attack range, and have a +20% attack against buildings."/>
             </Tech>
             <Tech faction="geo" name="Power Calibrator" carbon="200" ore="100" description="Worker build speed is increased by 20%."></Tech>
             <Tech faction="geo" name="Tracking and Target Comptr" carbon="300" nova="175" description="Attacks on moving targets are more effective now because computers track them and can aim better.  This affects all projectiles."></Tech>
             <Tech faction="geo" name="AA Battery" carbon="300" ore="100" description="Enables the construction of AA Batteries."></Tech>
             <Wrapper>
              <Tech faction="geo" name="Homing Sensors" food="300" nova="200" description="Anti-Air units and turrets' projectiles now have homing capability."></Tech>
             </Wrapper>
           </Building>
         </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

const AirBaseTechTree = () => {
  return(
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Building faction="geo" name="Airbase" carbon="210" hp="2500" attack="0" armor="2" duraarmor="9" range="0" description="Used to build and improve aircraft. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
            <Unit faction="geo" name="Air Transport" food="50" carbon="190" hp="150" attack="0" armor="0" duraarmor="0" range="0" unitname="Geonosian Transport" description="Non-combat unit. Used to move your units through the air to other spots on land. Select the units you want to transport, then board them on the Air Transport. Use the Unload button to unload units out of the transport when it is near the destination. Upgrades: armor, cost (Airbase); more resistant to force users (Temple)."></Unit>
            <Unit faction="geo" name="Bomber" food="50" nova="80" hp="30" attack="5" armor="0" duraarmor="0" range="1" unitname="Commerce Guild Bomber" description="Artillery combat unit. Very effective against buildings, walls and units, especially power cores. Upgrades: attack, accuracy, armor, cost, shields, to Enh Bomber 200C, 200N (Airbase); creation speed (Fortress); more resistant to force users (Temple)">
              <Unit faction="geo" name="Enh Bomber" food="50" nova="80" hp="35" attack="6" armor="0" duraarmor="0" range="1" unitname="Commerce Guild Enh Bomber" description="Stronger than Bomber. Artillery combat unit. Very effective against buildings, walls and units, especially power cores. Upgrades: attack, accuracy, armor, cost, shields, to Adv Bomber 400C, 400N (Airbase); creation speed (Fortress); more resistant to force users (Temple)">
              <Unit faction="geo" notResearchable name="Adv Bomber" food="50" nova="80" hp="40" attack="7" armor="0" duraarmor="0" range="1" unitname="Commerce Guild Adv Bomber" description="Stronger than Enhanced Bomber. Artillery combat unit. Very effective against buildings, walls and units, especially power cores. Upgrades: attack, accuracy, armor, cost, shields (Airbase); creation speed (Fortress); more resistant to force users (Temple)"></Unit>
              </Unit>
            </Unit>
            <Unit faction="geo" name="Fighter" food="50" nova="60" hp="30" attack="4" armor="0" duraarmor="0" range="3" unitname="Geonosian Fighter" description="Ranged, Anti-Aircraft combat unit. Very effective against other aircraft and a good air combat unit for taking out workers and troopers on the ground. Upgrades: accuracy, armor, cost, shields, to Fast Fighter 200C, 200N (Airbase); creation speed (Fortress); more resistant to force users (Temple)">
              <Unit faction="geo" name="Fast Fighter" food="50" nova="60" hp="35" attack="5" armor="0" duraarmor="0" range="3" unitname="Nantex Territorial Defense Fighter" description="Stronger than Fighter. Ranged, Anti-Aircraft combat unit. Very effective against other aircraft and a good air combat unit for taking out workers and troopers on the ground. Upgrades: accuracy, armor, cost, shields, to Adv Fighter 400C, 400N (Airbase); creation speed (Fortress); more resistant to force users (Temple)">
              <Unit faction="geo" notResearchable name="Adv Fighter" food="50" nova="60" hp="40" attack="5" armor="0" duraarmor="0" range="4" unitname="Adv Geonosian Fighter" description="Stronger than Fast Fighter. Ranged, Anti-Aircraft combat unit. Very effective against other aircraft and a good air combat unit for taking out workers and troopers on the ground. Upgrades: accuracy, armor, cost, shields (Airbase); creation speed (Fortress); more resistant to force users (Temple)"></Unit>
              </Unit>
            </Unit>
            <Tech faction="geo" notResearchable name="Flight School" carbon="50" description="Pilots have 20% greater hit accuracy, and fighters, attackers, interceptors, and bombers gain +1 Line of Sight.">
              <Tech faction="geo" notResearchable name="Advanced Flight School" food="300" carbon="200" description="Pilots have +20% hit accuracy, and fighters, attackers, interceptors, and bombers gain +1 Line of Sight."></Tech>
            </Tech>
            <Tech faction="geo" name="Enlarged Bomb Hold" food="250" description="Bombers now have bombs that have triple the area effect."></Tech>
            <Wrapper>
              <Unit faction="geo" name="Attacker" food="75" nova="100" hp="70" attack="10" armor="0" duraarmor="0" range="5" unitname="Geonosian Gunship" description="Ranged, Aircraft combat unit. Very effective against ground targets. Upgrades: accuracy, armor, cost, line of sight, shields (Airbase); creation speed (Fortress); more resistant to force users (Temple)"></Unit>
              <Unit faction="geo" name="Interceptor" food="50" nova="50" hp="30" attack="4" armor="0" duraarmor="0" range="6" unitname="Ginivex Starfighter" description="Ranged, Anti-Aircraft combat unit. Very effective against other aircraft. Upgrades: accuracy, armor, cost, line of sight, shields (Airbase); creation speed (Fortress); more resistant to force users (Temple)"></Unit>
              <Tech faction="geo" name="Efficient Manufacturing" food="250" nova="350" description="Airbase units cost 25% less to produce."></Tech>
              <Tech faction="geo" notResearchable name="Shield Modifications" food="250" nova="500" description="Fighters, Attackers, Interceptors, and Bombers are shielded."></Tech>
              <Tech faction="geo" notResearchable name="Armored Platework" carbon="350" nova="200" description="All Aircraft gain +4 aircraft armor."></Tech>
            </Wrapper>
          </Building>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

const WarcenterTechTree = () => {
  return(
    <Wrapper connector={false}>
      <Wrapper connector={false}>
          <Building faction="geo" name="War Center" carbon="180" hp="2000" attack="0" armor="1" duraarmor="7" range="0" description="Used to improve troopers, mechs, towers, Command Centers, Fortresses, and ships. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
            <Tech faction="geo" name="Basic Armor" food="100" description="Makes your Troop Center units harder to kill by providing +1\+1 armor.">
              <Tech faction="geo" name="Light Armor" food="200" nova="100" description="All Troop Center units gain +1/+1 armor.">
                <Wrapper>
                <Tech faction="geo" name="Hvy Armor" food="250" nova="250" description="All Troop Center units gain +1/+2 armor."/>
                </Wrapper>
              </Tech>
            </Tech>
            <Tech faction="geo" name="Elevation Tracking" food="150" description="Makes Mechs, Ships, Command Centers, Fortresses and Turrets more effective by increasing their attack, range and Line of Sight by +1.">
              <Tech faction="geo" name="External Sensor Pod"  food="200" nova="100" description="Makes Mechs, Ships, Command Centers, Fortresses and Turrets more effective by increasing their attack, range and Line of Sight by +1.">
                <Wrapper>
                <Tech faction="geo" name="Targeting Sensor" food="300" nova="200" description="Makes Mechs, Ships, Command Centers, Fortresses and Turrets more effective by increasing their attack, range and Line of Sight by +1.">
                </Tech>
                </Wrapper>
              </Tech>
            </Tech>
            <Tech faction="geo" name="Light Plating" food="100" description="Strengthens your Mech Factory units by giving them +1/+1 armor.">
              <Tech faction="geo" name="Medium Plating"  food="150" nova="100" description="All Mech Factory units gain +1/+1 armor.">
                <Wrapper>
                  <Tech faction="geo" notResearchable name="Hvy Plating" food="250" nova="250" description="All Mech Factory units gain +1/+2 armor."></Tech>
                  </Wrapper>
              </Tech>
            </Tech>
            <Tech faction="geo" name="Primary Focusing Coils" food="100" description="Makes your Mech Factory and Troop Center units (except Anti-Air Troopers) more powerful by giving them +1 attack.">
              <Tech faction="geo" name="Cooling Sleeves" food="250" nova="150" description="Makes your Mech Factory and Troop Center units (except Anti-Air Troopers) more powerful by giving them +1 attack.">
              <Wrapper>
                <Tech faction="geo" name="Advanced Power Pack" food="300" nova="200" description="Makes your Mech Factory and Troop Center units (except Anti-Air Troopers) more powerful by giving them +2 attack."/>
              </Wrapper>
              </Tech>
            </Tech>
            <Wrapper>
            <Tech faction="geo" name="Redesigned Specifications" food="250" nova="150" description="Ships gain +1 armor and sea transport ships can now carry +5 units."></Tech>
            <Tech faction="geo" name="Grenadier Training" food="150" nova="150" description="Grenade Troopers throw grenades 10% faster. "></Tech>
            </Wrapper>
            <Wrapper>
              <Wrapper>
                <Wrapper>
                <Tech faction="geo" name="Advanced Scanning" carbon="300" nova="300" description="All Ships gain +2 Line of Sight and Submarines are now detectable by all military ships."/>
                <Tech faction="geo" notResearchable name="Advanced Propulsion" food="500" nova="300" description="Ships gain +15% speed."/>
                <Tech faction="geo"  name="Redoubled Efforts" food="600" nova="200" description="It now takes 20% less resources to build ships." />
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Building>
      </Wrapper>
    </Wrapper>
  );
}

const FortressTechTree = () => {
  return(
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Wrapper connector={false}>
          <Building faction="geo" name="Fortress" ore="550" hp="5000" attack="11" armor="8" duraarmor="11" range="8" description="Used to create your unique unit, build Air Cruisers, Cannons and Bounty Hunters, and improve workers and buildings. Possesses an effective anti-air defense system. Adds population support for 20 units. Cannot be converted by enemy force users. Upgrades: line of sight (Command Center); hit points (Fortress); attack, range, line of sight (War Center); hit points, armor, range (Research Center);">
            <Unit faction="geo" name="Bounty Hunter" food="150" carbon="150" hp="175" attack="15" armor="2" duraarmor="2" range="7" description="Ranged combat unit. Detector unit. Very strong vs. force users. Upgrades: creation speed (Fortress); more resistant to force users (Temple)"></Unit>
            <Unit faction="geo" name="Geonosian Warrior" food="65" nova="70" hp="40" attack="5" armor="0" duraarmor="0" range="0" description="Geonosian unique unit. Melee unit. A flying trooper that is quite good at knocking out ground troops. Upgrades: creation speed, to Elite Geonosian Warrior 400F, 300N (Fortress); more resistant to force users (Temple)">
              <Unit faction="geo" name="Elite Geonosian Warrior" food="65" nova="70" hp="40" attack="5" armor="0" duraarmor="0" range="0" description="Geonosian unique unit. Melee combat unit. A flying trooper that is quite good at knocking out ground troops. Upgrades: creation speed; more resistant to force users (Temple)"></Unit>
            </Unit>
            <Wrapper>
              <Unit faction="geo" name="Air Cruiser" food="600" nova="600" hp="260" attack="80" armor="0" duraarmor="0" range="12" unitname="Geonosian Cruiser" description="Artillery combat unit. Very effective against turrets, buildings, and walls. Especially good against units. Extremely long reload rate. Counts as two population towards the limit. Cannot be converted by Jedi. Upgrades: speed (Airbase); creation speed (Fortress)"></Unit>
              <Unit faction="geo" name="Cannon" carbon="200" nova="200" hp="150" attack="200" armor="1" duraarmor="150" range="16" unitname="Geonosian Sonic Cannon" description="Powerful artillery weapon used to destroy buildings, walls from long distance. Cannot fire on close units. Must be undeployed to move, deployed to attack. Can cut paths through forests. Attack bonus vs. buildings, ships. Weak vs. close nonranged units. Upgrades: creation speed (Fortress); attack, range (Research Center); more resistant to force users (Temple)"></Unit>
              <Tech faction="geo" name="Bothan Spy Net" nova="100" description="In regular game, reveals all enemy units and buildings by showing you their line of sight. The total cost is 100 Nova per enemy worker."></Tech>
              <Tech faction="geo" name="Attack Programming" food="400" nova="200" description="Workers gain +15 attack against buildings, turrets and walls."></Tech>
              <Tech faction="geo" name="Automated Processes"  food="150" nova="150" description="Military units are now created 33% faster."></Tech>
              <Tech faction="geo" name="Presidium" food="250" carbon="400" nova="400" description="The Fortress is fortified with +1000 hit points."></Tech>
            </Wrapper>
          </Building>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}


const HvyWeaponsTechTree = () => {
  return(
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Wrapper connector={false}>
          <Building faction="geo" name="Hvy Weapons Factory" carbon="210" ore="25" hp="2500" attack="0" armor="3" duraarmor="9" range="0" description="Used to build and improve heavy weapons in all non-Gungan civilizations. Some of the Gungan Heavy Weapons Factory units are creatures that are fitted with armor and mechanical devices. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
            <Unit faction="geo" name="Artillery" carbon="50" nova="90" hp="110" attack="15" armor="0" duraarmor="6" range="9" unitname="Corporate Alliance Artillery Regular" description="Artillery combat unit. Effective against buildings, walls and shields. Very effective against units. Area of effect attack. Can attack ground. Upgrades: creation speed (Fortress); hit points, speed, to Hvy Artillery 400C, 600N (Hvy Weapons Factory); attack, range (Research Center); more resistant to force users (Temple)">
                <Unit faction="geo" name="Hvy Artillery" carbon="50" nova="90" hp="120" attack="26" armor="0" duraarmor="7" range="10" unitname="Corporate Alliance Artillery Heavy" description="Stronger than Artillery. Artillery combat unit. Effective against buildings, walls and shields. Very effective against units. Area of effect attack. Can attack ground. Upgrades: creation speed (Fortress); hit points, speed (Hvy Weapons Factory); attack, range (Research Center); more resistant to force users (Temple)"></Unit>
            </Unit>
            <Unit faction="geo" name="Anti-Air Mobile" carbon="100" nova="50" hp="90" attack="22" armor="0" duraarmor="10" range="7" unitname="Hailfire Droid" description="Anti-Aircraft combat unit. Excellent attack against all air units. Upgrades: creation speed (Fortress); hit points, speed, to Hvy Anti-Air Mobile 300F, 100N (Hvy Weapons Factory); attack, range, (Research Center); more resistant to force users (Temple)">
              <Unit faction="geo" name="Hvy Anti-Air Mobile" carbon="100" nova="50" hp="125" attack="14" armor="0" duraarmor="15" range="8" unitname="Hvy Hailfire Droid" description="Stronger than Anti-Air Mobile. Anti-Aircraft combat unit. Excellent attack against all air units. Upgrades: creation speed (Fortress); hit points, speed (Hvy Weapons Factory); attack, range, (Research Center); more resistant to force users (Temple)"></Unit>
            </Unit>
            <Unit faction="geo" name="Pummel" carbon="150" nova="75" hp="200" attack="2" armor="5" duraarmor="180" range="0" unitname="Geonosian Industries Pummel" description="Melee combat unit. With its powerful cutting lasers, the Pummel has an attack bonus vs. buildings; resistant to ranged attack. Upgrades: creation speed (Fortress); hit points, speed, to Hvy Pummel 300C, 250N (Hvy Weapons Factory); attack (Research Center); more resistant to force users (Temple)">
                <Unit faction="geo" name="Hvy Pummel" carbon="150" nova="75" hp="250" attack="3" armor="15" duraarmor="190" range="0" unitname="Geonosian Industries Adv Pummel" description="Stronger than Pummel. Melee combat unit. With its powerful cutting lasers, the Hvy Pummel has an attack bonus vs. buildings; resistant to ranged attack. Upgrades: creation speed (Fortress); hit points, speed (Hvy Weapons Factory); attack (Research Center); more resistant to force users (Temple)"></Unit>
            </Unit>  
            <Tech faction="geo" name="Strengthened Frame" food="100" carbon="75" description="All Heavy Weapons Factory units gain 10% more hit points.">
                <Tech faction="geo" name="Reinforced Frame" carbon="450" nova="250" description="All Heavy Weapons Factory units gain +10% more hit points."/>
            </Tech>
            <Wrapper>
            <Tech faction="geo" name="Mechanics" food="340" carbon="300" description="All Heavy Weapons Factory units gain +20% more speed."/>
            <Tech faction="geo" name="Anti-Air Retrofit" carbon="400" ore="150" description="Anti-Air Mobiles, Flak Batteries and Anti-Air Destroyers gain +4 line of sight and range, as well as +10 damage against Air Cruisers. Additionally, Flak Battery gains +10 attack and Anti-Air Battery gains +2 attack."/>
            <Tech faction="geo" name="Geonosian Engineers" food="450" nova="500" unitname="Geonosian Specific" description="Increases Heavy Weapons efficiency by increasing speed by +10% and lowering reload rates (except Pummels) by 1/4 second per shot." unique/>
            <Tech faction="geo" name="Hailfire Rocket Pods" carbon="250" nova="300" unitname="Geonosian Specific" description="Anti-Air Mobiles fire 2 additional missiles per shot." unique/>
            </Wrapper>
          </Building>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

const SpaceportTechTree = () => {
  return(
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Building faction="geo" name="Spaceport" carbon="180" hp="2000" attack="0" armor="2" duraarmor="8" range="0" description="Used to buy and sell resources, trade with other players, and research trade improvements. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
          <Unit faction="geo" name="Cargo Hovercraft" carbon="75" hp="50" attack="0" armor="0" duraarmor="0" range="0" unitname="Geonosian Cargo Trader" description="Used to trade with other players by land and sea. Carries goods from your Spaceport to another player's Spaceport and brings back nova crystals. The farther the Spaceport, the higher your profit. To trade, click the Cargo Hovercraft, then right-click an allied or neutral Spaceport. Upgrades: more resistant to force users (Temple).">
          </Unit>
          <Tech faction="geo" name="Hutt Endorsement" food="150" nova="50" description="Reduces the fee for tributes to 20%.">
            <Tech faction="geo" name="Galactic Banking" food="200" nova="100" description="There is no longer a tribute fee.">
              <Wrapper>
              <Tech faction="geo" name="Galactic Trade Comm" food="300" nova="200" description="Resource trading fee is reduced to 15%.">
              </Tech>
              </Wrapper>
            </Tech>
          </Tech>
          <Tech faction="geo" name="Holonet Tranceiver" nova="100" description="You and your allies share the same line of sight (you see what they see and vice versa)."></Tech>
          <Wrapper>
          <Unit faction="geo" name="Cargo Freighter" carbon="75" nova="25" hp="80" attack="0" armor="0" duraarmor="0" range="0" description="Used to trade with other players by air. Carries goods from your Spaceport to another player's Spaceport and brings back nova crystals. The farther the Spaceport, the higher your profit. To trade, click the Cargo Freighter, then right-click an allied or neutral Spaceport. Upgrades: more resistant to force users (Temple)."></Unit>
          </Wrapper>
        </Building>
      </Wrapper>
    </Wrapper>
  );
}

const PowerCoreTechTree = () => {
  return(
    <Building faction="geo" name="Power Core" carbon="200" hp="250" armor="1" duraarmor="7" range="0" description="Powers buildings within its range. Research and Build Speed at Buildings out of range of a Power Core are at 25% efficiency. Shield Generators will not function without a Power Core. Used to build Power Droids and research power upgrades. Upgrades: line of sight (Command Center);hit points, armor (Research Center); more resistant to force users (Temple)">
      <Wrapper>
        <Unit faction="geo" name="Power Droid" carbon="65" hp="50" attack="0" armor="1" duraarmor="7" range="1" unitname="Power Droid" description="Non-combat unit. A mobile power source for buildings. Upgrades: hit points, speed (Power Core); more resistant to force users (Temple)" ></Unit>
      </Wrapper>
      <Wrapper>
      <Wrapper><Wrapper>
        <Tech faction="geo" name="Strengthened Assembly" carbon="150" ore="50" description="Increases the hit points of a Power Core by +200.  Also increases the hit points of a Power Droid by +40."></Tech></Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <Wrapper>
            <Wrapper>
              <Wrapper>
                <Tech faction="geo" name="Efficient Buildings" nova="350" description="All buildings use a new superconducting technology to produce units and research +10% faster. Also, Power Droids are enhanced with an increase of +10% speed."></Tech>
                <Tech faction="geo" name="Power Core Shielding" ore="125" description="Power Cores can generate self-shielding."></Tech>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      
    </Building>
  );
}

const WonderTechTree = () => {
  return (
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Wrapper connector={false}>
            <Wrapper connector={false}>
              <Wrapper connector={false}>
                <Building faction="geo" name="Monument" carbon="3000" nova="3000" ore="3000" hp="3000" attack="0" armor="3" duraarmor="10" range="0" description="Building a Monument demonstrates the superiority of your civilization. Constructing a Monument that stands for a certain period of time is one way to win the Standard game. Cannot be converted by enemy force users."/>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}
const CarbonTechTree = () => {
  return (
    <Building type="building" faction="geo" name="Carbon Proc Ctr" carbon="100" hp="1000" attack="0" armor="1" duraarmor="7" range="0" description="Used to deposit ore and research ore mining improvements. Build near ore sources to gather these resources faster.  Ore and its derivative DuraSteel, are integral to the creation of defensive structures: Fortresses, Walls, Turrets and Shield Generators.">
      <Wrapper>
        <Tech faction="geo" name="Handheld Carbon Extr" food="100" carbon="50" description="Carbon Collectors work 20% faster.">
          <Wrapper>
            <Tech faction="geo" name="Enhanced Carbon Extr" food="150" carbon="100" description="Carbon Collectors work 20% faster.">
              <Wrapper>
                <Tech faction="geo" name="Hvy Duty Carbon Extr" food="300" carbon="200" description="Carbon Collectors work 10% faster."/>
              </Wrapper>
            </Tech>
          </Wrapper>
        </Tech>
      </Wrapper>
    </Building>
  );
}

const AnimalNurseryTechTree = () => {
  return (
    <Building type="building" name="Animal Nursery" faction="geo" carbon="100" hp="600" attack="0" armor="1" duraarmor="7" range="0" unitname="Necessary for the Mounted Trooper, a unit produced in the Troop Center" description="Provides a location to garrison herded animals, as well as improvement of nurturing technologies.  Garrisoned food animals generate food. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
      <Wrapper>
        <Tech faction="geo" name="Stimulants" food="75" carbon="75" description="Animals in the Nursery produce food 17% faster than base rate.">
          <Wrapper>
            <Tech faction="geo" name="Genetics" food="125" carbon="125" description="Animals in the Nursery produce food 33% faster than base rate.">
              <Wrapper>
                <Tech faction="geo" name="Cloning" food="250" carbon="250" description="Animals in the Nursery produce food 50% faster than base rate." />
              </Wrapper>
            </Tech>
          </Wrapper>
        </Tech>
        <Wrapper>
          <Wrapper>
            <Wrapper>
              <Unit faction="geo" name="Nexu" food="75" hp="90" attack="2" armor="1" duraarmor="2" range="0" description="Melee combat unit. Effective against Workers, a controllable predator. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, line of sight, speed (Troop Center); more resistant to force users (Temple)" unique/>
              <Unit faction="geo" name="Reek" food="125" hp="120" attack="1" armor="2" duraarmor="2" range="0" description="Melee combat unit. Effective against Buildings, a controllable predator. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, line of sight, speed (Troop Center); more resistant to force users (Temple)" unique/>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper>
            <Wrapper>
              <Wrapper>
                <Unit faction="geo" name="Acklay" food="175" hp="150" attack="2" armor="3" duraarmor="4" range="0" description="Melee combat unit. Effective against Troopers, a controllable predator. Upgrades: creation speed (Fortress); armor, attack (War Center); build speed, line of sight, speed (Troop Center); more resistant to force users (Temple)" unique/>
                <Tech faction="geo" name="Beast Training" food="75" unitname="Geonosian Specific" description="Mounted Troopers and Beasts gain +15% HP." unique/>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Building>
  );
}

const FoodProcTechTree = () => {
  return (
    <Building type="building" faction="geo" name="Food Proc Ctr" carbon="100" hp="1000" attack="0" armor="1" duraarmor="7" range="0" unitname="Necessary for Farm" description="Used to deposit food and research farming improvements. Build near a muja fruit bush or other source of food to gather food faster.  Food and its derivative BioPlasma, are very important for the creation of Troopers, Mechs and Aircraft. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
      <Wrapper>
        <Tech faction="geo" name="Irrigation" food="75" carbon="75" description="Farms produce +75 food.">
          <Wrapper>
            <Tech faction="geo" name="Harvesting Program" food="125" carbon="125" description="Farms now yield +125 food. Worker carry capacity gains +1.">
              <Wrapper>
                <Tech faction="geo" name="Adv Harvest Prgm" food="250" carbon="250" description="Farms produce +175 food."/>
              </Wrapper>
            </Tech>
          </Wrapper>
        </Tech>
        <Building  name="Farm" faction="geo" carbon="50" unitname="Food Processing Center is necessary for a farm" description="A renewable source of food. Provides a limited amount of food before it collapses and must be rebuilt. Only one worker can work a Farm. Cannot be converted by enemy force users. You can farm abandoned enemy Farms. Upgrades: food (Food Processing Center); line of sight (Command Center); hit points (Research Center)."></Building>
      </Wrapper>
    </Building>
  );
}

const NovaTechTree = () => {
  return (
    <Building type="building" faction="geo" name="Nova Crystal Proc Ctr" carbon="100" hp="1000" attack="0" armor="1" duraarmor="7" range="0" description="Used to deposit nova crystals and research nova mining improvements. Build near nova sources to gather these resources faster.  Nova crystals are critical to the creation of Jedi, Ships, Air, and Mechs, as well as advanced unit upgrades. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
      <Wrapper>
        <Tech faction="geo" faction="nova"  name="Beamdrill Mining" food="100" carbon="50" description="Nova crystal carriers work 15% faster.">
          <Wrapper>
            <Tech faction="geo" faction="nova"  name="Hvy Duty Beamdrill" food="200" carbon="100" description="Nova crystal carriers work 15% faster.">
            </Tech>
          </Wrapper>
        </Tech>
      </Wrapper>
    </Building>
  );
}


const OreTechTree = () => {
  return (
    <Building type="building" faction="geo" name="Ore Proc Ctr" carbon="100" hp="1000" attack="0" armor="1" duraarmor="7" range="0" description="Used to deposit ore and research ore mining improvements. Build near ore sources to gather these resources faster.  Ore and its derivative DuraSteel, are integral to the creation of defensive structures: Fortresses, Walls, Turrets and Shield Generators.">
      <Wrapper>
        <Tech faction="geo"  faction="ore" name="Beamdrill Mining" food="100" carbon="75" description="Ore Collectors work 15% faster.">
          <Wrapper>
            <Tech faction="geo" faction="ore"  name="Hvy Duty Beamdrill" food="200" carbon="150" description="Ore Collectors work 15% faster.">
            </Tech>
          </Wrapper>
        </Tech>
      </Wrapper>
    </Building>
  );
}

const TurretTechTree = () => {
  return (
    <Wrapper connector={false}>
      <Wrapper connector={false}>
      <Building faction="geo" type="building" name="Light Turret" carbon="25" ore="125" hp="1250" attack="5" armor="2" duraarmor="8" range="7" description="Basic base defense. Automatically attacks enemy units and buildings within range. Units can garrison inside for protection and additional attack strength. Upgrades: line of sight (Command Center); attack, range, line of sight (War Center); hit points, armor, attack, range, to Med Turret 100C, 250O (Research Center)">
          <Wrapper>
          <Building faction="geo" type="building" name="Medium Turret" carbon="25" ore="125" hp="1500" attack="6" armor="2" duraarmor="8" range="8" description="Stronger than Light Turret, with enhanced offensive ability. Automatically attacks enemy units and buildings within range. Units can garrison inside for protection and additional attack strength. Upgrades: line of sight (Command Center); attack, range, line of sight (War Center); hit points, armor, attack, range, to Adv Turret 200C, 500O (Research Center)">
          <Wrapper>
            <Building faction="geo" type="building" name="Advanced Turret" carbon="25" ore="125" hp="2000" attack="7" armor="3" duraarmor="9" range="9" description="Stronger than Medium Turret, with enhanced offensive ability. Automatically attacks enemy units and buildings within range. Units can garrison inside for protection and additional attack strength. Upgrades: line of sight (Command Center); attack, range, line of sight (War Center); hit points, armor, attack, range (Research Center)">
            </Building>
            </Wrapper>
          </Building>
          </Wrapper>
      </Building>
      </Wrapper>
      </Wrapper>
  );
}

const AntiAirTurretTechTree = () => {
  return (
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
         <Wrapper connector={false}>
      <Building faction="geo" type="building" name="Anti-Air Turret" carbon="20" ore="150" hp="1250" attack="20" armor="3" duraarmor="9" range="10" description="Powerful anti-air attack with extensive line of sight. Upgrades: line of sight (Command Center); attack, range, line of sight (War Center); hit points, armor, range, to Adv Anti-Air Turret 200C, 500O (Research Center)">
          <Wrapper>
          <Building faction="geo" type="building" name="Adv Anti-Air Turret" carbon="20" ore="150" hp="1500" attack="25" armor="4" duraarmor="9" range="11" description="Stronger than Anti-Air Turret. Powerful anti-air attack with extensive line of sight. Upgrades: line of sight (Command Center); attack, range, line of sight (War Center); hit points, armor, aircraft attack, range (Research Center).">
          </Building>
          </Wrapper>
      </Building>
      </Wrapper>
      </Wrapper>
      </Wrapper>
      </Wrapper>
  );
}

const WallTechTree = () => {
  return (
    <Wrapper connector={false}>
      <Wrapper connector={false}>
      <Building faction="geo" type="building" name="Medium Wall" ore="5" hp="1500" attack="0" armor="8" duraarmor="10" range="0" description="Stronger than Light Wall but more expensive. Slows down your enemies and protects your base. Upgrades: to Hvy Wall (Research Center);">
          <Wrapper>
          <Building faction="geo" type="building" name="Hvy Wall" ore="5" hp="3000" attack="0" armor="12" duraarmor="12" range="0" description="Difficult to puncture without heavy weapons, Stronger than Medium Wall. Slows down your enemies and protects your base. Upgrades: to Shield Wall (Research Center);">
          <Wrapper>
            <Building faction="geo" type="building" name="Shield Wall" ore="5" hp="3000" attack="0" armor="12" duraarmor="12" range="0" description="Self-regenerative defense structure.  Difficult to puncture without heavy weapons, Stronger than Hvy Wall. Slows down your enemies and protects your base.">
            </Building>
            </Wrapper>
          </Building>
          </Wrapper>
      </Building>
      </Wrapper>
      </Wrapper>
  );
}

const ShieldGenTechTree = () => {
  return(
    <Wrapper connector={false}>
      <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Wrapper connector={false}>
          <Building faction="geo" name="Shield Generator" ore="250" hp="1500" attack="0" armor="3" duraarmor="9" range="0" description="Grants shields to any units or buildings within range of its effect. A shield regenerates automatically when diminished and has a maximum value equal to the hit points of the unit or building. Needs a Power Core within range to function. Used to research Shield Generator upgrades. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)">
            <Tech faction="geo" name="Strengthened Superstructure" carbon="300" ore="100" description="Increases the hit points of a fixed Shield Generator by +250."></Tech>
            <Tech faction="geo" name="Supercondctg Shields" nova="300" ore="100" description="Decreases recharge time and increases drop off time for shield activation/deactivation within range of a shield generator."></Tech>
          </Building>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

const GeoTechTree = () => {

    return(
      <Fragment>
        <TroopCenterTechTree />   
        <MechFactoryTechTree />
        <JediTempleTechTree />
        <ShipyardTechTree />
        <AirBaseTechTree />
        <HvyWeaponsTechTree />
        <WarcenterTechTree />
        <ResearchCenterTechTree />
        <FortressTechTree />
        <CommandCenterTechTree />
        <SpaceportTechTree />
        <PowerCoreTechTree/>
        <CarbonTechTree/>
        <FoodProcTechTree/>
        <AnimalNurseryTechTree/>
        <NovaTechTree/>
        <OreTechTree/>
        <TurretTechTree/>
        <AntiAirTurretTechTree/>
        <ShieldGenTechTree/>
        <WallTechTree/>
        
        <Building faction="geo" name="Light Wall" carbon="2" hp="250" attack="0" armor="2" duraarmor="6" range="0" description="Flimsy wall that is cheap and quick to construct.  Provides a warning against enemy attack."/>
        <Building faction="geo" name="Sentry Post" carbon="20" ore="10" hp="500" attack="0" armor="0" duraarmor="0" range="0" description="A fixed observation structure that provides advance warning of nearby enemy activity. Unlike other laser turrets, Sentry Posts are excellent for detecting stealth units, like Jedi and off-shore submarines.  Sentry Posts do not attack or let you garrison units inside. Upgrades: line of sight (Command Center); line of sight (War Center);"/>
        <Wrapper connector={false}>
        <Wrapper connector={false}>
          <Building faction="geo" name="Gate" ore="30" hp="2750" attack="0" armor="10" duraarmor="10" range="0" description="Can be built into existing walls. You or your allies can manually open and close this Gate. Upgrades: line of sight (Command Center); hit points, armor (Research Center)."></Building>
        </Wrapper>
        </Wrapper>
        
        <Building faction="geo" name="Prefab Shelter" carbon="25" hp="800" attack="0" armor="1" duraarmor="7" range="0" description="Each Prefab Shelter supports 5 units (workers, military units, ships, aircraft, Cargo Hovercrafts). The Galactic Republic Prefab Shelter supports 6 units. Your current/supportable population is shown at the top of the game screen. Upgrades: line of sight (Command Center); hit points, armor (Research Center); more resistant to force users (Temple)"/>
        <WonderTechTree />
        
  
        <div className="age feudal-age"></div>
        <div className="age castle-age"></div>
        <div className="age imperial-age"></div>
      </Fragment>
    )
  }

  export default GeoTechTree;