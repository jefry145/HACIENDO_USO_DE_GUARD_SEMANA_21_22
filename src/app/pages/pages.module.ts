import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppMaterialDesing } from '../material.desing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { FormsComponent } from './forms/forms.component';
import { PostsComponent } from './posts/posts.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    FormsComponent,
    PostsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AppMaterialDesing,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
