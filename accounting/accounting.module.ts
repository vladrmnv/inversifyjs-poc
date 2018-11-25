import { ContainerModule, Container, interfaces } from 'inversify';
import { AccountsService, IAccountsService } from './accounts.service';
import { IModule, IModuleConstructor } from '../core/module';

export const TYPES = {
  AccountsService: Symbol.for('AccountsService'),
};

export class AccountingModule implements IModule {
  imports: IModuleConstructor[];
  load() {
    return new ContainerModule(bind => {
      bind<IAccountsService>(TYPES.AccountsService).to(AccountsService);
    });
  }
}
