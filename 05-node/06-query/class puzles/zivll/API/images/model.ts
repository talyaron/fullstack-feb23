export class Image {
  id: string;
  constructor(
    public description: string,
    public url: string,
    public email: string
  ) {
    this.id = Math.random().toString(36).substring(2);
    // this.email = this.getUserEmail();
  }
  // getUserEmail() {
  //   try {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const email = urlParams.get("email");
  //     return email;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
export const images: Image[] = [];
