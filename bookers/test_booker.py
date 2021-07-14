from bookers import BookersService
from bookers_pb2 import (BookerRequest,
                         BookerResponse)
from assets_pb2 import ContactInfo
import grpc
from bookers_pb2_grpc import BookersStub

if __name__ == "__main__":
    channel = grpc.insecure_channel("localhost:50051")
    client = BookersStub(channel)
    contact_info = ContactInfo(email="soggytoast@gmail.com",
                               phone="999999999",
                               website="soggytoast.com")
    request = AddBookerRequest(name="Soggy Toast",
                               city="LA",
                               asking_price=500,
                               contact_info = contact_info,
                               booking_count=5)
    client.AddBooker(request, None)
    request = BookerRequest(id=1)
    booker = client.GetBooker(request, None)