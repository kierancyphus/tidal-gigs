#I have no idea what any of these imports are
from concurrent import futures
import random
import pymysql
import grpc
from grpc_interceptor import ExceptionToStatusInterceptor
from grpc_interceptor.exceptions import NotFound
from artists_pb2 import (ArtistRequest,
                         ArtistResponse,
                         ArtistListResponse,
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
        cur.execute(f"select * from artist where id={request.id};")
        artist = cur.fetchone()

        response.artist.id = artist[0]
        response.artist.name = artist[1]
        response.artist.city = artist[2]
        response.artist.price = artist[3]
        response.artist.contact_info.email = artist[4]
        response.artist.contact_info.phone = artist[5]
        response.artist.contact_info.website = artist[6]
        response.artist.rating = artist[7]
        response.artist.genre = artist[8]
        response.artist.booking_count = artist[9]
        response.artist.type = artist[10]
        return response

    def AddArtist(self, request, context):
        # Initialize
        response = AddArtistResponse()
        cur = self.conn.cursor()

        # Insert Data
        cur.execute(f"INSERT INTO artist (name,\
                                        city,\
                                        price,\
                                        email,\
                                        phone,\
                                        website,\
                                        rating,\
                                        genre,\
                                        booking_count,\
                                        type)\
                        VALUES('{request.name}',\
                                {request.city},\
                                {request.price},\
                                '{request.contact_info.email}',\
                                '{request.contact_info.phone}',\
                                '{request.contact_info.website}',\
                                {request.rating},\
                                {request.genre},\
                                {request.booking_count},\
                                {request.type});")
        response.response = 1
        return response


    def GetNearbyArtists(self, request, context):
        """Find artists who live in same location based on name.
        TODO: Make this use distance or a categorical"""
        pass



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
