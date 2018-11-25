import { Container, ContainerModule } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';

import { ModuleLoader } from '../core/module-loader';
import { AppModule } from './app.module';

export function loadDiContainer() {
  const container = new Container();
  const moduleLoader = new ModuleLoader();
  const imports: ContainerModule[] = moduleLoader.load(AppModule);
  container.load(...imports);
  let logger = makeLoggerMiddleware();
  container.applyMiddleware(logger);

  return container;
}
