import { ContainerModule } from 'inversify';

import { IModuleConstructor, IModule, NwModule } from '../core/module';
import { ReportingModule } from '../reporting/reporting.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NwModule({
  imports: [ReportingModule, NotificationsModule, DashboardModule],
})
export class AppModule {
  load() {}
}
