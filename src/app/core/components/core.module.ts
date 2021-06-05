import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', 
        component: PageNotFoundComponent
      }
    ])
  ],
  exports: [
    NavBarComponent,
  ]
})
export class CoreModule {

}