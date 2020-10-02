import { Observable } from "rxjs";
import HelloReply from "./hello.model";

export default interface GreeterService {
    sayHello(hello: { name: string }): Observable<HelloReply>
}
