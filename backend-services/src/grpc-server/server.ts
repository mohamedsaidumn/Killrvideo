import EventEmitter from "events";
import conf from "../common/config";
import { service } from "../common/types";
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { addReflection } from "grpc-server-reflection";

/**
 * Class that wraps an underlying Grpc server object and allows it to be started/stopped. Emits
 * 'start' and 'stop' events for when this happens.
 */
export class GrpcServer extends EventEmitter {
  _services: service[] = [];

  constructor(services: service[]) {
    super();
    this._services = services;
  }

  /**
   * Start the server and all Grpc services.
   */

  start(): void {
    let server = new Server();

    const path =
      "/Users/mohamedsaid/Desktop/Playground/Killrvideo/backend-services/protos/generated/killrvideo_proto_descriptor.pb";

    addReflection(server, path);

    // Figure out where to listen
    let listen = conf.get("listen");
    let ipAndPort = `${listen.ip}:${listen.port}`;

    // Bind the server and start all services

    // // Save stop method
    // this._stopAsync = Promise.promisify(server.tryShutdown, {
    //   context: server,
    // });

    // Add all available services to the Grpc Server
    this._services.forEach((service) => {
      server.addService(service.service, service.implementation);
    });

    server.bindAsync(
      ipAndPort,
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
  }
}
