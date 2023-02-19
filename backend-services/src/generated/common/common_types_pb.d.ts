// package: killrvideo.common
// file: common/common_types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Uuid extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): string | undefined;
    setValue(value: string): Uuid;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uuid.AsObject;
    static toObject(includeInstance: boolean, msg: Uuid): Uuid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uuid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uuid;
    static deserializeBinaryFromReader(message: Uuid, reader: jspb.BinaryReader): Uuid;
}

export namespace Uuid {
    export type AsObject = {
        value?: string,
    }
}

export class TimeUuid extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): string | undefined;
    setValue(value: string): TimeUuid;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeUuid.AsObject;
    static toObject(includeInstance: boolean, msg: TimeUuid): TimeUuid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeUuid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeUuid;
    static deserializeBinaryFromReader(message: TimeUuid, reader: jspb.BinaryReader): TimeUuid;
}

export namespace TimeUuid {
    export type AsObject = {
        value?: string,
    }
}
