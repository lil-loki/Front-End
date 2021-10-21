import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-vehicleregistration',
  templateUrl: './vehicleregistration.component.html',
  styleUrls: ['./vehicleregistration.component.css']
})
export class VehicleregistrationComponent implements OnInit {

  constructor(private service:UserServiceService,private router:Router) { }

  userId:any="";
  ngOnInit(): void
  {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['Login']);
    }
  }

  VehicleId:string="";
  VehicleName:string="";
  VehicleModel:string="";
  VehicleType:string | undefined;
  VehicleYear:number | undefined;
  VehicleColour:string="";
  ExShowroomPrice:number | undefined;
  OnRoadPrice:number | undefined;

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
          window.location.reload();
        }
        else
        {
          alert("Vehicle Already Exists !!");
        }
      }
    )
  }

}
