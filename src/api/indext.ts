import axios from 'axios';
import { ImageRest } from './image-rest';

class Api {
  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.images = new ImageRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : '{}')],
    });
  }

  private readonly endpoint;
  public readonly images;
}

export const api = new Api();
