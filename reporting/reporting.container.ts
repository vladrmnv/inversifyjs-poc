import { ContainerModule } from 'inversify';
import { ReportingService, IReportingService } from './reporting.service';

export const TYPES = {
  ReportingService: Symbol('ReportingService'),
};

export const ReportingModule = new ContainerModule(bind => {
  bind<IReportingService>(TYPES.ReportingService).to(ReportingService);
});
