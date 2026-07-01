import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): viewModel.AccountDetailVm => ({
  alias: account.name,
  iban: account.iban,
  balance: `${account.balance} €`,
});

export const mapMovementsFromApiToVm = (
  movements: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movements.map((movement) => ({
    date: new Date(movement.transaction),
    valueDate: new Date(movement.realTransaction),
    description: movement.description,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
  }));