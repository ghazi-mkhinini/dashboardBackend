import { Body, Controller, Get, HttpCode, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { dataService } from "./data.service";
import { pieDataDto } from "./pieData.dto";

@Controller('/test')
export class requestController{
    constructor(private readonly dataService:dataService){}

    @Get('')
    getPieData(@Body() body)
    {
        return this.dataService.getPieData(body);
    }

    @Post('')
    @UsePipes(ValidationPipe)
    createPieData(@Body() pieData:pieDataDto)
    {
        return this.dataService.setPieData(pieData);
    }


}