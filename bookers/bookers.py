#Me neither
from concurrent import futures
import random
import pymysql
import grpc
from grpc_interceptor import ExceptionToStatusInterceptor
from grpc_interceptor.exceptions import NotFound
from flask import Flask, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

conn = pymysql.connect(
        host='localhost',
        user='user',
        password="password",
        db='tidalsurfbooker',
    )

#@cross_origin
@app.route("/get-booker/<user_id>", methods=['GET'])
def get_booker(user_id):
    cur = conn.cursor()
    sqlQuery = "select * from booker where id = %s"
    cur.execute(sqlQuery, user_id)
    booker = cur.fetchone()

    return {'response': booker}


@app.route("/get-bookers", methods=['GET'])
def get_bookers():
    cur = conn.cursor()
    sqlQuery = "select * from booker"
    cur.execute(sqlQuery)
    bookers = cur.fetchall()
    return {'response': bookers}

@app.route("/add-booker", methods=['POST'])
def add_booker():
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
        return {'success': 'no'}

    #success
    return {'success': 'yes'}

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
