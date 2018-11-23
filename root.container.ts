import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { reportingContainer } from './reporting/reporting.container';

export function createDiContainer() {
  const container = new Container();
  let logger = makeLoggerMiddleware();
  container.applyMiddleware(logger);

  const rootContainer = Container.merge(container, reportingContainer);

  return rootContainer;
}
