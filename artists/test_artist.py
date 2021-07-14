from artists import ArtistsService
from artists_pb2 import ArtistRequest, AddArtistRequest
from assets_pb2 import ContactInfo
import grpc
from artists_pb2_grpc import ArtistsStub

if __name__ == "__main__":
    channel = grpc.insecure_channel("localhost:50051")
    client = ArtistsStub(channel)
    contact_info = ContactInfo(email="jayz@gmail.com",
                               phone="111111111",
                               website="jayz.com")
    request = AddArtistRequest(name="Jay Z",
                               city="BROOKLYN",
                               price=1000,
                               contact_info = contact_info,
                               rating="FIVE",
                               genre="HIPHOP",
                               booking_count=10,
                               type="SOLO")
    client.AddArtist(request, None)
    request = ArtistRequest(id=1)
    artist = client.GetArtist(request, None)

    print(artist)