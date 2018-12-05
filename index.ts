import 'reflect-metadata';
import { loadDiContainer } from './app/root.container';
import {
  IReportingService,
  ReportingService,
} from './reporting/reporting.service';

async function main() {
  const rootContainer = loadDiContainer();
  const reportingService = rootContainer.get<IReportingService>(
    ReportingService
  );
  const report = reportingService.createAccountingReport();
  console.log('Report:', report);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
