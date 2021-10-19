import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-vehicleregister',
  templateUrl: './vehicleregister.component.html',
  styleUrls: ['./vehicleregister.component.css']
})
export class VehicleregisterComponent implements OnInit {
  router: any;

  constructor(private service:UserServiceService) { }

  userId:any="";
  ngOnInit(): void 
  {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['user']);
    }
  }

  VehicleId:string="";
  VehicleName:string="";
  VehicleModel:string="";
  VehicleType:string="";
  VehicleYear:number=0;
  VehicleColour:string="";
  ExShowroomPrice:number=0;
  OnRoadPrice:number=0;

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
        }
        else
        {
          alert("User Already Exists !!");
        }
      }
    )
  }
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
