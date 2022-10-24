import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoEditComponent } from './pages/todo-edit/todo-edit.component';

const routes: Routes = [
  { path : '' , redirectTo:'todo/list' ,pathMatch : 'full' },
  { path : 'todo/list' , component : TodoListComponent },
  { path : 'todo/form/ajouter' , component : TodoAddComponent },
  { path : 'todo/form/modifier/:id' , component : TodoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
