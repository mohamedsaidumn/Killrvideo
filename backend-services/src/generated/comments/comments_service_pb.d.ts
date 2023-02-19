// package: killrvideo.comments
// file: comments/comments_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_types_pb from "../common/common_types_pb";

export class CommentOnVideoRequest extends jspb.Message { 

    hasVideoId(): boolean;
    clearVideoId(): void;
    getVideoId(): common_common_types_pb.Uuid | undefined;
    setVideoId(value?: common_common_types_pb.Uuid): CommentOnVideoRequest;

    hasUserId(): boolean;
    clearUserId(): void;
    getUserId(): common_common_types_pb.Uuid | undefined;
    setUserId(value?: common_common_types_pb.Uuid): CommentOnVideoRequest;

    hasCommentId(): boolean;
    clearCommentId(): void;
    getCommentId(): common_common_types_pb.TimeUuid | undefined;
    setCommentId(value?: common_common_types_pb.TimeUuid): CommentOnVideoRequest;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): string | undefined;
    setComment(value: string): CommentOnVideoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommentOnVideoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CommentOnVideoRequest): CommentOnVideoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommentOnVideoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommentOnVideoRequest;
    static deserializeBinaryFromReader(message: CommentOnVideoRequest, reader: jspb.BinaryReader): CommentOnVideoRequest;
}

export namespace CommentOnVideoRequest {
    export type AsObject = {
        videoId?: common_common_types_pb.Uuid.AsObject,
        userId?: common_common_types_pb.Uuid.AsObject,
        commentId?: common_common_types_pb.TimeUuid.AsObject,
        comment?: string,
    }
}

export class CommentOnVideoResponse extends jspb.Message { 

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): string | undefined;
    setResponse(value: string): CommentOnVideoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommentOnVideoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CommentOnVideoResponse): CommentOnVideoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommentOnVideoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommentOnVideoResponse;
    static deserializeBinaryFromReader(message: CommentOnVideoResponse, reader: jspb.BinaryReader): CommentOnVideoResponse;
}

export namespace CommentOnVideoResponse {
    export type AsObject = {
        response?: string,
    }
}
