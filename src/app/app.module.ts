import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TabmenuComponent } from './components/tabmenu/tabmenu.component';
import { DetailComponent } from './components/detail/detail.component';
import { HandleDetailService } from 'src/services/handleDetail.service';

import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TabmenuComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    TabMenuModule,
    AvatarModule,
    BadgeModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    DialogModule,
    SelectButtonModule,
    FormsModule
  ],
  providers: [HandleDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
