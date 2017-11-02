import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
      title:   string = 'Welcome to Angular';
      content: string = 'A new world is waiting for you!';
      image: string = 'http://i0.kym-cdn.com/entries/icons/original/000/002/203/20533_cooldog.jpg';
  }
