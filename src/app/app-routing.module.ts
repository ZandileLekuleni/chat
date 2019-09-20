import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './page/register/register.module#RegisterPageModule' },
  { path: 'chat', loadChildren: './page/chat/chat.module#ChatPageModule' },
  { path: 'profile', loadChildren: './page/profile/profile.module#ProfilePageModule' },
  { path: 'tabs', loadChildren: './page/tabs/tabs.module#TabsPageModule' },
  { path: 'add-friend', loadChildren: './page/add-friend/add-friend.module#AddFriendPageModule' },
  { path: 'anonymous', loadChildren: './page/anonymous/anonymous.module#AnonymousPageModule' },
  // { path: 'upadate-profile', loadChildren: './page/upadate-profile/upadate-profile.module#UpadateProfilePageModule' },
  { path: 'update-profile', loadChildren: './page/update-profile/update-profile.module#UpdateProfilePageModule' },
  // { path: 'buddies', loadChildren: './page/buddies/buddies.module#BuddiesPageModule' },
  { path: 'sign-up', loadChildren: './page/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'user', loadChildren: './page/user/user.module#UserPageModule' },
  { path: 'chats', loadChildren: './page/chats/chats.module#ChatsPageModule' },
  // { path: 'pic', loadChildren: './page/pic/pic.module#PicPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
