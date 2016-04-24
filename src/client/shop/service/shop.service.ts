import { DateUtil, AuthService } from '../../common';

export class ShopService {
  getData() {
    if (new AuthService().isAuthenticated()) {
      return 'Shop - Home - Not authenticated ' + DateUtil.getDate();
    } else {
      return 'Shop - Home - Authenticated ' + DateUtil.getDate();
    }
  }
}
