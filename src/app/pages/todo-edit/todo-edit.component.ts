import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  idTodos : number;

  constructor(route:ActivatedRoute) {
    this.idTodos = route.snapshot.params['id']
    console.log(this.idTodos);
  }

  ngOnInit(): void {
    this.getTodoById()
  }

  getTodoById(){
    axios.get("http://127.0.0.1:3000/todo/"+this.idTodos+"/getTodo").then(
      res=>console.log(res.data)
    )
    .catch(
      err=>console.log(err)
    )
  }

  EditTodos(form:NgForm){

  }

}
