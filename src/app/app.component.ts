import { Component } from '@angular/core';
import { DataService } from './servicios/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad22';
  show:any
  Validacion(){
    this.show=this.data.ValidacionMaster
  }

  constructor(public data:DataService){}
  
  closeSesion(){
    localStorage.removeItem("UserLogin")
    this.show=this.data.ValidacionMaster=false
    alert("Session Closed")
  }
}
