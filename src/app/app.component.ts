import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { EventListComponent } from "./components/event-list/event-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, NavBarComponent, EventListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upmeet-frontend';
  currentMode!: string;


  updateMode(mode: string) {
    this.currentMode = mode;
  }
}