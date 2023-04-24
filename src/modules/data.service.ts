import { Body, Injectable } from "@nestjs/common";
import  {PieData}  from "../data/pieData";



@Injectable()
export class dataService{
  

  getData(@Body() data){
    console.log("request Service Responding message: "+PieData[0])
    return PieData[0];
  }
}