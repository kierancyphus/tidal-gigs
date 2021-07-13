INSERT INTO artist (id,
                    name,
                    location_id,
                    location_range,
                    price_id,
                    contact_info_id,
                    rating,
                    genre,
                    booking_count)
VALUES (
    1,
    "Jay-z!",
    1,
    1,
    1,
    1,
    1,
    1,
    1
);

INSERT INTO location (id,
                    name,
                    longitude,
                    latitude)
VALUES (
    1,
    "Brooklyn!",
    0.1,
    0.1
);

INSERT INTO price (id,
                    price,
                    pricing_type)
VALUES (
    1,
    1000,
    1
);

INSERT INTO contact_info (id,
                    email,
                    phone,
                    website)
VALUES (
    1,
    "jayz@tidal.com",
    "129389812649",
    "jay.tidal.com"
);