INSERT INTO booker (id,
                    name,
                    location_id,
                    asking_price_id,
                    contact_info_id,
                    rating,
                    booking_count)
VALUES (
    1,
    "Johnny",
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
    "jye@squareup.com",
    "129389812649",
    "tidalsurf.com"
);