# why does PROTO_DIR work for poth output directores ????????
GEN_PROTO_DIR=./protos/generated
COMMENTS_DIR=comments
COMMON_DIR=common
GOOGLE_API_DIR=google/api



# # Generate JavaScript code
# yarn run grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:${GEN_PROTO_DIR} \
#     --grpc_out=grpc_js:${GEN_PROTO_DIR} \
#     --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
#     -I ./protos \
#     protos/*.proto

# The I is the relative path for all my imports
# Generate TypeScript and js code for my proto code (d.ts) and grpc servce stub if applicable.
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${GEN_PROTO_DIR} \
    --grpc_out=grpc_js:${GEN_PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    --ts_out=grpc_js:${GEN_PROTO_DIR} \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --descriptor_set_out=${GEN_PROTO_DIR}/killrvideo_proto_descriptor.pb\
    -I ./protos \
    --include_imports protos/${COMMENTS_DIR}/*.proto protos/${COMMON_DIR}/*.proto

# Generate proto js and ts code for google api's protos
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${GEN_PROTO_DIR} \
    --ts_out=${GEN_PROTO_DIR} \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --proto_path=./protos \
    protos/${GOOGLE_API_DIR}/*.proto


#ANA_DIR=./proto/generated/google/api
#why does the ANA_DIR not the way to do it and PROTO_DIR is the way
#what is binary

cp -r protos/generated src/



