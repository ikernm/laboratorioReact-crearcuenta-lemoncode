import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";


interface Props {
  movement: MovementVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movement } = props;
  const isNegative = movement.amount.startsWith("-");

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>{movement.date.toLocaleDateString()}</span>
      <span className={classes.dataCell}>{movement.valueDate.toLocaleDateString()}</span>
      <span className={classes.dataCell}>{movement.description}</span>
      <span className={`${classes.dataCell} ${isNegative ? classes.negative : ""}`}>{movement.amount}</span>
      <span className={classes.dataCell}>{movement.balance}</span>
    </div>
  );
};