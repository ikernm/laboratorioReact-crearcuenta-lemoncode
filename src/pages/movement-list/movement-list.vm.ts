export interface AccountDetailVm {
  alias: string;
  iban: string;
  balance: string;
}

export interface MovementVm {
  date: Date;
  valueDate: Date;
  description: string;
  amount: string;
  balance: string;
}