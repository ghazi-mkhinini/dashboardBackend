import { Module } from "@nestjs/common";
import { requestController } from "./data.controller";
import { dataService } from "./data.service";

@Module({
  imports: [],
  controllers: [requestController],
  providers: [dataService],
})
export class dataModule {}