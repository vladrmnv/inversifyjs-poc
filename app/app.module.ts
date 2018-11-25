import { ContainerModule } from 'inversify';

import { IModuleConstructor, IModule, NwModule } from '../core/module';
import { ReportingModule } from '../reporting/reporting.module';
import { NotificationsModule } from '../notifications/notifications.module';

@NwModule({
  imports: [ReportingModule, NotificationsModule],
})
export class AppModule implements IModule {
  load() {}
}
