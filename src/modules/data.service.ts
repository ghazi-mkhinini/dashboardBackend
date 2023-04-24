import { Body, Injectable } from "@nestjs/common";
import  {pieData}  from "../data/pieData";



@Injectable()
export class dataService{
  

  getData(@Body() data){
    console.log("request Service Responding message: "+pieData[0])
    return pieData[0];
  }
}