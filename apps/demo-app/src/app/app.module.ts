import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiLayoutModule } from '@tailwind-ct-demo/shared/ui/layout';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, SharedUiLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
