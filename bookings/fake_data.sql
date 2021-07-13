INSERT INTO booking (id,
                    location_id,
                    final_price_id,
                    booker_id,
                    artist_id,
                    status)
VALUES (
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