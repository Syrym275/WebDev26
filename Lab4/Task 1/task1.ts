import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common'; //Optimizing images
import {Routes} from '@angular/router'; // Routes
import { RouterLink, RouterOutlet } from '@angular/router'; // Use RouterLink for Navigation
import {FormsModule} from '@angular/forms';// forms 
import { ReactiveFormsModule } from '@angular/forms'; // Reactive Forms
import {ReactiveFormsModule, Validators} from '@angular/forms'; // Validating forms
import {UpperCasePipe} from '@angular/common'; // Pipes
import {LowerCasePipe} from '@angular/common';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';// formatting with pipes
import {Pipe, PipeTransform} from '@angular/core'; // custom pipe


export const routes: Routes = [];

@Pipe({
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    return `⭐️ ${value} ⭐️`;
  }
}

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
  users=
  [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
];

  occupation = input<string>();

  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {}
}

@defer {
  <comments />
} @placeholder {
  <p>Future comments</p>
}

@Component({
  selector: 'app-root',
  template: ` Hello 
  Hello {{ city }}

  <app-user />

  @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
    }

  @for (user of users; track user.id) {
        <p>{{ user.name }}</p>
    }

    <img alt="photo" [src]="imageURL" />

    <button (click)="greet()">

    <app-user occupation="Angular Developer"></app-user
    <p>The user's occupation is {{occupation()}}</p>

    <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
    <img ngSrc="www.example.com/image.png" fill />

    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />

    <a routerLink="/">Home</a>
    <a routerLink="/user">User</a>


    <label for="framework">
  Favorite Framework:
  <input id="framework" type="text" /> <!-- forms overview-->
</label>


   <p>Username: {{ username }}</p>
    <p>Framework:</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>


    <form>    <!-- reactive forms module -->
      <label>Name
        <input type="text" />
      </label>
      <label>Email
        <input type="email" />
      </label>
      <button type="submit">Submit</button>
    </form>


    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit">Submit</button>
    </form>

    <ul>
      <li>Number with "decimal" {{ num }}</li>
      <li>Date with "date" {{ birthday }}</li>
      <li>Currency with "currency" {{ cost }}</li>
    </ul>
  `
  ,
  imports: [User, Comments, NgOptimizedImage, RouterOutlet, FormsModule,
    ReactiveFormsModule, LowerCasePipe, UpperCasePipe, DecimalPipe, DatePipe, CurrencyPipe,
    RouterLink, RouterOutlet, Pipe, PipeTransform
  ], // reference
  styles: `
    :host {
      color: blue;
    }
  `,

})
export class App {
  city = 'San Francisco'; // new property
  isLoggedIn = false;

  toggle() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  greet() {
    console.log('Hello, there 👋');
  }

  loudMessage = 'we think you are doing great!'
  username = 'yOunGTECh';
}

export class Child {
  addItem() {}
}


class Child {
  incrementCountEvent = output<number>();

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }

}

export class CarService { // Creating an injectable service
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
