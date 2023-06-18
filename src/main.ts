import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NDJSONInterceptor } from './ndjson.intercepter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new NDJSONInterceptor());
  await app.listen(3000);
}
bootstrap();
