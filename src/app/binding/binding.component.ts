import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent {
  titre:string="Demo du Data Binding Interpolation";
  status:boolean=false;
  nom:string="Rahma Ben Hassine"
  ngOnInit():void{
  
  }
  changerTitre()
  {
    this.titre="New Title!";
  }
}

