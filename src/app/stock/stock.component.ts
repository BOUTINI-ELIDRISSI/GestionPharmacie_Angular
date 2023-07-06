import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{
  currentDate: Date;
  email="";
  qte =0;
  med=""
  nom="";
  obj="";
  constructor(public shared:SharedService){
    this.currentDate = new Date();

  }

  message="";
message_visible = false;

  modalVisible = false;
  modalVisible1 = false;
  onSelectFourni() {
    setTimeout(() => {
      const selectedFourni = this.allfourni.find(fourni => fourni.email === this.email);
      setTimeout(() => {
      if (selectedFourni) {
        this.nom = selectedFourni.nom;
      }
    }, 2000);
    }, 1000);
    
      
   
   
  }
  openModal(libelle:string): void {
    this.modalVisible1 = true;
    this.med=libelle;
    console.log("openModel is working")
    this.obj="Demande de réapprovisionnement en médicament "+this.med;
    
    
  }
  suivant(): void {
    this.closeModal1();
    this.modalVisible = true;
    console.log("openModel for update is working")
    
  }
  closeModal1(): void {
    this.modalVisible1 = false;
    console.log("closeModal is working")

  }
  closeModal(): void {
    this.modalVisible = false;
    console.log("closeModal for update is working");
  }

  isExpired(date: string): boolean {
    const expirationDate = new Date(date);
    return expirationDate <= this.currentDate;
  }
  
  allstock: any[]=[];
  all_stock(){
    this.shared.allStock().subscribe(
      (allstock) => {
        // User saved successfully, perform any necessary actions
        this.allstock=allstock;
        console.log('stock saved successfully!');
      },
      (error) => {
        // Handle the error case
        console.error('Error saving stock:', error);
      }
    )
  }
  allfourni:any[] = [];
  all_fourni(){
    this.shared.allfournisseur().subscribe(
      (allfourni) => {
        this.allfourni = allfourni;
      },
      (error) => {
        console.error('Error fetching fournisseur data:', error);
      }
    )
  }

  ngOnInit(): void {
    this.all_stock();
    this.all_fourni();
  }
  @ViewChild('textareaRef', { static: false }) textareaRef!: ElementRef;
body=""
  // Function to retrieve the textarea value
  getTextareaValue(): string {
    return this.textareaRef.nativeElement.value;
  }
  
  
  envoyer(){
    this.body=this.getTextareaValue();
    this.shared.envoyer_email(this.email,this.obj,this.body).subscribe(
    () => {
      this.message="Email a été bien envoyé";
    },
    (error) => {
      this.message="Email n'a pas été bien envoyé";
    }
  );

  setTimeout(() => {
    this.message_visible=true;
     this.closeModal();

  }, 8000);
setTimeout(() => {
  this.message_visible=false;
}, 15000);
}
 
}
