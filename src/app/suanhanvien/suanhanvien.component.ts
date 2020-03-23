
import { Component, OnInit,Input } from '@angular/core';
import { NhanvienService } from './../Service/nhanvien.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, FormsModule } from '@angular/forms';
import { NhanVien } from '../NhanViens';
import { pipe } from 'rxjs';
import { group } from '@angular/animations';
import { delay } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-suanhanvien',
  templateUrl: './suanhanvien.component.html',
  styleUrls: ['./suanhanvien.component.css']
})
export class SuanhanvienComponent implements OnInit {
  @Input()nhanviens: NhanVien;
  startDate = new Date(1980, 0, 1);
  notification = null;
  constructor(public service: NhanvienService,private formbuider: FormBuilder,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService) { }
 nhanvienForm : FormGroup;
 idNV =0;
  maNV = '';
  tenNV ='';
  dChi ='';
  ngaySinh ='';


  isLoadingResults= false;

  ngOnInit(): void {
    this.GetNhanVienByIds(this.route.snapshot.params['IdNV']);
    this.nhanvienForm = this.formbuider.group({
      'idNV':[0],
      'maNV':[null, Validators.required],
      'tenNV': [null,Validators.required],
      'dChi' : [null,Validators.required],
      'ngaySinh': [null,Validators.required]
    });

  }
  onBack(){
    this.router.navigate(['/danhsachnhanvien']);
  }
    GetNhanVienByIds(id: number){
      this.service.getNhanVienByID(id).subscribe(data => {
        this.idNV=data.idNV;
        console.log(data);
        this.nhanvienForm.patchValue({
          idNV: data.idNV,
          maNV: data.maNV,
          tenNV: data.tenNV,
          dChi: data.dChi,
          ngaySinh: data.ngaySinh
        });

      });
    }
      successmsg(){
        this.toastr.success("Lưu thành công",'Success');
    }
     errorsmsg(){
        this.toastr.error("Toastr Error Notification",'Error');

  }
  infotoastr()
  {
  this.toastr.info("Important News", 'Information');
  }
  toastrwaring()
  {
    this.toastr.warning("Battery about to Die", 'Warning');
  }
    onSubmitForm(form: NgForm){
      this.isLoadingResults= true;
      this.service.UpDateNhanVien(this.idNV,form).subscribe(
        res => {
          this.isLoadingResults=false;

          this.router.navigate(['/danhsachnhanvien']);
        },
        (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
    }
    chuyenquadanhsachhanghoa(){
      this.router.navigate(['/danhsachhanghoa']);
    }
    chuyenquadanhsachNhanVien(){
      this.router.navigate(['/danhsachnhanvien']);
    }
}
