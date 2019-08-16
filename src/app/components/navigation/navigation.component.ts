import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuItems = [
    { routerLink: '/home', tooltip: 'Home', icon: 'home' },
    { routerLink: '/artists', tooltip: 'Artists', icon: 'people' },
    { routerLink: '/tracks', tooltip: 'Tracks', icon: 'audiotrack' },
    { routerLink: '/import', tooltip: 'Import', icon: 'import_export' },
  ] ;
}
