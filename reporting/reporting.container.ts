import { Container } from 'inversify';
import { ReportingService } from './reporting.service';
import { accountingContainer } from '../accounting/accounting.container';

export const TYPES = {
  ReportingService: Symbol('ReportingService'),
};

export const reportingContainer = new Container();
reportingContainer.bind(TYPES.ReportingService).to(ReportingService);

reportingContainer.parent = accountingContainer;


