import { BasicRest } from '../basic-rest';

import type { AxiosInstance } from 'axios';
import type { Image, ImageSearch } from './type';

export class ImageRest extends BasicRest {
  constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public list(params?: { page: number; per_page: number }) {
    return this.getRequest<Image[]>('/photos', params);
  }

  public oneImage(id: string) {
    return this.getRequest<Image>(`/photos/${id}`);
  }

  public searchImages(params: {
    query: string;
    page?: number;
    per_page?: number;
  }) {
    return this.getRequest<ImageSearch>(`/photos/`, params);
  }
}
