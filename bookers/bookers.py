#Me neither
from concurrent import futures
import random
import pymysql
import grpc
from grpc_interceptor import ExceptionToStatusInterceptor
from grpc_interceptor.exceptions import NotFound
import bookers_pb2_grpc
from flask import Flask
from flask_cors import CORS, cross_origin
from bookers_pb2 import (BookerRequest,
                         BookerResponse)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@cross_origin
@app.route("/get-booker/<user_id>")
def get_booker(user_id):
    return {'id': user_id}
    response = BookerResponse()
    cur = self.conn.cursor()

    cur.execute(f"select * from booker where id={request.id};")
    booker = cur.fetchone()

    response.booker.id = booker[0]
    response.booker.name = booker[1]
    response.booker.city = booker[2]
    response.booker.asking_price = booker[3]
    response.booker.contact_info.email = booker[4]
    response.booker.contact_info.phone = booker[5]
    response.booker.contact_info.website = booker[6]
    response.booker.booking_count = booker[7]
    return response

@app.route("/add-booker")
def add_booker():
    response = AddBookerResponse()
    cur = conn.cursor()
    cur.execute(f"INSERT INTO booker (name,\
                                        city,\
                                        asking_price,\
                                        email,\
                                        phone,\
                                        website,\
                                        booking_count)\
                        VALUES('{request.name}',\
                                {request.city},\
                                {request.price},\
                                '{request.contact_info.email}',\
                                '{request.contact_info.phone}',\
                                '{request.contact_info.website}',\
                                {request.booking_count};")
    response.response = 1
    return response

def AddBookerAvailability(self, request, context):
    """Add booker availability.
        TODO: Make this use calendar? """
    pass


if __name__ == "__main__":
    conn = pymysql.connect(
        host='localhost',
        user='user',
        password="password",
        db='tidalsurfbooker',
    )
