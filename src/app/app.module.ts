import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconService } from "./utility/svg-icon/svg-icon.service";
import { SvgIconComponent } from "./utility/svg-icon/svg-icon.component";
import {
  dapplookerLogo,
  dapplookerLogoWithText,
  dappIcon,
  discordLogo,
  twitterLogo,
  medium,

} from "./utility/svg-icon/svg-icon";
import { FooterComponent } from './shared/footer/footer.component';
import { IframepipePipe } from './iframepipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    HeaderComponent,
    SvgIconComponent,
    FooterComponent,
    IframepipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private svgIconService: SvgIconService) {
    this.svgIconService.registerIcons([
      dapplookerLogo,
      dapplookerLogoWithText,
      dappIcon,
      discordLogo,
      twitterLogo,
      medium,
    ]);
  }
}
