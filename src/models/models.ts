
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

export interface FormDataSignIn {
  email: string;
  password: string;
}

export interface FormDataSignUp {
  fullName: string;
  email:string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: string;
  fullName: string | null;
  email: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
}
