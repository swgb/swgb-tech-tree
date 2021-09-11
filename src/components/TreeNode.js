import React, { Fragment, useState } from 'react';
import Button from './Button';

const TreeNode = (props) => {
  const [isExpanded, toggleExpanded] = useState(true);

  let classes = 'children';
  let hasChildren = React.Children.count(props.children) > 0;
  let hasChild = React.Children.count(props.children) === 1;

  if (hasChild) {
    classes = 'child'
  }

  return (
    <ul className={props.type}>
      <li className="node">
        <Button type={props.type} name={props.name} carbon={props.carbon} faction={props.faction}
        notResearchable={props.notResearchable}
        food={props.food} 
        nova={props.nova} 
        ore={props.ore} 
        hp={props.hp} 
        attack={props.attack} 
        armor={props.armor} 
        duraarmor={props.duraarmor} 
        range={props.range} 
        unitname={props.unitname}
        description={props.description} onClick={() => toggleExpanded(!isExpanded)}/>
      </li>
      {hasChildren &&
        <li className={classes}>
          {isExpanded &&
          <Fragment>{ props.children }</Fragment>
          }
        </li>
      }
      
    </ul>
  );
}

export default TreeNode;