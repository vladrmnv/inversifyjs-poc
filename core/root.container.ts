import { Container, ContainerModule } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { flattenDeep, isEmpty, uniqBy } from 'lodash';

import { IModuleConstructor, IModule } from './module';
import { ReportingModule } from '../reporting/reporting.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { AccountingModule } from '../accounting/accounting.module';

export function initDiContainer() {
  const container = new Container();
  const imports: ContainerModule[] = parseImports(
    ReportingModule,
    NotificationsModule
  );
  container.load(...imports);
  let logger = makeLoggerMiddleware();
  container.applyMiddleware(logger);

  return container;
}

function parseImports(...moduleConstructors: IModuleConstructor[]) {
  const moduleLoaders = uniqBy(unwrapModules(moduleConstructors), 'name');
  const modules = moduleLoaders.map(Module => new Module().load());

  return modules;
}

function unwrapModules(modules: IModuleConstructor[]) {
  const results: IModuleConstructor[] = [];
  modules.forEach(Module => {
    results.push(Module);
    const currentModule = new Module();
    if (!isEmpty(currentModule.imports)) {
      const dependencies = unwrapModules(currentModule.imports);
      results.push(...dependencies);
    }
  });
  return results;
}

[ReportingModule, NotificationsModule];
[ReportingModule, [AccountingModule], NotificationsModule];
