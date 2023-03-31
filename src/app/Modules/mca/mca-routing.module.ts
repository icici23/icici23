import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallForPapersComponent } from './Components/call-for-papers/call-for-papers.component';
import { CommitteComponent } from './Components/committe/committe.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { KeynoteComponent } from './Components/keynote/keynote.component';
import { PublicationComponent } from './Components/publication/publication.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { SubmissionOfPaperComponent } from './Components/submission-of-paper/submission-of-paper.component';
import { TempComponent } from './Components/temp/temp.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'commite',component:CommitteComponent},
  {path:'call-for-papers',component:CallForPapersComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'contact',component:ContactComponent},
  {path:'keynote',component:KeynoteComponent},
  {path:'subofpaper',component:SubmissionOfPaperComponent},
  {path:'publication',component:PublicationComponent},
  {path:'temp',component:TempComponent},
  {path:'**',component:HomeComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MCARoutingModule { }
