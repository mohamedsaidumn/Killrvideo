// package: google.api
// file: google/api/routing.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class RoutingRule extends jspb.Message { 
    clearRoutingParametersList(): void;
    getRoutingParametersList(): Array<RoutingParameter>;
    setRoutingParametersList(value: Array<RoutingParameter>): RoutingRule;
    addRoutingParameters(value?: RoutingParameter, index?: number): RoutingParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoutingRule.AsObject;
    static toObject(includeInstance: boolean, msg: RoutingRule): RoutingRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoutingRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoutingRule;
    static deserializeBinaryFromReader(message: RoutingRule, reader: jspb.BinaryReader): RoutingRule;
}

export namespace RoutingRule {
    export type AsObject = {
        routingParametersList: Array<RoutingParameter.AsObject>,
    }
}

export class RoutingParameter extends jspb.Message { 
    getField(): string;
    setField(value: string): RoutingParameter;
    getPathTemplate(): string;
    setPathTemplate(value: string): RoutingParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoutingParameter.AsObject;
    static toObject(includeInstance: boolean, msg: RoutingParameter): RoutingParameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoutingParameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoutingParameter;
    static deserializeBinaryFromReader(message: RoutingParameter, reader: jspb.BinaryReader): RoutingParameter;
}

export namespace RoutingParameter {
    export type AsObject = {
        field: string,
        pathTemplate: string,
    }
}

export const routing: jspb.ExtensionFieldInfo<RoutingRule>;
