import {
  ServerUnaryCall,
  sendUnaryData,
  UntypedHandleCall,
} from "@grpc/grpc-js";
import { ICommentsServiceServer } from "../proto/generated/comments_service_grpc_pb";
import {
  CommentOnVideoRequest,
  CommentOnVideoResponse,
} from "../proto/generated/comments_service_pb";

//this class implements our server interface
export class CommentsServiceServer implements ICommentsServiceServer {
  [name: string]: UntypedHandleCall;

  commentOnVideo(
    call: ServerUnaryCall<CommentOnVideoRequest, CommentOnVideoResponse>,
    callback: sendUnaryData<CommentOnVideoResponse>
  ): void {
    const resp: CommentOnVideoResponse = new CommentOnVideoResponse();
    // if (!call.request.getCommentId()) {
    //   resp.setResponse("no commentId");
    //   callback(null, resp);
    // }
    const req: CommentOnVideoRequest = call.request;
    // const reqString: string = req.hasCommentId()
    //   ? req.getCommentId()?.hasValue()
    //     ? req.getCommentId()?.getValue()
    //     : "no value Comment Id"
    //   : "No messageCommentId";
    // const respString: string = reqString + " " + reqString + " " + reqString;
    console.log(req);
    resp.setResponse("i got the ping");
    callback(null, resp);
    return;
  }
}
