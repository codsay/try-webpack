import { ShopService } from '../service/shop.service';
var template = require('./home.html');

export class HomeComponent {
  data: string;

  constructor() {
    this.data = new ShopService().getData();
    console.log(template);
  }
}
