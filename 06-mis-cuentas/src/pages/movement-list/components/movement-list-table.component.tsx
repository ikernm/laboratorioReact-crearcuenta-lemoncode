import React from "react";
import { MovementVm } from "../movement-list.vm";
import { MovementListItemComponent } from "./movement-list-item.component";
import classes from "./movement-list-table.component.module.css";

interface Props {
  movements: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movements } = props;

  return (
    <div>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
            <span className={classes.headerCell}>Fecha</span>
            <span className={classes.headerCell}>Fecha valor</span>
            <span className={classes.headerCell}>Descripción</span>
            <span className={classes.headerCell}>Importe</span>
            <span className={classes.headerCell}>Saldo disponible</span>
        </div>
      </div>
        {movements.map((movement, index) => (
            <MovementListItemComponent key={index} movement={movement} />
        ))}
      </div>
  );
};