import { Component } from '@angular/core';

import { Destination } from '@sap-cloud-sdk/core';
import { I_Currency } from './odata-client/sepmra-prod-man-service/I_Currency';

const myDest: Destination = {
  url: 'https://sesame2-ghd.epfl.ch/',
  // username: 'myUser',
  // password: 'myPassowrd'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sepmApp';

  constructor() {}

  async doGetAll() {
    const result = await I_Currency.requestBuilder().getAll().execute(myDest);
    console.log(result);
  }
}
