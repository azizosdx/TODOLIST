import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  public todos = ([] as any[]);;

  constructor() { }

  ngOnInit(): void {
    this.getTodosList();
  }

  getTodosList(){

    axios.get('http://127.0.0.1:3000/todo/lister').then(
      res => {
        console.log(res);
        this.todos = res.data.listTodos ;
      }
    ).catch(
      err =>{
        console.log(err);
      }

    )

  }

  DeleteTodo(id: string){
    if (confirm('vouler vous vraiment supprimer ce todo')){
    axios.get('http://127.0.0.1:3000/todo/'+id+'/supprimer').then(
      res=> {
        Swal.fire({
          title: 'succee',
          text: 'Todo supprimée avec succee',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.todos=this.todos.filter((todo:any)=>
           todo._id!==id
        )
      }
    ).catch(
      err=>{
        Swal.fire({
          title: 'erreur',
          text: 'erreur de suppression',
          icon: 'error',
          confirmButtonText: 'OK'
        })

      }
    )
  }
  }

}
