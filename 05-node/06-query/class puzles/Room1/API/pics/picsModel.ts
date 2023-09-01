export class Img {
    id?: string;
    constructor(
        public title: string,
        public url: string,
    ) {
        this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
}

export const images: Img[] = [
    new Img("title1", "https://www.google.com/aclk?sa=l&ai=DChcSEwjnyMTl6oSBAxW4kIMHHQYXC_kYABAHGgJlZg&ase=2&gclid=Cj0KCQjw0bunBhD9ARIsAAZl0E1SHtIVRolwnOnVePSz7a2PRagN7k4RqSXp7UNvh_Oky01qNsAgSO8aAju6EALw_wcB&sig=AOD64_29WouTmGvP-tUSWwaHOH6r_rFg1g&ctype=5&nis=5&adurl&ved=2ahUKEwiOy7Xl6oSBAxU5JcUKHYEbBnMQvhd6BAgBEGE"),
];