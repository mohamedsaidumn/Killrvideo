// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var comments_comments_service_pb = require('../comments/comments_service_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var common_common_types_pb = require('../common/common_types_pb.js');

function serialize_killrvideo_comments_CommentOnVideoRequest(arg) {
  if (!(arg instanceof comments_comments_service_pb.CommentOnVideoRequest)) {
    throw new Error('Expected argument of type killrvideo.comments.CommentOnVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_killrvideo_comments_CommentOnVideoRequest(buffer_arg) {
  return comments_comments_service_pb.CommentOnVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_killrvideo_comments_CommentOnVideoResponse(arg) {
  if (!(arg instanceof comments_comments_service_pb.CommentOnVideoResponse)) {
    throw new Error('Expected argument of type killrvideo.comments.CommentOnVideoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_killrvideo_comments_CommentOnVideoResponse(buffer_arg) {
  return comments_comments_service_pb.CommentOnVideoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages comments
var CommentsServiceService = exports.CommentsServiceService = {
  // Add a new comment to a video
commentOnVideo: {
    path: '/killrvideo.comments.CommentsService/CommentOnVideo',
    requestStream: false,
    responseStream: false,
    requestType: comments_comments_service_pb.CommentOnVideoRequest,
    responseType: comments_comments_service_pb.CommentOnVideoResponse,
    requestSerialize: serialize_killrvideo_comments_CommentOnVideoRequest,
    requestDeserialize: deserialize_killrvideo_comments_CommentOnVideoRequest,
    responseSerialize: serialize_killrvideo_comments_CommentOnVideoResponse,
    responseDeserialize: deserialize_killrvideo_comments_CommentOnVideoResponse,
  },
};

exports.CommentsServiceClient = grpc.makeGenericClientConstructor(CommentsServiceService);
