import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.sass']
})
export class TabmenuComponent implements OnInit {

  items: MenuItem[] = [];

  scrollableItems: MenuItem[] = [];

  activeItem: MenuItem = {};

  activeItem2: MenuItem = {};

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' }
    ];

    this.activeItem = this.items[0];
    this.activeItem2 = this.scrollableItems[0];
  }
}
