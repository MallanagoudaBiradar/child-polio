import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router,ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../baby/baby';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public dataid!:number;
  public employee!:datamodel;
  constructor(private activedroute:ActivatedRoute, private router:Router, private api:ApiService){}

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']("id");
     // console.log("data id is", this.dataid)
    })
    this.api.fetchdata(this.dataid).subscribe((data:datamodel)=>{
      this.employee=data;
    })
  }
  update(){
    this.api.updateemployee(this.employee,this.dataid).subscribe((res:datamodel)=>{
      this.router.navigate(["/"])
    })
  }
}
