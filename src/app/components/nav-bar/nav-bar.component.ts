import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output() navChange = new EventEmitter<string>();

  showAllEvents() {
    this.navChange.emit('all');
  }

  showFavoriteEvents() {
    this.navChange.emit('favorites');
}

}
