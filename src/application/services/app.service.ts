import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  beforeApplicationShutdown() {
    console.log('ANTES DA APLICAÇÃO FECHAR');
  }

  onApplicationShutdown(signal: string) {
    console.log('A APLICAÇÃO FECHOU');
    console.log(signal);
  }
}
