import { Body, Controller, Get, HttpCode, Post, UseGuards } from "@nestjs/common";
import { dataService } from "./data.service";
import { pieDataDto } from "./pieData.dto";

@Controller('/test')
export class requestController{
    constructor(private readonly dataService:dataService){}

    @Get('')
    getRequest(@Body() pieData:pieDataDto)
    {
        return this.dataService.getData(pieData);
    }


}