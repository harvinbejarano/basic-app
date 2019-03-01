import { ClientComponent } from './client/client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ClientComponent, ProjectComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  exports: [ClientComponent, ProjectComponent]
})
export class ClientsModule { }
