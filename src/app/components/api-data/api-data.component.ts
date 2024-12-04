import { Component, OnInit } from '@angular/core';
import { ICar, CarService } from '../../service/car.service';
import { IUser, UserService } from '../../service/user.service';


@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css'
})
export class ApiDataComponent implements OnInit{
  // cars : ICar[] = [];
  users : IUser[] = [];
  
  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => (this.users = data))
  }
}
