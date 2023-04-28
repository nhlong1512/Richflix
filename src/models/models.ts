export interface Movie {
  first_air_date: Date;
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string | undefined;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
