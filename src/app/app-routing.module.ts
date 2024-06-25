import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouchComponent } from './touch/touch.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: "app-touch", component: TouchComponent},
  {path: "app-about", component: AboutComponent},
  {path: "app-work", component: WorkComponent},
  {path: "app-experience", component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
