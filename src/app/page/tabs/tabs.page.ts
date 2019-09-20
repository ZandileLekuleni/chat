import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tab1: string ="ChatPage";
  tab2: string ="ProfilePage";
  tab3: string ="UserPage";

  
 
  constructor() { }
  

  ngOnInit() {
  }

}

