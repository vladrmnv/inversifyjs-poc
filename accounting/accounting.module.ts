import { ContainerModule } from 'inversify';
import { AccountsService, IAccountsService } from './accounts.service';
import { IModule, IModuleConstructor, NwModule } from '../core/module';

import { MoneyModule } from '../money/money.module';

export const TYPES = {
  AccountsService: Symbol.for('AccountsService'),
};

@NwModule({
  imports: [MoneyModule],
  providers: bind => {
    bind<IAccountsService>(TYPES.AccountsService).to(AccountsService);
  },
})
export class AccountingModule {
  load() {}
}
