To set up database for playing around run:

```
mysql
source artists/database.sql
source artists/fake_data.sql
```

Weird grpc command:
```angular2
python -m grpc_tools.protoc -I protobufs --python_out=artists \
         --grpc_python_out=artists protobufs/artists.proto
```