import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  server: string = "http://localhost:8090/api/apprenants";
  httpHeader ={
    headers: new HttpHeaders({'content-type':'application/json'})};
  constructor(private http:HttpClient) { }

foundList(){
  return this.http.get(this.server);
}
  lolginCheck(login, password){
  return this.http.get(this.server+'/found/login='+login+'&password='+password);
  }

}
