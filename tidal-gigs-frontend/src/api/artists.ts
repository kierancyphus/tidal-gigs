import axios from 'axios';
import { ExtendedProfile } from '../components/SearchResultsRow';
import { mockUrls } from '../mockData/mockArtistsForHire';

enum ArtistType {
  SOLO = 0,
  GROUP = 1,
}

interface User {
  id: number;
  name?: string;
  lastName?: string;
  city?: string;
  price?: number;
  contactInfo?: ContactInfo;
  rating?: number;
  genre?: string;
  bookingCount?: string;
  artistType?: ArtistType;
}

interface ContactInfo {
  email: string;
  phone: string;
  website: string;
}

export const getArtist = async (artistId: number) => {
  try {
    console.log('within api');
    const response = await axios.get<User>(
      `http://localhost:5000/get-artist/${artistId}`,
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getNearbyArtists = async (
  genre: string,
  type: string,
  city: string,
  name: string,
) => {
  let actualType = type === 'Group' ? '' : `type=${type === 'Band' ? 1 : 0}&`;
  let cityQuery = city === 'Location' ? '' : `city=${city}&`;
  let genreQuery = genre === 'Genre' ? '' : `genre=${genre}&`;
  let nameQuery =
    name === 'Search for a local artist...' ? '' : `name=${name}&`;

  const url =
    'http://localhost:5000/get-nearby-artists?' +
    actualType +
    cityQuery +
    genreQuery +
    nameQuery;
  interface Temp extends ExtendedProfile {
    city: string;
    type: number;
  }
  const response = await axios.get<{ artists: Temp[] }>(url);
  return response.data.artists.map((artist, index) => ({
    ...artist,
    location: artist.city,
    instrument: 'Banjo',
    group: artist.type === 0 ? 'Solo' : 'Band',
    url: mockUrls[index % mockUrls.length],
  }));
};

export const getGenres = async () => {
  const response = await axios.get<{ unique_genres: string[] }>(
    'http://localhost:5000/get-unique-genres',
  );
  return ['Genre', ...response.data.unique_genres];
};

export const getLocations = async () => {
  const response = await axios.get<{ unique_cities: string[] }>(
    'http://localhost:5000/get-unique-cities',
  );
  return ['Location', ...response.data.unique_cities];
};

export const getTimes = async (id: number) => {
  const response = await axios.get<{ response: string[] }>(
    `http://localhost:5000/get-artist-availability/${id}`,
  );
  return response.data.response;
};
