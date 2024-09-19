import { Component } from '@angular/core'
import { EventListComponent } from "../event-list/event-list.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [EventListComponent, NavBarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  currentMode: string = 'all'; 

  updateMode(mode: string) {
    this.currentMode = mode;
}
}