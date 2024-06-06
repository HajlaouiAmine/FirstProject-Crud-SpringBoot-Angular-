import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriqueClient } from 'src/app/model/historique-client';
import { HistoriqueClientService } from 'src/app/service/historique-client.service';

@Component({
  selector: 'app-edit-historique-client',
  templateUrl: './edit-historique-client.component.html',
  styleUrls: ['./edit-historique-client.component.css']
})
export class EditHistoriqueClientComponent implements OnInit{
  historiqueClient: HistoriqueClient=new HistoriqueClient();
   editHistoriqueClientForm!: FormGroup;

  

  constructor(
    private route: ActivatedRoute,
    private historiqueService: HistoriqueClientService,
    private router: Router,
  ) {}
  ngOnInit(): void {
this.getHistoriqueDetails(this.route.snapshot.params['id']);
    this.editHistoriqueClientForm = new FormGroup({
      nom: new FormControl("", Validators.required),
      projet: new FormControl(""),
      commentaire: new FormControl("", Validators.required),
  })
  }

  getHistoriqueDetails(id: number): void {
    this.historiqueService.findhistoriqueclientById(id).subscribe(historiqueClient => {
      this.historiqueClient = historiqueClient;
      this.editHistoriqueClientForm.patchValue(historiqueClient);
  });
}
updateHistoriqueClient(): void {
  // if (!this.submitted)
  //   {
      
      this.historiqueService.updateHistoriqueClient(this.route.snapshot.params['id'],this.editHistoriqueClientForm.value)
        .subscribe({
          next: (res) => {
     console.log('Historique client mis à jour avec succès :', HistoriqueClient);
  //console.log(res);
          //this.router.navigate(['/historiqueClient']);
          },
        // error: (e) => console.error(e)
     });
       } 
}
// public updateHistoriqueClient(id:number,historique:HistoriqueClient): void {
//   const historiqueClient: HistoriqueClient = this.editHistoriqueClientForm.value;
//   console.log(historiqueClient);
// }


  // updateHistoriqueClient(): void {
  //   this.historiqueService.updateHistoriqueClient(this.historiqueClient.id,this.historiqueClient)
  //     .subscribe(updatedHistoriqueClient => {
  //       console.log('Historique client mis à jour avec succès :', updatedHistoriqueClient);
  //       // Traitez la réponse mise à jour si nécessaire
  //       this.router.navigate(['/historiqueClient']);

  //     }, error => {
  //       console.error('Erreur lors de la mise à jour de l\'historique client :', error);
  //       // Gérez les erreurs
  //     });
  // }

