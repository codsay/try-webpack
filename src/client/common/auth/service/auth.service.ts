import { DateUtil } from '../../util';

export class AuthService {
  getData() {
    return 'Authentication date: ' + DateUtil.getDate();
  }

  isAuthenticated(): boolean {
    return true;
  }
}
