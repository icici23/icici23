import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MCARoutingModule } from './mca-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { CommitteComponent } from './Components/committe/committe.component';
import { CallForPapersComponent } from './Components/call-for-papers/call-for-papers.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ContactComponent } from './Components/contact/contact.component';
import { KeynoteComponent } from './Components/keynote/keynote.component';
import { PublicationComponent } from './Components/publication/publication.component';
//import { ComponeSubmissionOfPaperComponent } from './compone-submission-of-paper/compone-submission-of-paper.component';
import { SubmissionOfPaperComponent } from './Components/submission-of-paper/submission-of-paper.component';
import { ScrollAnimationDirective } from './Animations/scroll-animation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempComponent } from './Components/temp/temp.component';

@NgModule({
  declarations: [
    HomeComponent,
    CommitteComponent,
    CallForPapersComponent,
    RegistrationComponent,
    ContactComponent,
    KeynoteComponent,
    PublicationComponent,
    //ComponeSubmissionOfPaperComponent,
    SubmissionOfPaperComponent,
    ScrollAnimationDirective,
    TempComponent,
  ],
  imports: [
    CommonModule,
    MCARoutingModule,
  ]
})
export class MCAModule { }
