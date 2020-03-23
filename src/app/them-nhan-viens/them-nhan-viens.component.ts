import { NhanvienService } from './../Service/nhanvien.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-them-nhan-viens',
  templateUrl: './them-nhan-viens.component.html',
  styleUrls: ['./them-nhan-viens.component.css']
})
export class ThemNhanViensComponent implements OnInit {
  startDate = new Date(1980, 0, 1);
  constructor(public nhanvienService: NhanvienService,private formbuider: FormBuilder,route: ActivatedRoute,
    private router: Router,private toastr: ToastrService) { }
  nhanvienForm: FormGroup;
  $key ='';
  MaNV = '';
  TenNV = '';
  Dchi = '';
  Ngaysinh = '';
  ngOnInit(): void {
    this.nhanvienForm= this.formbuider.group({
      '$key':[0],
      'MaNV' :[ null, Validators.required],
      'TenNV' :[ null, Validators.required],
      'Dchi' : [ null, Validators.required],
      'Ngaysinh' : [ null, Validators.required],
    });
  }
  onBack(){
    this.router.navigate(['/danhsachnhanvien']);
  }
  onSubmit(fg: FormGroup){
    this.nhanvienService.AddNhanVien(fg).subscribe(
      (res:any) => {
        this.router.navigate(['/danhsachnhanvien']);
        fg.patchValue({nhanvienid : res.$key})
      }
    );
  }
  successmsg(){
    this.toastr.success("Thêm thành công",'Success');
}
chuyenquadanhsachhanghoa(){
  this.router.navigate(['/danhsachhanghoa']);
}
chuyenquadanhsachNhanVien(){
  this.router.navigate(['/danhsachnhanvien']);
}
}
