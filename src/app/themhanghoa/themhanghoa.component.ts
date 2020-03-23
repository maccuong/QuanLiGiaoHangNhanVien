import { HangHoaService } from './../Service/hang-hoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-themhanghoa',
  templateUrl: './themhanghoa.component.html',
  styleUrls: ['./themhanghoa.component.css']
})
export class ThemhanghoaComponent implements OnInit {

  constructor(public hanghoaService: HangHoaService,private formbuider: FormBuilder,route: ActivatedRoute,
    private router: Router,private toastr: ToastrService) { }

    hanghoaForm: FormGroup;
    $key ='';
    MaHH = '';
    TenHH = '';
    Gia = 0;
  ngOnInit(): void {
    this.hanghoaForm= this.formbuider.group({
      '$key':[0],
      'MaHH' :[ null, Validators.required],
      'TenHH' :[ null, Validators.required],
      'Gia' : [ null, Validators.required],
    });
  }

  onBackhh(){
    this.router.navigate(['/danhsachhanghoa']);
  }
  onSubmithh(fg: FormGroup){
    console.log(fg);
    this.hanghoaService.Addhanghoa(fg).subscribe(
      (res:any) => {
        this.router.navigate(['/danhsachhanghoa']);
        fg.setValue({idHH : res.$key})
        

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
