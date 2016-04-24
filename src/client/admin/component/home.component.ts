import { AdminService } from '../service/admin.service';

export class HomeComponent {
  data: string;

  constructor() {
    this.data = new AdminService().getData();
  }
}
