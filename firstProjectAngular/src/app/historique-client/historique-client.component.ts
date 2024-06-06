import { Component, OnInit } from '@angular/core';
import { HistoriqueClientService } from '../service/historique-client.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HistoriqueClient } from '../model/historique-client';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-historique-client',
  templateUrl: './historique-client.component.html',
  styleUrls: ['./historique-client.component.css']
})
export class HistoriqueClientComponent implements OnInit{

  listHistorique: HistoriqueClient[] = [];
  newHistoriqueClient: HistoriqueClient = new HistoriqueClient();
  historiqueClientToUpdate: HistoriqueClient = new HistoriqueClient();
  public addHistoriqueClientForm!: FormGroup;
  public editHistoriqueClientForm!: FormGroup;



  constructor(private servicehistoriqueclient:HistoriqueClientService, private router:Router) { }
 
        ngOnInit(): void {
      this.getAllHistoriqueClient()
      this.initAddHistoriqueClientForm()
  }


  getAllHistoriqueClient(): void {
      this.servicehistoriqueclient.listehistoriqueclient().subscribe(
        (data: HistoriqueClient[]) => {
          this.listHistorique = data;
          console.log(this.listHistorique); 
          //this.router.navigate(['/edit']);

        },
        (error: any) => {
          console.error("Erreur lors de la récupération des Historiqueclients", error);
        }
      );
    }

    

   addHistoriqueClient(): void {
     this.servicehistoriqueclient.ajouterhistoriqueclient(this.newHistoriqueClient).subscribe(
       (data: HistoriqueClient) => {
         console.log("HistoriqueClient ajouté avec succès :", data);
          this.getAllHistoriqueClient(); // Actualiser la liste après l'ajout
        },
        (error: any) => {
          console.error("Erreur lors de l'ajout de l'HistoriqueClient", error);
        }
      );
}

    private initAddHistoriqueClientForm() {
      this.addHistoriqueClientForm = new FormGroup({
  
        nom: new FormControl("", Validators.required),
        projet: new FormControl("", Validators.required),
        commentaire: new FormControl("", Validators.required),
      });
    }

    saveHistorique(historiqueClient: HistoriqueClient): void {
      this.servicehistoriqueclient.ajouterhistoriqueclient(historiqueClient).subscribe(
        (response) => {
          this.getAllHistoriqueClient();
         
        },
        (error) => {
          console.error(error);

        }
      );
    }

    //updateHistoriqueClient(id: number): void {
      //this.servicehistoriqueclient.updateHistoriqueClient(id, this.historiqueClientToUpdate).subscribe(
        //(data: HistoriqueClient) => {
          //console.log("HistoriqueClient mis à jour avec succès :", data);
          //this.getAllHistoriqueClient(); // Actualiser la liste après la mise à jour
        //},
        //(error: any) => {
          //console.error("Erreur lors de la mise à jour de l'HistoriqueClient", error);
        //}
      //);
    //}

    // updateHistoriqueClient(historiqueClient: HistoriqueClient): void {
    //   this.servicehistoriqueclient.updateHistoriqueClient(historiqueClient.id, historiqueClient).subscribe(
    //     (response) => {
    //       this.getAllHistoriqueClient();
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    // }

    // editHistorique(id: number): void {
    //   this.router.navigate(['/edit', id]);
    // }
    // private initEditHistoriqueClientForm() {
    //   this.editHistoriqueClientForm = new FormGroup({
    //    name: new FormControl("", Validators.required),
    //     projet: new FormControl("", Validators.required),
    //     commentaire: new FormControl("", Validators.required),

    //   });
    // }
    

    deleteHistoriqueClient(id: number): void {
      this.servicehistoriqueclient.deleteHistoriqueClient(id).subscribe(
        () => {
          console.log("HistoriqueClient supprimé avec succès :", id);
          //this.getAllHistoriqueClient(); // Actualiser la liste après la suppression
          this.getAllHistoriqueClient();
        },
        (error: any) => {
          console.error("Erreur lors de la suppression de l'HistoriqueClient", error);
        }
      );
    }
 
}
