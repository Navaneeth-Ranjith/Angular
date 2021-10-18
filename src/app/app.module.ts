import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { DoItYourselfComponent } from './do-it-yourself/do-it-yourself.component';
import { FreeTemplatesComponent } from './free-templates/free-templates.component';
import { YourLegalRightsComponent } from './your-legal-rights/your-legal-rights.component';
import { ForLawyersComponent } from './for-lawyers/for-lawyers.component';
import { FREEADVICEComponent } from './free-advice/free-advice.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    DoItYourselfComponent,
    FreeTemplatesComponent,
    YourLegalRightsComponent,
    ForLawyersComponent,
    FREEADVICEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
