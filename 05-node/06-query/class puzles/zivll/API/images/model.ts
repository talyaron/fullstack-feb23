export class Image {
  id: string;
  constructor(public description: string, public url: string) {
    this.id = Math.random().toString(36).substring(2);
  }
}
export const images: Image[] = [];
