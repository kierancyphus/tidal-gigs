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
    sqlQuery = "INSERT INTO artist (name, city, price, email, phone, website, rating, genre, booking_count, type) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s )"
    val = (request.args.get('name'),
           request.args.get('city'),
           request.args.get('price', None),
           request.args.get('email', None),
           request.args.get('phone', None),
           request.args.get('website', None),
           request.args.get('rating', None),
           request.args.get('genre', None),
           request.args.get('booking_count', None),
           request.args.get('type', None))
    try:

        cur.execute(sqlQuery, val)
        conn.commit()
    except pymysql.IntegrityError:
        return {'success': 'no'}

    #success
    return {'success': 'yes'}


@app.route("/get-nearby-artists", methods=["GET"])
def get_nearby_artists():
    """Find artists who live in same location based on name."""

    def filter_genre():
        pass
    cur = conn.cursor()
    # Update artist fields
    cur.execute(f"select * from artist where city='{request.args.get('city')}';")
    artists = cur.fetchall()

    return {'artists': artists}

@app.route("/get-artist-availability/<artist_id>", methods=['GET'])
def get_artist_availability(artist_id):
    cur = conn.cursor()
    sqlQuery = "select * from availability where artist_id = %s"
    cur.execute(sqlQuery, artist_id)
    availabilities = cur.fetchall()
    return {'response': availabilities}

@app.route("/add-artist-availability/<artist_id>", methods=['POST'])
def add_artist_availability(artist_id):
    cur = conn.cursor()
    sqlQuery = "select * from artist where id = %s"
    cur.execute(sqlQuery, artist_id)
    artist = cur.fetchone()
    if artist:
        sqlQuery = "INSERT INTO availability (artist_id, availability) VALUES (%s, %s)"
        val = (artist_id, request.args.get('availability'))
        try:
            cur.execute(sqlQuery, val)
            conn.commit()
        except pymysql.IntegrityError:
            return {'success': 'no'}
    else:
        return {'success': 'no artist with that id.'}

    return {'success': 'yes'}

if __name__ == "__main__":
    conn = pymysql.connect(
        host='localhost',
        user='user',
        password="password",
        db='tidalsurfartist',
    )
