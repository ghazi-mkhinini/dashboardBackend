import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //---Generate Swagger docs
  const config = new DocumentBuilder()
    .setTitle('Industrial Backend')
    .setDescription('The Factory API description')
    .setVersion('3.4')
    .addTag('Factory')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //NestJs Server Start
  await app.listen(3001);
}
bootstrap();
