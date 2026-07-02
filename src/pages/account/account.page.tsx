import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "./account.vm";
import { useNavigate } from "react-router-dom";
import { saveAccount } from "./api";
import { mapAccountFromVmToApi } from "./account.mapper";

export const AccountPage: React.FC = () => {
  const [account, setAccount] = React.useState<AccountVm>({
    type: "",
    alias: "",
  });

  const navigate = useNavigate();

  const handleGuardar = () => {
    if (account.type === "") {
      alert("Debes elegir un tipo de cuenta");
      return;
    }

    if (account.alias === "") {
      alert("Debes introducir un alias");
      return;
    }

    saveAccount(mapAccountFromVmToApi(account)).then(() => {
      navigate("/account-list");
    });
  };

  return (
    <AppLayout>
      <div>
        <h1>Cuenta Bancaria</h1>
        {<select
            value={account.type}
            onChange={(e) => setAccount({ ...account, type: e.target.value })}
          >
            <option value="">Seleccionar</option>
            <option value="1">Cuenta corriente</option>
            <option value="2">Ahorro</option>
          </select>}
        {<input
            value={account.alias}
            onChange={(e) => setAccount({ ...account, alias: e.target.value })}
          />}
        {<button onClick={handleGuardar}>Guardar</button>}
      </div>
    </AppLayout>
  );
};