

import { MoneyComponent } from '../money/money.component';
import { Component, Binding } from '@loopback/core';
import { AccountsService } from './accounts.service';

export class AccountingComponent implements Component {
  bindings: Binding[];
  constructor() {
    this.bindings = [Binding.bind(AccountsService.name).toClass(AccountsService)];
  }
}
