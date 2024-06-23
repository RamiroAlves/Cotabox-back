import { AppModule } from '@infra/modules/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitando CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  })

  await app.listen(3010);
}
bootstrap();
