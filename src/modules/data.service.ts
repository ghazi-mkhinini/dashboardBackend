import { Body, Injectable } from "@nestjs/common";
import { json } from "stream/consumers";



@Injectable()
export class dataService{

  getData(@Body() data):string{
    console.log("request Service Responding message: "+data)
    return data;
  }
}