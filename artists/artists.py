# I have no idea what any of these imports are
import pymysql
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

conn = pymysql.connect(
    host='localhost',
    user='user',
    password="password",
    db='tidalsurfartist',
)

@cross_origin
@app.route("/get-artist/<user_id>", methods=['GET'])
def get_artists(user_id):
    # Initialize
    cur = conn.cursor()

    # Update artist fields
    cur.execute(f"select * from artist where id={user_id};")
    artist = cur.fetchone()
    return {'response': artist}

@app.route("/add-artist", methods=['POST'])
def add_artist():
    # Initialize
    cur = conn.cursor()

    # Insert Data
    try:
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
                        VALUES('{request.args.get('name')}',\
                                '{request.args.get('city')}',\
                                {request.args.get('price')},\
                                '{request.args.get('email')}',\
                                '{request.args.get('phone')}',\
                                '{request.args.get('website')}',\
                                {request.args.get('rating')},\
                                {request.args.get('genre')},\
                                {request.args.get('booking_count')},\
                                {request.args.get('type')});")
        conn.commit()
    except pymysql.IntegrityError:
        return {'response': 1}

    return {'response': 0}


@app.route("/get-nearby-artists")
def get_nearby_artists():
    """Find artists who live in same location based on name.
    TODO: Make this use distance or a categorical"""
    pass


if __name__ == "__main__":
    conn = pymysql.connect(
        host='localhost',
        user='user',
        password="password",
        db='tidalsurfartist',
    )
