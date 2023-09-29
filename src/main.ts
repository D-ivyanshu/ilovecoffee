import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // this thing is cool we can transform the types implicit by using this globally
      whitelist: true, // remove the extra keys added if send in body
    }),
  );
  await app.listen(3000);
}
bootstrap();
