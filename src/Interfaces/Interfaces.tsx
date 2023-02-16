export interface Post {
  _id: string;
  user_id: string;
  title: string;
  body: string;
  status: string;
  images: string[];
  location: Location;
  __v?: number;
}

export interface Location {
  type: string;
  coordinates: number[];
}
