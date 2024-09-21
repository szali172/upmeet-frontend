import { Component, inject } from '@angular/core'
import { EventListComponent } from "../event-list/event-list.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

const USER_ID = 1; // utilize a specific user for testing

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [EventListComponent, NavBarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
  userService = inject(UsersService)

  currentMode: string = 'all'; 
  currentUser: User | null = null;

  ngOnInit() {
    this.getUser(USER_ID);
  }

  updateMode(mode: string) {
    this.currentMode = mode;
  }

  getUser(id: number) : void {
    this.userService.getUserByID(id).subscribe(
      (response) => {
        this.currentUser = response;
        console.log(`Fetched user: ${response.userName}`)
      }
    )
  }
}