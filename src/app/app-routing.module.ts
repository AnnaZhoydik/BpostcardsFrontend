import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {QuestionsComponent} from "./questions/questions.component";
import {PostcardsComponent} from "./postcards/postcards.component";
import {ContactComponent} from "./contact/contact.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'postcards', component: PostcardsComponent},
  {path: 'contacts',component: ContactComponent},
  {path: 'gallery',component: GalleryComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'signup',component: SignupComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
