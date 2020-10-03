import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrainingComponent } from './add-training/add-training.component';
import { DeleteTrainingComponent } from './delete-training/delete-training.component';
import { EditTrainingComponent } from './edit-training/edit-training.component';
import { ViewTrainingComponent } from './view-training/view-training.component';


const routes: Routes = [
  {path:'addtraining',component:AddTrainingComponent},
  {path:'viewtrainings',component:ViewTrainingComponent},
  {path:'edittraining',component:EditTrainingComponent},
  {path:'deletetraining',component:DeleteTrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
