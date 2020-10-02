import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'greet', 
    protoPath: join(__dirname, './greeter/greet.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
  },
};
