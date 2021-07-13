#!/bin/bash
rm */*_pb2.py
rm */*_grpc.py

python -m grpc_tools.protoc -I protobufs --python_out=artists --grpc_python_out=artists protobufs/assets.proto
python -m grpc_tools.protoc -I protobufs --python_out=artists --grpc_python_out=artists protobufs/enums.proto
python -m grpc_tools.protoc -I protobufs --python_out=artists --grpc_python_out=artists protobufs/artists.proto

python -m grpc_tools.protoc -I protobufs --python_out=bookers --grpc_python_out=bookers protobufs/assets.proto
python -m grpc_tools.protoc -I protobufs --python_out=bookers --grpc_python_out=bookers protobufs/enums.proto
python -m grpc_tools.protoc -I protobufs --python_out=bookers --grpc_python_out=bookers protobufs/bookers.proto

python -m grpc_tools.protoc -I protobufs --python_out=bookings --grpc_python_out=bookings protobufs/assets.proto
python -m grpc_tools.protoc -I protobufs --python_out=bookings --grpc_python_out=bookings protobufs/enums.proto
python -m grpc_tools.protoc -I protobufs --python_out=bookings --grpc_python_out=bookings protobufs/bookings.proto