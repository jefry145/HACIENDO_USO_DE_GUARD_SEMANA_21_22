import { Component } from '@angular/core';
import { Validators , FormBuilder , FormGroup } from "@angular/forms";
import { DataService } from 'src/app/servicios/data.service';

export interface Tile{
  cols:number;
  rows:number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  //</ENVIO DE USUARIOS SIN RESTRICCIÒN>

  // SendUser(){
  //   console.log(this.Form.value.password)
  //   if(this.Form.value.name == "master" && this.Form.value.password == "12345678"){
  //     this.data.ValidacionMaster = true
  //   }else{}
  //   localStorage.setItem( 'UserLogin',JSON.stringify(this.Form.value))
  // }

  //</ENVIO DE USUARIOS SIN RESTRICCIÒN>

  //<INICIO DE SESION| SOLO CON CUENTA REGISTRADA>
  UserError:any
  DBUsers:any
  LoginUser(){
    this.DBUsers =(JSON.stringify(localStorage.getItem('Users')))
    
    var User=(JSON.parse(this.DBUsers))
    var Users= (JSON.parse(User))

    if(this.Form.value.name == "master" && this.Form.value.password == "12345678"){
      alert("Welcome admin!")
      this.data.ValidacionMaster = true
      localStorage.setItem( 'UserLogin',JSON.stringify(this.Form.value))
      this.UserError=""

    }else{
      // console.log(Users[1])
      for(let i of Users){
        if (i.user === this.Form.value.name && i.pass === this.Form.value.password) {
          alert(`Welcome ${this.Form.value.name}!`)
          localStorage.setItem( 'UserLogin',JSON.stringify(User))
          this.UserError=""
        }else{
         this.UserError="User not registered in the database"
        }
      }
    }
  }

  //</INICIO DE SESION| SOLO CON CUENTA REGISTRADA>

  //<GRIDS>

   tiles: Tile[]=[
    {cols:4 , rows:1}
   ]

  //</GRIDS>

  //<VALIDACION>
  constructor(private fb:FormBuilder , public data:DataService){}

  public Form!:FormGroup

  hide=true

   ngOnInit():void{
  this.Form=this.fb.group({
    name:[
      "",
      [Validators.required,
      Validators.minLength(3)]
    ],
    password:[
      "",
      [Validators.required,
      Validators.minLength(8)]
    ],
  })
   }
   //</VALIDACION>
}
