#I have no idea what any of these imports are
from concurrent import futures
import random
import pymysql
import grpc
from grpc_interceptor import ExceptionToStatusInterceptor
from grpc_interceptor.exceptions import NotFound
from artists_pb2 import ArtistRequest, ArtistResponse, ArtistLocationResponse
import artists_pb2_grpc

class ArtistsService(artists_pb2_grpc.ArtistsServicer):
    """Service thing for artists"""
    def connect(self):
        return pymysql.connect(
            host='localhost',
            user='user',
            password="password",
            db='tidalsurfartist',
        )

    def GetArtist(self, request, context):
        #Initialize
        artist_response = ArtistResponse()
        conn = self.connect()
        cur = conn.cursor()

        #Update artist fields
        cur.execute(f"select * from artist where id={request.user_id}")
        artist = cur.fetchone()
        artist_response.user_id = artist[0]
        artist_response.user_name = artist[1]
        artist_response.range = artist[3]
        artist_response.rating = artist[6]
        artist_response.genre = artist[7]
        artist_response.booking_count = artist[8]

        #Close connection and return
        conn.close()
        return artist_response

    def GetArtistLocation(self, request, context):
        #Initialize
        response = ArtistLocationResponse()
        conn = self.connect()
        cur = conn.cursor()

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
        #Close connection and return
        conn.close()
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