import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { INavData } from '@coreui/angular';
import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  public navItems: INavData[] = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(public util: UtilService) {
    setTimeout(() => {
      navItems.filter((x) => (x.name = this.util.translate(x.name)));
      this.navItems = navItems;
    }, 2000);
  }
}
