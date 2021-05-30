import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CouseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from './pipe/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CouseListComponent,
    StarComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
