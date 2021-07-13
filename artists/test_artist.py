from artists import ArtistsService
from artists_pb2 import ArtistRequest, ArtistResponse
import grpc
from artists_pb2_grpc import ArtistsStub

channel = grpc.insecure_channel("localhost:50051")
client = ArtistsStub(channel)
request = ArtistRequest(user_id=1)
client.GetArtistLocation(request)
