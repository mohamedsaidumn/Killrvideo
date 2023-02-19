// package: killrvideo.comments
// file: comments/comments_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as comments_comments_service_pb from "../comments/comments_service_pb";
import * as common_common_types_pb from "../common/common_types_pb";

interface ICommentsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    commentOnVideo: ICommentsServiceService_ICommentOnVideo;
}

interface ICommentsServiceService_ICommentOnVideo extends grpc.MethodDefinition<comments_comments_service_pb.CommentOnVideoRequest, comments_comments_service_pb.CommentOnVideoResponse> {
    path: "/killrvideo.comments.CommentsService/CommentOnVideo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<comments_comments_service_pb.CommentOnVideoRequest>;
    requestDeserialize: grpc.deserialize<comments_comments_service_pb.CommentOnVideoRequest>;
    responseSerialize: grpc.serialize<comments_comments_service_pb.CommentOnVideoResponse>;
    responseDeserialize: grpc.deserialize<comments_comments_service_pb.CommentOnVideoResponse>;
}

export const CommentsServiceService: ICommentsServiceService;

export interface ICommentsServiceServer extends grpc.UntypedServiceImplementation {
    commentOnVideo: grpc.handleUnaryCall<comments_comments_service_pb.CommentOnVideoRequest, comments_comments_service_pb.CommentOnVideoResponse>;
}

export interface ICommentsServiceClient {
    commentOnVideo(request: comments_comments_service_pb.CommentOnVideoRequest, callback: (error: grpc.ServiceError | null, response: comments_comments_service_pb.CommentOnVideoResponse) => void): grpc.ClientUnaryCall;
    commentOnVideo(request: comments_comments_service_pb.CommentOnVideoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_comments_service_pb.CommentOnVideoResponse) => void): grpc.ClientUnaryCall;
    commentOnVideo(request: comments_comments_service_pb.CommentOnVideoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_comments_service_pb.CommentOnVideoResponse) => void): grpc.ClientUnaryCall;
}

export class CommentsServiceClient extends grpc.Client implements ICommentsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public commentOnVideo(request: comments_comments_service_pb.CommentOnVideoRequest, callback: (error: grpc.ServiceError | null, response: comments_comments_service_pb.CommentOnVideoResponse) => void): grpc.ClientUnaryCall;
    public commentOnVideo(request: comments_comments_service_pb.CommentOnVideoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: comments_comments_service_pb.CommentOnVideoResponse) => void): grpc.ClientUnaryCall;
    public commentOnVideo(request: comments_comments_service_pb.CommentOnVideoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: comments_comments_service_pb.CommentOnVideoResponse) => void): grpc.ClientUnaryCall;
}
