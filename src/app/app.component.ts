import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes reactive';
  Fruits = ['Apple', ' Orange', ' Grapes', ' Mango', ' Kiwi', ' Pear'];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
}
