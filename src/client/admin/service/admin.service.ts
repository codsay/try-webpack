import { DateUtil, AuthService } from '../../common';

export class AdminService {
  getData() {
    if (new AuthService().isAuthenticated()) {
      return 'Admin - Home - Not authenticated ' + DateUtil.getDate();
    } else {
      return 'Admin - Home - Authenticated ' + DateUtil.getDate();
    }
  }
}
