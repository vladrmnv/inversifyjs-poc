import { Container } from 'inversify';
import { AccountsService } from './accounts.service';

export const diContainer = new Container();

diContainer.bind(AccountsService).to