import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './baby';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {
  employeeform!:FormGroup;
  data:undefined|datamodel[];
  constructor(private formbuilder:FormBuilder,private api:ApiService) {}

  ngOnInit(): void {
    this.employeeform=this.formbuilder.group({
      name:['',Validators.required],
      time:['',Validators.required],
      dob:['',Validators.required],
      male:['',Validators.required],
      female:['',Validators.required],
      others:['',Validators.required],
      mother:['',Validators.required],
      father:['',Validators.required],
      contact:['',Validators.required],
      adress:['',Validators.required],
    })
    this.getemployee();
  }
  addemployee(data:any){
   // console.log(data)
    this.api.addemployee(data).subscribe((res=>{
      this.employeeform.reset();
    }))
    this.getemployee();
  }

  getemployee(){
    this.api.getemployee().subscribe(res=>{
      this.data=res;
    })
  }
}
