import { Application } from '@loopback/core';
import { AccountsService, IAccountsService } from './accounting/accounts.service';
import { MoneyComponent } from './money/money.component';
import { AccountingComponent } from './accounting/accounting.component';

export class DiPocApplication extends Application {
  constructor() {
    super();
    this.component(MoneyComponent);
    this.component(AccountingComponent);
  }
  async start() {
    const accountingService = await this.get<IAccountsService>(AccountsService.name);
    console.log(accountingService.getNewAccounts());
  }
}
