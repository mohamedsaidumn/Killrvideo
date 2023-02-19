import convict from "convict";

// Create application config
const conf = convict({
  loggingLevel: {
    doc: "The default logger output level",
    format: String,
    default: "verbose",
    env: "KILLRVIDEO_LOGGING_LEVEL",
  },
  listen: {
    ip: {
      doc: "The IP address for Grpc services to listen on",
      format: String,
      default: "0.0.0.0",
      env: "KILLRVIDEO_LISTEN_IP",
    },

    port: {
      doc: "The Port for Grpc services to listen on",
      format: "port",
      default: 3000,
      env: "KILLRVIDEO_LISTEN_PORT",
    },
  },
});

//conf.loadFile("./config/services.json");

// Validate the config and export it
conf.validate();

export default conf;
