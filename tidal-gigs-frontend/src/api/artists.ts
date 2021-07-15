import axios from 'axios'

enum ArtistType {
    SOLO = 0,
    GROUP,
}

interface User {
    id: number;
    firstName?: string;
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
        console.log("within api")
        const response = await axios.get<User>(`http://localhost:5000/get-artist/${artistId}`)
        console.log(response)
        return response.data;
    }
    catch(err) {
        console.log(err)
    }
}