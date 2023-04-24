import { Body, Controller, Get, HttpCode, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { dataService } from "./data.service";
import { pieDataDto } from "./pieData.dto";

@Controller('/test')
export class requestController{
    constructor(private readonly dataService:dataService){}

    @Get('')
    @UsePipes(ValidationPipe)
    getRequest(@Body() pieData:pieDataDto)
    {
        return this.dataService.getData(pieData);
    }


}