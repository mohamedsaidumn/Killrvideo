import { GrpcServer } from "./grpc-server/server";
import { services } from "./services/index";
import config from "./common/config";
import { logger, setLoggingLevel } from "./common/logging";

//Start the application
class KillrvideoApp {
  constructor() {}

  startAsync(): void {
    let loggingLevel: string = config.get("loggingLevel");
    logger.log(loggingLevel, `Logging initialized at ${loggingLevel}`);

    let server = new GrpcServer(services);
    server.start();
    logger.log("info", "KillrVideo has started. Press Ctrl+C to exit.");
  }
}

let app = new KillrvideoApp();

app.startAsync();
