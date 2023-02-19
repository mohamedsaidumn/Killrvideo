import { createLogger, transports as CoreTransports, format } from "winston";

/**
 * The default winston logger instance.
 */
export const logger = createLogger({
  transports: [
    new CoreTransports.Console({
      level: "verbose",
      stderrLevels: ["error"],
      format: format.combine(
        format.timestamp({
          format: "ddd MMM DD YYYY HH:mm:ss", // Optional for choosing your own timestamp format.
        }),
        format.json()
      ),
    }),
  ],
});

/**
 * Adjust the logging level of the default logger instance.
 */
export function setLoggingLevel(loggingLevel: string) {
  logger.transports[0].level = loggingLevel;
}

export default logger;
