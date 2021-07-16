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

def make_artist_dict(artist):
    artist_dict = dict()
    artist_dict["id"] = artist[0]
    artist_dict["name"] = artist[1]
    artist_dict["city"] = artist[2]
    artist_dict["price"] = artist[3]
    artist_dict["email"] = artist[4]
    artist_dict["phone"] = artist[5]
    artist_dict["website"] = artist[6]
    artist_dict["rating"] = artist[7]
    artist_dict["genre"] = artist[8]
    artist_dict["booking_count"] = artist[9]
    artist_dict["type"] = artist[10]
    return artist_dict

@cross_origin
@app.route("/get-artist/<user_id>", methods=['GET'])
def get_artist(user_id):
    # Initialize
    cur = conn.cursor()
    # Update artist fields
    cur.execute(f"select * from artist where id={user_id};")
    artist = cur.fetchone()
    return make_artist_dict(artist)

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

    def filter_genre(artists, genre):
        return [artist for artist in artists if artist["genre"] == genre]
    def filter_type(artists, artist_type):
        return [artist for artist in artists if artist["type"] == int(artist_type)]
    cur = conn.cursor()
    # Update artist fields
    cur.execute(f"select * from artist where city='{request.args.get('city')}';")
    artists = cur.fetchall()
    artists = [make_artist_dict(artist) for artist in artists]
    artists = filter_genre(artists, request.args.get('genre'))
    artists = filter_type(artists, request.args.get('type'))
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
