import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {QuestionsComponent} from "./questions/questions.component";
import {PostcardsComponent} from "./postcards/postcards.component";
import {ContactComponent} from "./contact/contact.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {CreatePostcardComponent} from "./create-postcard/create-postcard.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'postcards', component: PostcardsComponent},
  {path: 'contacts',component: ContactComponent},
  {path: 'gallery',component: GalleryComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'signup',component: SignupComponent},
  {path:'create-postcard',component:CreatePostcardComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
