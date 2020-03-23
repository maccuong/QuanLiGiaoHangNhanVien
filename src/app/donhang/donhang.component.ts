import { DonhangService } from './../Service/donhang.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NhanVien } from './../NhanViens';
import { NhanvienService } from './../Service/nhanvien.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Donhang } from '../donhang';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent implements OnInit {

  data: Donhang[] = [];
  datas: MatTableDataSource<any>;
  isLoadingResults = true;
  @ViewChild (MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['idDonHang', 'maDH', 'tenKH', 'dChi','sDT','nggiao','ngayDat','ngayGiao','trangThai','ghiChu','cnang'];
  constructor(private donhangService: DonhangService,private service: NhanvienService,private router : Router) { }

  ngOnInit(): void {

    this.donhangService.GetDonHangList().subscribe( res => {

      this.data =res;
      this.datas = new MatTableDataSource(this.data);
      this.datas.paginator= this.paginator;
      this.datas.sort= this.sort;
      console.log(this.data);
      this.isLoadingResults= false;
    },
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

  deleteDonhang(id: number){
    if(confirm('Bạn có muốn xóa đơn hàng này ?')){
      this.donhangService.DeleteDonHang(id).subscribe(
        res => {
          this.donhangService.GetDonHangList().subscribe( res => {

            this.data =res;
            this.datas = new MatTableDataSource(this.data);
            this.datas.paginator= this.paginator;
            this.datas.sort= this.sort;
            console.log(this.data);

          }

            ,
            err => {
              console.log(err);

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
