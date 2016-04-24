import { AuthService } from '../service/auth.service';

export class AuthComponent {

  data: string;

  constructor() {
    this.data = new AuthService().getData();
  }
}
