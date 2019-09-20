import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {

tab1: string ="ChatPage";
tab2: string ="Page/AddFriendPage";
tab3: string ="ProfilePage";

  constructor() { }

  ngOnInit() {
  }

}
