import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branchs-info',
  templateUrl: './branchs-info.component.html',
  styleUrls: ['./branchs-info.component.css']
})
export class BranchsInfoComponent implements OnInit {

  provinceSelected = "La Habana";
  provinces = ['Pinar del Rio', 'Artemisa','La Habana', 'Mayabeque', 'Matanzas', 'Cienfuegos', 'Villa Clara', 'Sancti Spiritus', 'Ciego de Avila', 'Camaguey', 'Las Tunas', 'Granma', 'Holguin', 'Santiago de Cuba', 'Guantanamo', 'Isla de la Juventud'];
  
  constructor() {
  }

  ngOnInit(): void {
  }

  selectUpdate(prov: string){
    this.provinceSelected = prov;
  }

}
