import React from 'react';
import ReactTooltip from 'react-tooltip';

const styles = theme => ({
  overrideMe: {
    width: "100px",
    "word-break": "break-all",
    "overflow-wrap": "break-word",
    display: "block"
  }
});

const Button = (props) => {
  let createMessage = ""
  if (props.type == 'tech') {
    createMessage = "Research"
  }
  if (props.type == 'building') {
    createMessage = "Build"
  }
  if (props.type == 'unit') {
    createMessage = "Create"
  }
  let isResearchable = ''
  if (props.type == "notResearchable") {
    isResearchable = 'icon-notResearchable'
  }

  return (
    <button className={`btn btn-${props.type}`} onClick={props.onClick}>
      <ReactTooltip className="mw-20" id={`${props.name}-toolTip`} multiline={true} place="top" autoCapitalize={false}>
        {createMessage} <b>{props.name}</b><br />
        <b>{props.unitname}</b> {props.description}<br />
        <br />
        <b>{props.hp} {props.attack} {props.armor} {props.duraarmor} {props.range}</b>
        <hr />
        <img src='https://res.cloudinary.com/swbgtechtree/image/upload/v1630680291/carbon.png' width="24" height="24"></img> {props.carbon} <img src='https://res.cloudinary.com/swbgtechtree/image/upload/v1630680291/food.png' width="24" height="24"></img> {props.food} <img src='https://res.cloudinary.com/swbgtechtree/image/upload/v1630680291/nova.png' width="24" height="24"></img> {props.nova} <img src='https://res.cloudinary.com/swbgtechtree/image/upload/v1630680291/ore.png' width="24" height="24"></img> {props.ore}
      </ReactTooltip>
      <div className={`icon icon-${props.faction}-${props.name}`} data-tip data-for={`${props.name}-toolTip`} />
      {props.name}
    </button>
  );
}

export default Button;
