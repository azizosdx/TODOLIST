import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AddTodos(addform :NgForm){
    console.log(addform.value);
    axios.post('http://127.0.0.1:3000/todo/ajouter',addform.value).then(
      res =>{
        console.log(res);
        Swal.fire({
          title: 'succee',
          text: 'Todo ajouter avec succee',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        addform.reset();
      }
    ).catch(
      err => {
        console.log(err)
        Swal.fire({
          title: 'erreur',
          text: 'erreur d\'ajout',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    )

  }

}
