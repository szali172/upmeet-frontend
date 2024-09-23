import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output() navChange = new EventEmitter<string>();
  @Input() user: User | null = null;

  showAllEvents() {
    this.navChange.emit('all');
  }

  showFavoriteEvents() {
    this.navChange.emit('favorites');
}

}
