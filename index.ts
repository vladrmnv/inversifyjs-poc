import 'reflect-metadata';
import { loadDiContainer } from './app/root.container';
import {
  IReportingService,
  ReportingService,
} from './reporting/reporting.service';
import {
  INotificationsService,
  NotificationsService,
} from './notifications/notifications.service';
import { IAccountsService } from './accounting/accounts.service';
import { DashboardService, IDashboardService } from './dashboard/dashboard.service';

async function main() {
  const rootContainer = loadDiContainer();
  const dashboardServce = rootContainer.get<IDashboardService>(DashboardService);
  const result = dashboardServce.getInfo();
  console.log(result);
  // const reportingService = rootContainer.get<IReportingService>(
  //   ReportingService
  // );
  // const report = reportingService.createAccountingReport();
  // console.log('Report:', report);

  // const notificationService = rootContainer.get<INotificationsService>(
  //   NotificationsService
  // );
  // const updates = notificationService.getUpdates();
  // console.log('Updates:', updates);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
