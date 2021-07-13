#I have no idea what any of these imports are
from concurrent import futures
import random
import pymysql
import grpc
from grpc_interceptor import ExceptionToStatusInterceptor
from grpc_interceptor.exceptions import NotFound
from artists_pb2 import ArtistRequest, ArtistResponse, ArtistLocationResponse, ArtistPriceResponse, ArtistContactInfoResponse
import artists_pb2_grpc

class ArtistsService(artists_pb2_grpc.ArtistsServicer):
    """Service thing for artists"""
    def __init__(self):
        self.conn = pymysql.connect(
            host='localhost',
            user='user',
            password="password",
            db='tidalsurfartist',
        )

    def GetArtist(self, request, context):
        #Initialize
        response = ArtistResponse()
        cur = self.conn.cursor()

        #Update artist fields
        cur.execute(f"select * from artist where id={request.user_id}")
        artist = cur.fetchone()
        response.user_id = artist[0]
        response.user_name = artist[1]
        print(type(self.GetArtistLocation(request, None).location))
        print(type(response.location))
        response.location = self.GetArtistLocation(request, None).location
        response.range = artist[3]
        # response.price = self.GetArtistPrice(request, None).price
        # response.contact_info = self.GetArtistContactInfo(request, None).contact_info
        response.rating = artist[6]
        response.genre = artist[7]
        response.booking_count = artist[8]
        return response

    def GetArtistLocation(self, request, context):
        #Initialize
        response = ArtistLocationResponse()
        cur = self.conn.cursor()

        # Update fields
        cur.execute(f"select location.name,\
                             location.longitude,\
                             location.latitude\
                             from (artist JOIN location ON artist.location_id = location.id)\
                             where artist.id={request.user_id}")
        location = cur.fetchone()
        response.location.name = location[0]
        response.location.longitude = location[1]
        response.location.latitude = location[2]
        return response

    def GetArtistPrice(self, request, context):
        # Initialize
        response = ArtistPriceResponse()
        cur = self.conn.cursor()

        # Update fields
        cur.execute(f"select price.price,\
                             price.pricing_type\
                             from (artist JOIN price ON artist.price_id = price.id)\
                             where artist.id={request.user_id}")
        price = cur.fetchone()
        response.price.price = price[0]
        response.price.type = price[1]
        return response

    def GetArtistContactInfo(self, request, context):
        #Initialize
        response = ArtistContactInfoResponse()
        cur = self.conn.cursor()

        # Update fields
        cur.execute(f"select contact_info.email,\
                             contact_info.phone,\
                             contact_info.website\
                             from (artist JOIN contact_info ON artist.contact_info_id = contact_info.id)\
                             where artist.id={request.user_id}")
        price = cur.fetchone()
        response.contact_info.email = price[0]
        response.contact_info.phone_number = price[1]
        response.contact_info.website_url = price[2]
        return response

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=1))
    artists_pb2_grpc.add_ArtistsServicer_to_server(
        ArtistsService(), server
    )
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()