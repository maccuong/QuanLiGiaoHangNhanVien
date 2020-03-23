import { delay } from 'rxjs/operators';
import { NhanVien } from './../NhanViens';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:21931/api/NhanVien';
@Injectable({
  providedIn: 'root'
})
export class NhanvienService {

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    formconcho : FormGroup = new FormGroup({
    $key: new FormControl(''),
    MaNV: new FormControl('',Validators.required),
    TenNV: new FormControl('',Validators.required),
    DChi: new FormControl('',Validators.required),
    NgaySinh: new FormControl('',Validators.required),
  });
  GetNhanVienList(): Observable<NhanVien[]> {
     return this.http.get<NhanVien[]>(apiUrl).pipe(
       tap(nv =>console.log('thanh cong')),
       catchError(this.handleError('getSuppliers', []))
     );
  }

  //Get nhanvien by id
  getNhanVienByID(id: number): Observable<NhanVien>{
    const URL = `${apiUrl}/${id}`;
    return this.http.get<NhanVien>(URL).pipe(
      tap(res=> console.log(res)),
      catchError(this.handleError<NhanVien>(`Get Nhan vien id=${id}`))
    );
  }
  AddNhanVien(nvien:any): Observable<NhanVien>{
    return this.http.post<NhanVien>(apiUrl,nvien,httpOptions).pipe(
      delay(3000),
      tap((nviens: NhanVien) => console.log(`Đã thêm nhân viên id=${nviens.idNV}`)),
      catchError(this.handleError<NhanVien>('AddNhanVien'))
    )
  }
  UpDateNhanVien(id: number, nvien: any):Observable<any>{
    const URL = `${apiUrl}/${id}`;
    return this.http.put(URL,nvien,httpOptions).pipe(
      delay(3000),
      tap(_=> console.log(`update nhan vien id=${id}`)),
      catchError(this.handleError<any>('UPDateNhanVien'))
    );
  }
  DeleteNhanVien(id : number):Observable<NhanVien>{
    const URL = `${apiUrl}/${id}`;
    return this.http.delete<NhanVien>(URL,httpOptions).pipe(
      tap(_=> console.log(`đã xóa nhân viên id=${id}`)),
      catchError(this.handleError<any>('DeleteNhanVien'))
    );
  }

}
