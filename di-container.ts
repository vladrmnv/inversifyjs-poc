import { Container } from 'inversify';
import { AccountsService } from './accounting/accounts.service';
import { ReportingService } from './reporting/reporting.service';

export function createDiContainer() {
  const diContainer = new Container();

  diContainer.bind(AccountsService).toSelf();
  diContainer.bind(ReportingService).toSelf();

  return diContainer;
}
