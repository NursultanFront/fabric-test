export interface Image {
  id: string;
  description: string | null;
  alt_description: string;
  links: Links;
  user: User;
  urls: Urls;
}

export interface ImageSearch {
  total: number;
  total_pages: number;
  results: Image[];
}

interface Links {
  download: string;
  html: string;
}
interface User {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string | null;
  profile_image: ProfileImage;
  instagram_username: string;
  social: Social;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Social {
  instagram_username: string;
  portfolio_url: string | null;
  twitter_username: string | null;
  paypal_email: string | null;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
