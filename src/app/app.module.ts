import { NhanvienService } from './Service/nhanvien.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NhanViensComponent } from './nhan-viens/nhan-viens.component';
import { ThemNhanViensComponent } from './them-nhan-viens/them-nhan-viens.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SuanhanvienComponent } from './suanhanvien/suanhanvien.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertsModule } from 'angular-alert-module'
import { ToastrModule } from 'ngx-toastr';
import { HangHoaComponent } from './hang-hoa/hang-hoa.component';
import { ThemhanghoaComponent } from './themhanghoa/themhanghoa.component';
import { SuahanghoaComponent } from './suahanghoa/suahanghoa.component';
import { DonhangComponent } from './donhang/donhang.component';
import { ThemdonhangComponent } from './themdonhang/themdonhang.component';
import { SuadonhangComponent } from './suadonhang/suadonhang.component';
@NgModule({
  declarations: [
    AppComponent,
    NhanViensComponent,
    ThemNhanViensComponent,
    SuanhanvienComponent,
    HangHoaComponent,
    ThemhanghoaComponent,
    SuahanghoaComponent,
    DonhangComponent,
    ThemdonhangComponent,
    SuadonhangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {

      }
    )
  ],
  providers: [NhanvienService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
