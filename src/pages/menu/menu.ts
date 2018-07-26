import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Product', pageName: "TabsPage", tabComponent: "Menu1Page", index: 1, icon: 'basket'},
    {title: 'Gallery', pageName: "TabsPage", tabComponent: "Menu2Page", index: 2, icon: 'albums'},
    {title: 'Special Page ', pageName: "SpecialPage", icon: 'home'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface) {
    let params = {};
    if (page.index) {
      params = {tabIndex: page.index}
    }
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary'
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name == page.pageName) {
      return 'primary';
    }
  }

}
