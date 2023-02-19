import { UntypedServiceImplementation, ServiceDefinition } from "@grpc/grpc-js";

export type service = {
  name: string;
  service: ServiceDefinition;
  implementation: UntypedServiceImplementation;
};
