import { ContainerModule } from 'inversify';

import { IModuleConstructor, IModule } from '../core/module';
import { ReportingModule } from '../reporting/reporting.module';
import { NotificationsModule } from '../notifications/notifications.module';

export class AppModule implements IModule {
  public readonly imports: IModuleConstructor[] = [
    ReportingModule,
    NotificationsModule,
  ];

  load() {
    return new ContainerModule(bind => {});
  }
}
