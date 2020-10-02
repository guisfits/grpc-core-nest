import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import GreeterService from './greeter.service';
import HelloReply from './hello.model';

@Controller('api/greeters')
export class GreeterController implements OnModuleInit {

    private service: GreeterService;

    constructor(
        @Inject('GREETER_PACKAGE') private client: ClientGrpc
    ) { }

    onModuleInit() {
        this.service = this.client.getService<GreeterService>('Greeter');
    }

    @Get("/:name")
    get(@Param('name') name: string): Observable<HelloReply> {
        return this.service.sayHello({ name });
    }
}
