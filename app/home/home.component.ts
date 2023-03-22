import { Component } from '@angular/core';

import { cheapflights } from '../cheapflights';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //   The code products = [...products] is using the spread syntax to create a new array products that contains all the items from the original products array. This is a common way to create a new array with the same contents as an existing array.

  // One important thing to note is that this code creates a new array that is a copy of the original products array. This means that changes made to the new products array will not affect the original products array, and vice versa.

  cheapflights = [...cheapflights];

  share() {
    window.alert('The flight details has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when this flight goes on sale.');
  }
}
