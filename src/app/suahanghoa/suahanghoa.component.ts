import { HangHoaService } from './../Service/hang-hoa.service';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, FormsModule } from '@angular/forms';
import { NhanVien } from '../NhanViens';
import { pipe } from 'rxjs';
import { group } from '@angular/animations';
import { delay } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-suahanghoa',
  templateUrl: './suahanghoa.component.html',
  styleUrls: ['./suahanghoa.component.css']
})
export class SuahanghoaComponent implements OnInit {

  constructor(public hhoaService: HangHoaService,private formbuider: FormBuilder,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService) { }
    hanghoasForm : FormGroup;
    idHH =0;
     maHH = '';
     tenHH ='';
     gia =0;
  ngOnInit(): void {
    this.GetHangHoaByID(this.route.snapshot.params['idHH']);
    this.hanghoasForm = this.formbuider.group({
      'idHH':[0],
      'maHH':[null,Validators.required],
      'tenHH': [null,Validators.required],
      'gia':[null,Validators.required]
    });
  }
  onBack(){
    this.router.navigate(['/danhsachhanghoa']);
  }
  GetHangHoaByID(id: number){
      this.hhoaService.getHangHoaByID(id).subscribe(
        data => {
          this.idHH= data.idHH;
          this.hanghoasForm.setValue({
            idHH: data.idHH,
            maHH:data.maHH,
            tenHH: data.tenHH,
            gia:data.gia

          });
        });
  }

  onSubmitFormHH(form:NgForm){
    this.hhoaService.UpDateHangHoa(this.idHH,form).subscribe(
      res => {
        this.router.navigate(['/danhsachhanghoa']);
        },
        (err) => {
          console.log(err);
        }
    );
  }



  successmsg(){
    this.toastr.success("Lưu thành công",'Success');
}
chuyenquadanhsachhanghoa(){
  this.router.navigate(['/danhsachhanghoa']);
}
chuyenquadanhsachNhanVien(){
  this.router.navigate(['/danhsachnhanvien']);
}


}
