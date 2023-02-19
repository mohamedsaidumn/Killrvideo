# why does PROTO_DIR work for poth output directores ????????
PROTO_DIR=./protos/generated


# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=grpc_js:${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./protos \
    protos/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_DIR} \
    --descriptor_set_out=${PROTO_DIR}/killrvideo_proto_descriptor.pb\
    -I ./protos \
    --include_imports protos/*.proto


#ANA_DIR=./proto/generated/google/api
#why does the ANA_DIR not the way to do it and PROTO_DIR is the way
#what is binary

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --proto_path=./protos \
    protos/google/api/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR} \
    --proto_path=./protos\
    protos/google/api/*.proto

