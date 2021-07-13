#I have no idea what any of these imports are
from concurrent import futures
import random
import pymysql
import grpc
from grpc_interceptor import ExceptionToStatusInterceptor
from grpc_interceptor.exceptions import NotFound
from assets_pb2 import Price, ContactInfo
from artists_pb2 import (ArtistRequest,
                         ArtistResponse,
                         ArtistLocationResponse,
                         ArtistPriceResponse,
                         ArtistContactInfoResponse,
                         ArtistListResponse
                         AddArtistResponse)
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
        response.city = artist[2]
        response.price.price = artist[3]
        response.price.type = artist[4]
        response.contact_info.email = artist[5]
        response.contact_info.phone_number = artist[6]
        response.contact_info.website_url = artist[7]
        response.rating = artist[8]
        response.genre = artist[9]
        response.booking_count = artist[10]
        return response

    def AddArtist(self, request, context):
        # Initialize
        response = AddArtistResponse()
        cur = self.conn.cursor()

        # Insert Data
        cur.execute(f"INSERT INTO artist (name,\
                                        location_range,\
                                        rating,\
                                        genre,\
                                        booking_count)\
                        VALUES('{request.user_name}',\
                                {request.range},\
                                {request.rating},\
                                {request.genre},\
                                {request.booking_count});")
        response.response = 1
        return response


    def GetNearbyArtists(self, request, context):
        """Find artists who live in same location based on name.
        TODO: Make this use distance or a categorical"""
        # Initialize
        response = ArtistListResponse()
        cur = self.conn.cursor()

        # Update fields
        cur.execute(f"select artist.id \
                            from (artist JOIN location ON artist.location_id = location.id)\
                            where location.name = '{request.location.name}'")
        artists = cur.fetchall()
        for artist in artists:
            response.nearby_artists.append(self.GetArtist(ArtistRequest(user_id=artist[0]), None))
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
