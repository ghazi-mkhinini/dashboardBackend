import { Injectable } from "@nestjs/common";



@Injectable()
export class dataService{

  getData():string{
    const message="request service test";
    console.log("request Service Responding message: "+message)
    return message;
  }
}