import 'reflect-metadata';
import { loadDiContainer } from './app/root.container';
import { IReportingService } from './reporting/reporting.service';
import { TYPES as ReportingTypes } from './reporting/reporting.module';
import { TYPES as NotificationsTypes } from './notifications/notifications.module';
import { INotificationsService } from './notifications/notifications.service';

async function main() {
  const rootContainer = loadDiContainer();
  const reportingService = rootContainer.get<IReportingService>(ReportingTypes.ReportingService);
  const report = reportingService.createAccountingReport();
  console.log('Report:', report);

  const notificationService = rootContainer.get<INotificationsService>(NotificationsTypes.NotificationsService);
  const updates = notificationService.getUpdates();
  console.log('Updates:', updates);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
