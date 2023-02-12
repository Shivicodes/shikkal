import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ResumeComponent } from "../resume/resume.component";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { WelcomeModule } from "../welcome/welcome.molule";
import { EducationComponent } from "../education/education.component";
import { ExperienceModule } from "../experience/experience.module";
import { CoreModule } from "../core/core.module";
import { PostsModule } from "../posts/posts.molule";
import { ContactService } from "../contact/contact.service";
import { FooterComponent } from "../footer/footer.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule, 
    CoreModule,
    FontAwesomeModule,
    WelcomeModule,
    ExperienceModule,
    PostsModule
  ],
  declarations: [ 
    ResumeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    FooterComponent
  ],
  exports: [ ResumeComponent ],
  providers: [ ContactService ]
})

export class ResumeModule { }
