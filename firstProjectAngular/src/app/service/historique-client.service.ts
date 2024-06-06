import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HistoriqueClient } from '../model/historique-client';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HistoriqueClientService {

private  localUrl:string ="http://localhost:8080/historiqueClient";

  constructor(private http:HttpClient) { }

 // ajouterhistoriqueclient(hist:HistoriqueClient):Observable<HistoriqueClient> {
   // return this.http.post<HistoriqueClient>(`${this.localUrl}/add`, hist)
    //.pipe(map((response:any)=> response as HistoriqueClient))
     //}
      public ajouterhistoriqueclient(historiqueClient: HistoriqueClient): Observable<HistoriqueClient> {
        return this.http.post<HistoriqueClient>(`${this.localUrl}/add`, historiqueClient);
      }

   listehistoriqueclient():Observable<HistoriqueClient[]> {
    return this.http.get<HistoriqueClient[]> (`${this.localUrl}/list`)
    //.pipe(map((response:any)=> response as HistoriqueClient))
      }

   findhistoriqueclientById(id: number): Observable<HistoriqueClient> {
        return this.http.get(`${this.localUrl}/findbyid/${id}`).pipe(
          map((response:any) => response as HistoriqueClient)
        );
      }

      updateHistoriqueClient(id: number, historiqueClient: HistoriqueClient): Observable<HistoriqueClient> {
        return this.http.put<HistoriqueClient>(`${this.localUrl}/update/${id}`,historiqueClient).pipe(
          map((response:any) => response as HistoriqueClient)
        );
      }
      deleteHistoriqueClient(id: number): Observable<HistoriqueClient> {
        return this.http.delete(`${this.localUrl}/delete/${id}`)
        .pipe(
          map((response:any) => response as HistoriqueClient)
        ); 
      }
}
