from artists import ArtistsService
from artists_pb2 import ArtistRequest, NearbyArtistsRequest, GenreArtistRequest
from assets_pb2 import Location
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
    request = NearbyArtistsRequest(location=Location(name="Brooklyn",
                                                     longitude=0.1,
                                                     latitude=0.1),
                                  max_artists=10)
    nearby = client.GetNearbyArtists(request, None)
    print(nearby)

    print("success")