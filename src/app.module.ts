import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataModule } from './modules/data.module';
import { requestController } from './modules/data.controller';
import { dataService } from './modules/data.service';

@Module({
  imports: [dataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
