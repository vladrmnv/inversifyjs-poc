import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { ReportingModule } from './reporting/reporting.container';
import { AccountingModule } from './accounting/accounting.container';

export function initDiContainer() {
  const container = new Container();
  container.load(AccountingModule);
  container.load(ReportingModule);
  let logger = makeLoggerMiddleware();
  container.applyMiddleware(logger);

  return container;
}
