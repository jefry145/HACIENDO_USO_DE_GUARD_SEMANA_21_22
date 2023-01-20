import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/servicios/data.service';
export interface Tile{
  cols:number;
  rows:number;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  Users=[{}]
  RegisterUser(){
    console.log(this.Form.value)
    if(this.Form.value.name == "master" && this.Form.value.password == "12345678"){

    }else{
      this.Users.push({user:this.Form.value.name , pass: this.Form.value.password })
      localStorage.setItem( 'Users',JSON.stringify(this.Users))
    }
  }
  deleteDatabase(){
    localStorage.removeItem('Users')
  }

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
