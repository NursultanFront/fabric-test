export interface Image {
  id: string;
  description: string | null;
  alt_description: string;
  links: Links;
  user: User;
}

export interface Links {
  download: string;
}

export interface User {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string | null;
  profile_image: ProfileImage;
  instagram_username: string;
  social: Social;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url: string | null;
  twitter_username: string | null;
  paypal_email: string | null;
}
