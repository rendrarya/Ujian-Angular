import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  menuItems = [
    { title: 'Profile', link: '/profile' },
    { title: 'Setting', link: '/setting' },
    { title: 'Post', link: '/post' }
  ];
}