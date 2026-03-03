import { Component} from '@angular/core';
//import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html'
})
export default class AppComponent {}


