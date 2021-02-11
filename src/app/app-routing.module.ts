import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
{
  path:"",
  component:HomeComponent
},
{
  path:"shop",
  component:ShopComponent
},
{
  path:"about",
  component:AboutUsComponent
},
{
  path:"blog",
  component:BlogComponent
},
{
  path:"contact",
  component:ContactComponent
},
{
  path:"login",
  component:LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
