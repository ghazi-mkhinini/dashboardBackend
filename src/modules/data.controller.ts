import { Body, Controller, Get, HttpCode, Post, UseGuards } from "@nestjs/common";
import { dataService } from "./data.service";

@Controller('/test')
export class requestController{
    constructor(private readonly dataService:dataService){}

    @Get('')
    getRequest(@Body() pieData)
    {
        return this.dataService.getData(pieData);
    }


}