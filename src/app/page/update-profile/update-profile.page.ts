import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
@Component({
selector: 'app-update-profile',
templateUrl: './update-profile.page.html',
styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
// user = {} as User;
user = {} as User;
User = {
  name:'',
  username: '',
  displayName: '',
  email: '',
  gender:'',
  bio:'',
  password: '',
};
constructor(private route: ActivatedRoute,
  private userServ: UserService,
  private router: Router,
  private afAuth: AngularFireAuth) { }

ngOnInit() {
  this.route.queryParams.subscribe(params => { console.log(params);
    this.User.name = params.name,
  this.User.username = params.username,
  this.User.email =params.email,
  this.User.gender = params.gender,
  this.User.bio =params.bio,
  this.User.password = params.password,
    console.log(this.User.displayName, this.User.email, this.User.gender, this.User.bio, this.User.password)
});
}
onEdit(User){
  const key = this.afAuth.auth.currentUser.uid;
  this.userServ.update(User, key);
  alert('profile updated')
  this.router.navigateByUrl('/profile')
}
}