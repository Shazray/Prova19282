import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { AToFourPipe } from './a-to-four.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    AToFourPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
