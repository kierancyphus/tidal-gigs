## Set up database and seed data
- In base directory run `mysql` and if permission errors, run `sudo mysql`
- In mysql cli run `source artists/database.sql`
- For fake data run `source artists/fake_data.sql`
## Running backend
- Make sure you have a python environment set up and then run `pip install -r requirements.txt`
- cd into `artists`
- run `bash run_artists.sh`
## Running frontend
- Make sure you have `npm` installed (should come with square laptops)
- cd into the `tidal-gigs-frontend` directory
- run `npm install` if running for the first time
- run `npm run start` and it should automatically open up localhost:3000`
- change `localhost:3000` to `localhost:3000/bookings`
- voila