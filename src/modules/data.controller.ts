import { Controller, Get, UseGuards } from "@nestjs/common";
import { dataService } from "./data.service";

@Controller('/test')
export class requestController{
    constructor(private readonly dataService:dataService){}

    @Get('')
    getRequest()
    {
        return this.dataService.getData();
    }

}