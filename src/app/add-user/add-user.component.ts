import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  i: number = 103;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  addForm: FormGroup;

  ngOnInit() {
    
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

  }

  onSubmit() {
    this.addForm.value.id=this.i++;
    this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-user']);
      });
  }
  onBack(){
    this.router.navigate(['list-user']);
  }

}
