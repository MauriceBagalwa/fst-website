export interface IServiceCard {
  image_ul: string;
  title?: string;
  description?: string;
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
