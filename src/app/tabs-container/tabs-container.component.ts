import { Component, AfterContentInit, ContentChildren,QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>
  constructor() { }

  ngAfterContentInit(): void {
     const activeTabs = this.tabs?.filter(tab => tab.active)
     if(!activeTabs || activeTabs.length===0) {
       this.selectTab(this.tabs!.first)
     }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false
    }) //setta le altre tab tutte a false
    tab.active = true //attiva la tab selezionata
    return false //prevent default behaviour
  }

}
