#!/usr/bin/env bash


# generate the reservation_service_definition.pb file that we can pass to envoy so that knows the grpc service
# we want to expose
yarn build 

if ! [ $? -eq 0 ]; then
    echo "protobuf compilation failed"
    exit 1
fi

# now we can start envoy in a docker container and map the configuration and service definition inside
# we use --network="host" so that envoy can access the grpc service at localhost:<port>
# the envoy-config.yml has configured envoy to run at port 51051, so you can access the HTTP/JSON
# api at localhost:51051


if ! [ -x "$(command -v docker)" ] ; then
    echo "docker command is not available, please install docker"
    echo "Install docker: https://store.docker.com/search?offering=community&type=edition"
    exit 1
fi

# check if sudo is required to run docker
if [ "$(groups | grep -c docker)" -gt "0" ]; then
    echo "Envoy will run at port 51051 (see envoy-config.yml)"
    docker run -it --rm --name envoy --network="host" \
             -v "$(pwd)/proto/generated/killrvideo_proto_descriptor.pb:/data/killrvideo_proto_descriptor.pb:ro" \
             -v "$(pwd)/envoy-config.yml:/etc/envoy/envoy.yaml:ro" \
             envoyproxy/envoy:v1.24.0
else
    echo "you are not in the docker group, running with sudo"
    echo "Envoy will run at port 8000 (see envoy-config.yml)"
    # sudo docker run --rm -it -p 51051:51051  --name envoy --network="host"\
    #          -v "$(pwd)/reservation_service_definition.pb:/data/reservation_service_definition.pb:ro" \
    #          -v "$(pwd)/envoy-config.yml:/etc/envoy/envoy.yaml:ro" \
    #          envoyproxy/envoy:v1.24.0
    sudo docker compose up -d
fi


