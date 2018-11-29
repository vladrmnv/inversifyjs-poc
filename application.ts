import { Application } from '@loopback/core';
import { MoneyService } from './money/money.service';
import { AccountsService, IAccountsService } from './accounting/accounts.service';

export class DiPocApplication extends Application {
  constructor() {
    super();
    this.bind(MoneyService.name).toClass(MoneyService);
    this.bind(AccountsService.name).toClass(AccountsService);
  }
  async start() {
    const accountingService = await this.get<IAccountsService>(AccountsService.name);
    console.log(accountingService.getNewAccounts());
  }
}
