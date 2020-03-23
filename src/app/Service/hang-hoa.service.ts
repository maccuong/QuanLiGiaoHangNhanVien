import { Hanghoa } from './../hanghoa';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:21931/api/HangHoa';
@Injectable({
  providedIn: 'root'
})
export class HangHoaService {

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  formhanghoa : FormGroup = new FormGroup({
    $key: new FormControl(0),
    maHH: new FormControl('',Validators.required),
    tenHH: new FormControl('',Validators.required),
    gia: new FormControl('',Validators.required)
  });
  GetHangHoaList(): Observable<Hanghoa[]> {
    return this.http.get<Hanghoa[]>(apiUrl).pipe(
      tap(hh =>console.log('lấy thành công hàng hóa')),
      catchError(this.handleError('GetHangHoaList', []))
    );
 }
 getHangHoaByID(id: number): Observable<Hanghoa>{
  const URL = `${apiUrl}/${id}`;
  return this.http.get<Hanghoa>(URL).pipe(

    tap(res=> console.log(res)),
    catchError(this.handleError<Hanghoa>(`Lấy thành công hàng hóa có mã id=${id}`))
  );
}
Addhanghoa(hanghoa:any):Observable<Hanghoa>{
  //const hh= JSON.parse(hanghoa);
  return this.http.post<Hanghoa>(apiUrl,hanghoa,httpOptions).pipe(
    delay(3000),
    tap((hanghoas:Hanghoa)=> console.log(`Đã thêm hàng hóa id=${hanghoas.idHH}`))
  ) ;
}

UpDateHangHoa(id: number, hhoa: any):Observable<any>{
  const URL = `${apiUrl}/${id}`;
  return this.http.put(URL,hhoa,httpOptions).pipe(
    delay(4000),
    tap(_=> console.log(`update nhan vien id=${id}`)),
    catchError(this.handleError<any>('UPDateNhanVien'))
  );
}
DeleteHanghoa(id : number):Observable<Hanghoa>{
  const URL = `${apiUrl}/${id}`;
  return this.http.delete<Hanghoa>(URL,httpOptions).pipe(
    delay(1000),
    tap(_=> console.log(`đã xóa hàng hóa id=${id}`)),
    catchError(this.handleError<any>('DeleteHanghoa'))
  );
}
}
