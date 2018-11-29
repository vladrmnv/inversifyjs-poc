


import { Component, Binding } from '@loopback/core';
import { AccountsService } from './accounts.service';
import { MoneyService } from '../money/money.service';

export class AccountingComponent implements Component {
  bindings: Binding[];
  
  constructor() {
    this.bindings = [
      Binding.bind(AccountsService.name).toClass(AccountsService),
      Binding.bind(MoneyService.name).toClass(MoneyService)
    ];
  }
}
