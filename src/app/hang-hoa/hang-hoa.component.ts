import { delay } from 'rxjs/operators';
import { HangHoaService } from './../Service/hang-hoa.service';
import { Hanghoa } from './../hanghoa';
import { Observable } from 'rxjs';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-hang-hoa',
  templateUrl: './hang-hoa.component.html',
  styleUrls: ['./hang-hoa.component.css']
})
export class HangHoaComponent implements OnInit {
  data: Hanghoa[] = [];
  datas: MatTableDataSource<any>;
  @ViewChild (MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['maHH', 'tenHH', 'gia','cnang'];
  constructor(private service: HangHoaService,private router : Router) { }

  ngOnInit(): void {
    this.service.GetHangHoaList().subscribe( res => {
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

  }

  deleteHH(id: number){
    if(confirm('Bạn có muốn xóa sản phẩm này ?')){
      this.service.DeleteHanghoa(id).subscribe(
        res => {
          this.service.GetHangHoaList().subscribe( res => {
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
          this.router.navigate(['danhsachanghoa']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }


  hanghoass: Hanghoa;
  onclick(data: Hanghoa){
    this.hanghoass= data;

  }
  themnhanghoa(){
    this.service.formhanghoa.reset();
    this.router.navigate(['/themhanghoa']);
  }
  chuyenquadanhsachhanghoa(){
    this.router.navigate(['/danhsachhanghoa']);
  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.datas.filter = filterValue.trim().toLowerCase();
  }
  chuyenquadanhsachNhanVien(){
    this.router.navigate(['/danhsachnhanvien']);
  }
}
