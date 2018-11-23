import { Container, ContainerModule } from 'inversify';
import { ReportingService } from './reporting.service';
import { accountingContainer } from '../accounting/accounting.container';

export const TYPES = {
  ReportingService: Symbol('ReportingService'),
};

const container = new Container();
container.bind(TYPES.ReportingService).to(ReportingService);

export const reportingContainer = Container.merge(
  container,
  accountingContainer
);
