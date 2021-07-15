#Me neither
from concurrent import futures
import random
import pymysql
import grpc
from grpc_interceptor import ExceptionToStatusInterceptor
from grpc_interceptor.exceptions import NotFound
import bookers_pb2_grpc
from flask import Flask, request
from flask_cors import CORS, cross_origin
from bookers_pb2 import (BookerRequest,
                         BookerResponse,
                         AddBookerRequest,
                         AddBookerResponse)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

conn = pymysql.connect(
        host='localhost',
        user='user',
        password="password",
        db='tidalsurfbooker',
    )

@cross_origin
@app.route("/get-booker/<user_id>")
def get_booker(user_id):
    return {'id': user_id}
    response = Booker()
    cur = self.conn.cursor()

    cur.execute(f"select * from booker where id={user_id};")
    booker = cur.fetchone()

    response.booker.id = booker[0]
    response.booker.name = booker[1]
    response.booker.city = booker[2]
    response.booker.asking_price = booker[3]
    response.booker.contact_info.email = booker[4]
    response.booker.contact_info.phone = booker[5]
    response.booker.contact_info.website = booker[6]
    response.booker.booking_count = booker[7]
    return response.booker.id

@app.route("/add-booker", methods=['POST'])
def add_booker():
    response = AddBookerResponse()
    cur = conn.cursor()
    sqlQuery = "INSERT INTO booker (name, city, asking_price, email, phone, website, booking_count) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    val = (request.args.get('name'),
           request.args.get('city', None),
           request.args.get('asking_price', None),
           request.args.get('email', None),
           request.args.get('phone', None),
           request.args.get('website', None),
           request.args.get('booking_count', None))
    try:
        cur.execute(sqlQuery, val)
        conn.commit()
    except pymysql.IntegrityError:
        return {'response': 1}

    #success
    return {'response': 0}

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
