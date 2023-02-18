import { Server, ServerCredentials } from "@grpc/grpc-js";
import { CommentsServiceService } from "../proto/generated/comments_service_grpc_pb";
import { CommentsServiceServer } from "./services";
import { addReflection } from "grpc-server-reflection";

//we add our service implementation to the Users Server
//we start our server on implementation on socket localhost:port
//the connection we create is insecure so anybody in the middle can read the data

const server = new Server();
const path =
  "/Users/mohamedsaid/Desktop/Playground/Killrvideo/Backend/proto/generated/killrvideo_proto_descriptor.pb";
addReflection(server, path);
server.addService(CommentsServiceService, new CommentsServiceServer());

const port = 3000;
const uri = `0.0.0.0:${port}`;
console.log(`Listening on ${uri}`);
server.bindAsync(
  uri,
  ServerCredentials.createInsecure(),
  (err: Error | null, port: number) => {
    if (err) {
      console.error(`Server error: ${err.message}`);
    } else {
      console.log(`Server bound on port: ${port}`);
      server.start();
    }
  }
);

//server.start();
