import { IMoneyService, MoneyService } from './money.service';
import { Component, ProviderMap, Binding } from '@loopback/core';

export class MoneyComponent implements Component {
  bindings: Binding[];
  constructor() {
    this.bindings = [Binding.bind(MoneyService.name).toClass(MoneyService)];
  }
}
