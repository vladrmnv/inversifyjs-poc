import { ContainerModule } from 'inversify';
import { AccountsService, IAccountsService } from './accounts.service';

export const TYPES = {
  AccountsService: Symbol('AccountsService'),
};

export const AccountingModule = new ContainerModule(bind => {
  bind<IAccountsService>(TYPES.AccountsService).to(AccountsService);
});
