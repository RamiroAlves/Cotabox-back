import { AppModule } from '@infra/modules/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitando CORS
  app.enableCors({
    origin: 'https://cotabox-page.vercel.app/',
    credentials: true
  })

  await app.listen(3010);
}
bootstrap();
