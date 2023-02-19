import { GrpcServer } from "./grpc-server/server";
import { services } from "./services/index";

//we add our service implementation to the Users Server
//we start our server on implementation on socket localhost:port
//the connection we create is insecure so anybody in the middle can read the data

let server = new GrpcServer(services);
server.start();

//server.start();
