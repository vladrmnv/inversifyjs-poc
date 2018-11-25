import { ContainerModule } from 'inversify';
import { AccountsService, IAccountsService } from './accounts.service';
import { IModule, IModuleConstructor } from '../core/module';

import { MoneyModule } from '../money/money.module';

export const TYPES = {
  AccountsService: Symbol.for('AccountsService'),
};

export class AccountingModule implements IModule {
  imports: IModuleConstructor[] = [MoneyModule];
  load() {
    return new ContainerModule(bind => {
      bind<IAccountsService>(TYPES.AccountsService).to(AccountsService);
    });
  }
}
