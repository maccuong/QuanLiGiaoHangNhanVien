import { Donhang } from './../donhang';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { NhanVien } from '../NhanViens';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:21931/api/DonHang';
@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class DonhangService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  formdonhang : FormGroup = new FormGroup ({
    $key: new FormControl(0),
    MaDH: new FormControl('',Validators.required),
    TenKH: new FormControl('',Validators.required),
    DChi: new FormControl('',Validators.required),
    SDT: new FormControl('',Validators.required),
    NguoiGiaoId: new FormControl('',Validators.required),
    NgayDat: new FormControl('',Validators.required),
    NgayGiao: new FormControl('',Validators.required),
    TrangThai: new FormControl('',Validators.required),
    GhiChu: new FormControl('',Validators.required),
  });
  GetDonHangList(): Observable<Donhang[]> {
    return this.http.get<Donhang[]>(apiUrl).pipe(
      tap(hh =>console.log('lấy thành công hàng hóa')),
      catchError(this.handleError('GetDonHangList', []))
    );
 }
 getDonHangByID(id: number): Observable<Donhang>{
  const URL = `${apiUrl}/${id}`;
  return this.http.get<Donhang>(URL).pipe(

    tap(res=> console.log(res)),
    catchError(this.handleError<Donhang>(`GetDonHang id=${id}`))
  );
}
AddDonhang(donhang: any): Observable <Donhang>{
  //const hh= JSON.parse(hanghoa);
  return this.http.post<Donhang>(apiUrl,donhang,httpOptions).pipe(
    delay(3000),
    tap((hanghoas:Donhang)=> console.log(`Đã thêm đơn hàng id=${hanghoas.idDonHang}`)),
    catchError(this.handleError<Donhang>(`AddDonhang`))
  ) ;
}

UpDateDonHang(id: number, donhangs: any):Observable<any>{
  const URL = `${apiUrl}/${id}`;
  return this.http.put(URL,donhangs,httpOptions).pipe(
    delay(4000),
    tap(_=> console.log(`update đơn hàng id=${id}`)),
    catchError(this.handleError<any>('UpDateDonHang'))
  );
}
DeleteDonHang(id : number):Observable<Donhang>{
  const URL = `${apiUrl}/${id}`;
  return this.http.delete<Donhang>(URL,httpOptions).pipe(
    delay(1000),
    tap(_=> console.log(`đã xóa đơn hàng  id=${id}`)),
    catchError(this.handleError<any>('DeleteDonHang'))
  );
}
}
