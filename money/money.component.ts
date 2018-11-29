import { MoneyService } from './money.service';
import { Component, Binding } from '@loopback/core';

export class MoneyComponent implements Component {
  bindings: Binding[];
  constructor() {
    this.bindings = [Binding.bind(MoneyService.name).toClass(MoneyService)];
  }
}
