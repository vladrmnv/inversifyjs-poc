import { Container } from 'inversify';
import { AccountsService } from './accounts.service';


export const TYPES = {
  AccountsService: Symbol('AccountsService'),
};

export const accountingContainer = new Container();
accountingContainer.bind(TYPES.AccountsService).to(AccountsService);
