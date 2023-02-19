import { UntypedServiceImplementation, MethodDefinition } from "@grpc/grpc-js";
//import * as grpc from "@grpc/grpc-js";

import { CommentsServiceService } from "../../generated/comments/comments_service_grpc_pb";

import { CommentsServiceServer } from "./services";
import { ServiceDefinition } from "@grpc/grpc-js";

/**
 * The comments service implementation.
 */
const implementation: UntypedServiceImplementation =
  new CommentsServiceServer();

/**
 * Comments service, responsible for managing comments on videos.
 */
const name: string = "CommentsService";
const service: ServiceDefinition = CommentsServiceService;
export default {
  name,
  service,
  implementation,
};
