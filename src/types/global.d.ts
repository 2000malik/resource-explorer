type GlobalResponseData<T> = {
  statusMessage: string;
  status: number;
  data: T;
};

type ErrorResponseData = {
  statusCode: number;
  message: string;
  error?: string;
};
type CharacterQueryResponseType = {
  info: PaginationType;
  results: CharacterType[];
};
type PaginationType = {
  count?: number;
  pages?: number;
  next?: string | null;
  prev?: string | null;
};

type CharacterQueryProps = {
  gender?: string;
  name?: string;
  page?: string;
  species?: string;
  status?: string;
  type?: string;
};
type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
type Origin = {
  name: string;
  url: string;
};
type Location = {
  name: string;
  url: string;
};
