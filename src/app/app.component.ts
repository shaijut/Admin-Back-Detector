import { Component , OnInit } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employeeList = [];

  constructor(private employeeServiceService: EmployeeServiceService) { }

  ngOnInit() {

    this.employeeServiceService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.employeeList = data;
    })  
  }
}
