import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { reportingContainer } from './reporting/reporting.container';


export function createDiContainer() {
  const diContainer = new Container();
  let logger = makeLoggerMiddleware();
  diContainer.applyMiddleware(logger);

  diContainer.parent = reportingContainer;

  return diContainer;
}
