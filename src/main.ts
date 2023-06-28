import { http } from '@nitric/sdk';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;

async function listen() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

http(listen, port, () => {
  console.log(`Application listening on ${port}`);
});
