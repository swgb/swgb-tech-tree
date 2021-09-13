import React from 'react';
import TreeNode from './TreeNode';

const Building = (props) => {
  let carbonCost = props.carbon ? props.carbon : "0"
  let foodCost = props.food ? props.food : "0"
  let novaCost = props.nova ? props.nova : "0"
  let oreCost = props.ore ? props.ore : "0"
  let hp = props.hp ? "HP: " + props.hp : ""
  let attack = props.attack ? "Attack: " + props.attack : ""
  let armor = props.armor ? "Armor: " + props.armor : ""
  let duraarmor = props.duraarmor ? "DuraArmor: " + props.duraarmor : ""
  let range = props.range ? "Range: " + props.range : ""
  return (
    <TreeNode type="building"
      name={props.name}
      faction={props.faction}
      carbon={carbonCost}
      food={foodCost}
      nova={novaCost}
      ore={oreCost}
      hp={hp}
      attack={attack}
      armor={armor}
      duraarmor={duraarmor}
      range={range}
      unitname={props.unitname}
      description={props.description}>
      {props.children}
    </TreeNode>
  );
}

export default Building;
