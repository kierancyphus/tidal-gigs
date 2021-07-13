#Me neither
from concurrent import futures
import random
import pymysql
import grpc
from grpc_interceptor import ExceptionToStatusInterceptor
from grpc_interceptor.exceptions import NotFound
from bookers_pb2 import BookerRequest, BookerResponse, BookerLocationRespons, BookerAskingPriceResponse, BookerContactInfoResponse
import bookers_pb2_grpc

class BookersService(bookers_pb2_grpc.BookersServicer):
    """Microservice thing for bookers"""
    def __init__(self):
        self.conn = pymysql.connect(
            host='localhost',
            user='user',
            password="password",
            db='tidalsurfbooker',
        )
    
    def GetBooker(self, request, context):
        #Initialize
        response = BookerResponse()
        cur = self.conn.cursor()

        #Update booker fields
        cur.execute(f"select * from bookers where id={request.user_id}")
        booker = cur.fetchone()
        response.user_id = booker[0]
        response.user_name = booker[1]
        response.location.CopyFrom(self.GetBookerLocation(request, None).location)
        response.asing_price.CopyFrom(self.GetBookerPrice(request, None).price)
        response.contact_info.CopyFrom(self.GetBookerContactInfo(request, None).contact_info)
        response.rating = booker[6]
        response.booking_count = booker[7]
        return response

    def GetBookerLocation(self, request, context):
        #Initialize
        response = BookerLocationResponse()
        cur = self.conn.cursor()

        # Update fields
        cur.execute(f"select location.name,\
                             location.longitude,\
                             location.latitude\
                             from (booker JOIN location ON booker.location_id = location.id)\
                             where booker.id={request.user_id}")
        location = cur.fetchone()
        response.location.name = location[0]
        response.location.longitude = location[1]
        response.location.latitude = location[2]
        return response

    def GetBookerAskingPrice(self, request, context):
        # Initialize
        response = BookerPriceResponse()
        cur = self.conn.cursor()

        # Update fields
        cur.execute(f"select price.price,\
                             price.pricing_type\
                             from (booker JOIN price ON booker.price_id = price.id)\
                             where booker.id={request.user_id}")
        price = cur.fetchone()
        response.price.price = price[0]
        response.price.type = price[1]
        return response

    def GetBookerContactInfo(self, request, context):
        #Initialize
        response = BookerContactInfoResponse()
        cur = self.conn.cursor()

        # Update fields
        cur.execute(f"select contact_info.email,\
                             contact_info.phone,\
                             contact_info.website\
                             from (booker JOIN contact_info ON booker.contact_info_id = contact_info.id)\
                             where booker.id={request.user_id}")
        price = cur.fetchone()
        response.contact_info.email = price[0]
        response.contact_info.phone_number = price[1]
        response.contact_info.website_url = price[2]
        return response

    def SetBookerAvailability(self, request, context):
        #initialize 
        response = Booker


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=1))
    bookers_pb2_grpc.add_BookersServicer_to_server(
        BookersService(), server
    )
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
