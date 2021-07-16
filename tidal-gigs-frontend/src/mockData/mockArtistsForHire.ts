import { Profile } from '../components/LocalArtistsForHire';
import { ExtendedProfile } from '../components/SearchResultsRow';

import Beyonce from '../assets/profiles/Beyonce.png';
import Jack from '../assets/profiles/Jack.png';
import Jay from '../assets/profiles/Jay.png';
import Johnny from '../assets/profiles/Johnny.png';
import Judy from '../assets/profiles/Judy.png';
import Katie from '../assets/profiles/Katie.png';
import Kieran from '../assets/profiles/Kieran.png';
import { HiredProfile } from '../components/MainPage';

export const mockUrls: string[] = [
  Beyonce,
  Jack,
  Jay,
  Johnny,
  Judy,
  Katie,
  Kieran,
];

export const mockLocalArtistsForHire: Profile[] = [
  {
    url: Beyonce,
    name: 'Beyonce',
    genre: 'Pop',
  },
  {
    url: Jack,
    name: 'Jack',
    genre: 'Hip-Hop',
  },
  {
    url: Jay,
    name: 'Jay-Z',
    genre: 'Hip-Hop',
  },
  {
    url: Johnny,
    name: 'Johnny',
    genre: 'Chinese Pop',
  },
  {
    url: Judy,
    name: 'Judy',
    genre: 'Country',
  },
  {
    url: Katie,
    name: 'Katie',
    genre: 'R&B',
  },
  {
    url: Kieran,
    name: 'Kieran',
    genre: 'Metal',
  },
];

export const mockSearchResults: ExtendedProfile[] = [
  {
    url: Beyonce,
    name: 'Beyonce',
    genre: 'Pop',
    instrument: 'Vocals',
    location: 'New York City, New York, USA',
    group: 'Solo',
  },
  {
    url: Jack,
    name: 'Jack',
    genre: 'Hip-Hop',
    instrument: 'Soul',
    location: 'Rooster Shed, His House, Earth',
    group: 'Solo',
  },
  {
    url: Jay,
    name: 'Jay-Z',
    genre: 'Hip-Hop',
    instrument: 'Vocals',
    location: 'New York City, New York, USA',
    group: 'Solo',
  },
  {
    url: Johnny,
    name: 'Johnny',
    genre: 'Chinese Pop',
    instrument: 'Guitar',
    location: 'Toronto, Ontario, Canada',
    group: 'Solo',
  },
  {
    url: Judy,
    name: 'Judy',
    genre: 'Country',
    instrument: 'Guitar',
    location: 'Toronto, Ontario, Canada',
    group: 'Solo',
  },
  {
    url: Katie,
    name: 'Katie',
    genre: 'R&B',
    instrument: 'Guitar, Vocals',
    location: 'Honolulu, Hawaii, USA',
    group: 'Solo',
  },
  {
    url: Kieran,
    name: 'Kieran',
    genre: 'Metal',
    instrument: 'Guitar, Vocals',
    location: 'Toronto, Ontario, Canada',
    group: 'Solo',
  },
];

export const mockTimes: string[] = [
  '07/16/21',
  '07/16/22',
  '07/16/23',
  '07/16/24',
  '07/16/25',
  '07/16/26',
  '07/16/27',
  '07/16/28',
  '07/16/29',
];

export const mockHiredArtists: HiredProfile[] = [
  {
    url: Jack,
    name: 'Jack',
    genre: 'Hip-Hop',
    amount: 300,
    time: '07/16/23',
  },
];
