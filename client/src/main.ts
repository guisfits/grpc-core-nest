import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions} from '@nestjs/microservices';
import { grpcClientOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
