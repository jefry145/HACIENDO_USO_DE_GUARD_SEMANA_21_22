import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { LoginValidGuard } from "./Guard/login-valid.guard";
import { UserPermiseGuard } from "./Guard/user-permise.guard";
import { AccountComponent } from "./pages/account/account.component";
import { FormsComponent } from "./pages/forms/forms.component";
import { HomeComponent } from "./pages/home/home.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { UsersComponent } from "./pages/users/users.component";

const routes : Routes =[
    {path:"" ,component : HomeComponent},
    {path:"Users", component : UsersComponent , canActivate: [UserPermiseGuard]},
    {path:"Forms", component : FormsComponent , canActivate: [UserPermiseGuard]},
    {path:"Postds" , component : PostsComponent , canActivate: [LoginValidGuard]},
    {path:"Account" , component : AccountComponent , canActivate: [LoginValidGuard]},
  
];

@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
