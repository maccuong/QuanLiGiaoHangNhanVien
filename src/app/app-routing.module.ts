import { ThemdonhangComponent } from './themdonhang/themdonhang.component';
import { DonhangComponent } from './donhang/donhang.component';
import { ThemhanghoaComponent } from './themhanghoa/themhanghoa.component';
import { HangHoaComponent } from './hang-hoa/hang-hoa.component';
import { SuanhanvienComponent } from './suanhanvien/suanhanvien.component';
import { NhanViensComponent } from './nhan-viens/nhan-viens.component';
import { ThemNhanViensComponent } from './them-nhan-viens/them-nhan-viens.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuahanghoaComponent } from './suahanghoa/suahanghoa.component';
import { SuadonhangComponent } from './suadonhang/suadonhang.component';


const routes: Routes = [
  {
    path: 'themnhanvien',
    component: ThemNhanViensComponent,
  },
  {
    path: 'danhsachnhanvien',
    component: NhanViensComponent,
  },
  {
    path: 'suanhanvien',
    component: SuanhanvienComponent,
  },
  {
    path: 'suanhanvien/:IdNV',
    component: SuanhanvienComponent,
  },
  { path: '',
    redirectTo: '/danhsachnhanvien',
    pathMatch: 'full'
  },
  {
    path: 'danhsachhanghoa',
    component: HangHoaComponent,
  },
  {
    path: 'themhanghoa',
    component: ThemhanghoaComponent,
  },
  {
    path: 'suahanghoa/:idHH',
    component: SuahanghoaComponent,
  },
  {
    path: 'danhsachdonhang',
    component: DonhangComponent,
  },
  {
    path: 'themdonhang',
    component: ThemdonhangComponent,
  },
  {
    path: 'suadonhang/:idDH',
    component: SuadonhangComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
