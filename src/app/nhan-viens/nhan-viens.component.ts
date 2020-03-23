import { Observable } from 'rxjs';
import { NhanVien } from './../NhanViens';
import { NhanvienService } from './../Service/nhanvien.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-nhan-viens',
  templateUrl: './nhan-viens.component.html',
  styleUrls: ['./nhan-viens.component.css']
})
export class NhanViensComponent implements OnInit {
  data: NhanVien[] = [];
  datas: MatTableDataSource<any>;
  isLoadingResults = true;
  @ViewChild (MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['maNV', 'tenNV', 'dChi', 'ngaySinh','cnang'];
  constructor(private service: NhanvienService,private router : Router) { }
  value = ' ';
  ngOnInit(): void {

    this.service.GetNhanVienList().subscribe( res => {
      this.data =res;
      this.datas = new MatTableDataSource(this.data);
      this.datas.paginator= this.paginator;
      this.datas.sort= this.sort;
      console.log(this.data);
      this.isLoadingResults= false;
    }

      ,
      err => {
        console.log(err);
        this.isLoadingResults= false;
      }

    );

  }
  nhanvienss: NhanVien;
  onclick(data: NhanVien){
    this.nhanvienss= data;

  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.datas.filter = filterValue.trim().toLowerCase();
  }
  clear(){
    this.value='';
  }
  deleteNV(id: number){
    if(confirm('Bạn có muốn xóa thông tin nhân viên này ?')){
      this.service.DeleteNhanVien(id).subscribe(
        res => {
          this.service.GetNhanVienList().subscribe( res => {
            this.data =res;
            this.datas = new MatTableDataSource(this.data);
            this.datas.paginator= this.paginator;
            this.datas.sort= this.sort;
            console.log(this.data);
            this.isLoadingResults= false;
          }

            ,
            err => {
              console.log(err);
              this.isLoadingResults= false;
            }

          );
          this.router.navigate(['/danhsachnhanvien']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  chuyenquadanhsachhanghoa(){
    this.router.navigate(['/danhsachhanghoa']);
  }
  themnhanvienNV(){
    this.service.formconcho.reset();
    this.router.navigate(['/themnhanvien']);
  }
  chuyenquadanhsachNhanVien(){
    this.router.navigate(['/danhsachnhanvien']);
  }
}
