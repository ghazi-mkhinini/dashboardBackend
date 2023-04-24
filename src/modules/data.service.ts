import { Injectable } from "@nestjs/common";
import  { pieData }  from "../data/pieData";
import { pieDataDto } from "./pieData.dto";



@Injectable()
export class dataService{
  

  
  getPieData(data:pieDataDto){
    //console.log("request Service Responding message: "+pieData[0])
    return data;
  }

  setPieData(data:pieDataDto){
    console.log("request Service Responding message: "+JSON.stringify(data)) 
    pieData.push(data);
    return pieData;

  }
}