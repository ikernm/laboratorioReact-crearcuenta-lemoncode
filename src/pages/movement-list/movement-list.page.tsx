import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { AccountDetailVm, MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { getAccount, getMovements } from "./api";
import { mapAccountFromApiToVm, mapMovementsFromApiToVm } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = React.useState<AccountDetailVm>({
    alias: "",
    iban: "",
    balance: "",
  });
  const [movements, setMovements] = React.useState<MovementVm[]>([]);

  React.useEffect(() => {
    if (!id) return;
    getAccount(id).then((result) => setAccount(mapAccountFromApiToVm(result)));
    getMovements(id).then((result) =>
      setMovements(mapMovementsFromApiToVm(result))
    );
  }, [id]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.balanceInfo}>
            <span>SALDO DISPONIBLE</span>
            <span className={classes.balanceAmount}>{account.balance}</span>
          </div>
        </div>
        <div className={classes.accountInfo}>
          <span>Alias: {account.alias}</span>
          <span>IBAN: {account.iban}</span>
        </div>
        <MovementListTableComponent movements={movements} />
      </div>
    </AppLayout>
  );
};