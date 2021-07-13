from artists import ArtistsService
from artists_pb2 import ArtistRequest
import grpc
from artists_pb2_grpc import ArtistsStub

if __name__ == "__main__":
    channel = grpc.insecure_channel("localhost:50051")
    client = ArtistsStub(channel)
    request = ArtistRequest(user_id=1)
    client.GetArtistLocation(request, None)
    client.GetArtistPrice(request)
    client.GetArtistContactInfo(request)
    client.GetArtist(request)
    print("success")