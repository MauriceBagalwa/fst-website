export interface IServiceCard {
  image_ul?: string;
  title?: string;
  description?: string;
  icon: string;
}

export interface IRealisationCard {
  image_ul: string;
  title: string;
  description: string;
  genres: string[];
  bg_color: string;
}

export interface ITechnoCard {
  designation: string;
  tag: string;
  image_url?: string;
}

export interface IBlog {
  designation: string;
  tag: string;
  image_url: string;
  lang: string;
  link: string;
  author: IAuthor;
  publish_at: Date;
}

export interface IAuthor {
  name: string;
  avatar: string;
}
