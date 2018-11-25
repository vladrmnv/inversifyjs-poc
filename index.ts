import 'reflect-metadata';
import { loadDiContainer } from './app/root.container';
import { ReportingService, IReportingService } from './reporting/reporting.service';
import { TYPES } from './reporting/reporting.module';

async function main() {
  const rootContainer = loadDiContainer();
  const reportingService = rootContainer.get<IReportingService>(TYPES.ReportingService);
  const report = reportingService.createAccountingReport();
  console.log(report);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
