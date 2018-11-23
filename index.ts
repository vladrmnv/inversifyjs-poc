import 'reflect-metadata';
import { createDiContainer } from './di-container';
import { ReportingService } from './reporting/reporting.service';

async function main() {
  const diContainer = createDiContainer();
  const reportingService = diContainer.resolve(ReportingService);
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
