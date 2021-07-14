cd tidal-gigs-frontend || exit
PATH=$PATH:node_modules/.bin  # need this for generation to work - also have to have npm stuff installed
rm src/protos/*
protoc -I ../protobufs ../protobufs/assets.proto --js_out=import_style=commonjs,binary:src/protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/protos
protoc -I ../protobufs ../protobufs/artists.proto --js_out=import_style=commonjs,binary:src/protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/protos
protoc -I ../protobufs ../protobufs/enums.proto --js_out=import_style=commonjs,binary:src/protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/protos