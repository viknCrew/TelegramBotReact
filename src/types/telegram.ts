export interface IUser {
  first_name: string;
  id: number;
  language_code: string;
  last_name: string;
  username: string;
}

export interface IInitDataUnsafe {
  auth_date: string;
  hash: string;
  query_id: string;
}
