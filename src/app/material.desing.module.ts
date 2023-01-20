import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    imports: [
        MatSlideToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatIconModule
   
      ],
    exports:[
        MatSlideToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatGridListModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatIconModule
        
    ]
})

export class AppMaterialDesing{}