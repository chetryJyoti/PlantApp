import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  selectedTab: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('tabs',{static:false}) tabs: IonTabs;
  constructor() { }

  ngOnInit() {
  }
  setCurrentTab(){
    this.selectedTab=this.tabs.getSelected();
    console.log(this.selectedTab);
  }
}
