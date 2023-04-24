import { Body, Controller, Get, HttpCode, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { dataService } from "./data.service";
import { pieDataDto } from "./pieData.dto";

@Controller('/test')
export class requestController{
    constructor(private readonly dataService:dataService){}

    @Get('')
    @UsePipes(ValidationPipe)
    getPieData(@Body() pieData:pieDataDto)
    {
        return this.dataService.getPieData(pieData);
    }

    @Post('')
    @UsePipes(ValidationPipe)
    createPieData(@Body() pieData:pieDataDto)
    {
        return this.dataService.setPieData(pieData);
    }


}