import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { GreeterController } from './greeter/greeter.controller';
import { grpcClientOptions } from './grpc.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GREETER_PACKAGE',
        ... grpcClientOptions
      }
    ])
  ],
  controllers: [GreeterController],
})
export class AppModule {}
