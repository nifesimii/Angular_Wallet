import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavingsRestapiService {

  readonly savingAPIUrl = "https://localhost:44358/api";
  

  constructor(private http:HttpClient) { }
  getSavingList():Observable<any[]> {
    return this.http.get<any>(this.savingAPIUrl + '/savings');
  }

  addSaving(data:any) {
    return this.http.post(this.savingAPIUrl + '/savings', data);
  }

  updateSaving(id:number|string, data:any) {
    return this.http.put(this.savingAPIUrl + `/savings/${id}`, data);
  }

  deleteSaving(id:number|string) {
    return this.http.delete(this.savingAPIUrl + `/savings/${id}`);
  }

  // Inspection Types
  getSavingTypesList():Observable<any[]> {
    return this.http.get<any>(this.savingAPIUrl + '/savingTypes');
  }

  addSavingTypes(data:any) {
    return this.http.post(this.savingAPIUrl + '/savingTypes', data);
  }

  updateSavingTypes(id:number|string, data:any) {
    return this.http.put(this.savingAPIUrl + `/savingTypes/${id}`, data);
  }

  deleteSavingTypes(id:number|string) {
    return this.http.delete(this.savingAPIUrl + `/savingTypes/${id}`);
  }

  // Statuses
  getSavingStatusList():Observable<any[]> {
    return this.http.get<any>(this.savingAPIUrl + '/savingstatus');
  }

  addSavingStatus(data:any) {
    return this.http.post(this.savingAPIUrl + '/savingstatus', data);
  }

  updateSavingStatus(id:number|string, data:any) {
    return this.http.put(this.savingAPIUrl + `/savingstatus/${id}`, data);
  }

  deleteSavingStatus(id:number|string) {
    return this.http.delete(this.savingAPIUrl + `/savingstatus/${id}`);
  }
}
