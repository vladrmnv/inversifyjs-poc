import { IDashboardInfoDto } from './dashboard-data';

export interface IDashboardService {
  getInfo(): IDashboardInfoDto;
}

export class DashboardService implements IDashboardService {
  getInfo(): IDashboardInfoDto {
    return {
      newAccounts: 'some accounts',
    };
  }
}
