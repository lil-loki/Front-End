import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-vehicleregistration',
  templateUrl: './vehicleregistration.component.html',
  styleUrls: ['./vehicleregistration.component.css']
})
export class VehicleregistrationComponent implements OnInit {
  registerForm: any;

  constructor(private service:UserServiceService,private router:Router) { }
  vehicleRegister: any;

  userId:any="";
  ngOnInit(): void
  {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['Login']);
    }

    this.vehicleRegister = new FormGroup({
      "VehicleName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "VehicleYear": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      "VehicleColour": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "VehicleModel": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "ExShowroomPrice": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      "OnRoadPrice": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
    });
  }
  get vehiclename() { return this.registerForm.get('VehicleName'); }
  get vehicleyear() { return this.registerForm.get('VehicleYear'); }
  get vehiclecolor() { return this.registerForm.get('VehicleColour'); }
  get vheiclemodel() { return this.registerForm.get('VehicleModel'); }
  get pasexshowroomprice() { return this.registerForm.get('ExShowroomPrice'); }
  get onroadprice() { return this.registerForm.get('OnRoadPrice'); }

  VehicleId:any;
  VehicleName:any;
  VehicleModel:any;
  VehicleType:any;
  VehicleYear:any;
  VehicleColour:any;
  ExShowroomPrice:any;
  OnRoadPrice:any;

  registerVehicle() {
    var vehicle = new Vehicle();
    vehicle.vehicleId = this.VehicleId;
    vehicle.exShowroomPrice = this.ExShowroomPrice;
    vehicle.onRoadPrice = this.OnRoadPrice;
    vehicle.vehicleColour = this.VehicleColour;
    vehicle.vehicleName = this.VehicleName;
    vehicle.vehicleModel = this.VehicleModel;
    vehicle.vehicleType = this.VehicleType;
    vehicle.vehicleYear = this.VehicleYear;

    this.service.registerVehicle(vehicle).subscribe(
      (      vehicle: { status: string; })=>{
        if(vehicle.status=='SUCCESS')
        {
          console.log(vehicle)
          alert("New Vehicle Registered!!");
          this.router.navigate(['UserDashboard'])
        }
        else
        {
          alert("Vehicle Already Exists !!");
        }
      }
    )
  }

}
