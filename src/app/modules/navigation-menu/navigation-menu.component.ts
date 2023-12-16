import { Component } from '@angular/core';

import { NAVIGATION_LINKS } from '@core/consts';
import { NavigationType } from 'src/app/core/types';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  NAVIGATION_LINKS = NAVIGATION_LINKS;

  isSideNavOpen: boolean = true;

  constructor() {}

  setActivePage(page: NavigationType) {
    NAVIGATION_LINKS.forEach((navLink) => navLink.link === page.link ? page.isActive = false : page.isActive = true);
  }


}
