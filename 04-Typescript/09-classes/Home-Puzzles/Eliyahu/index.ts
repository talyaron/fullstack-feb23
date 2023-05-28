class Celeb {
    name: string;
    genre: string;
    tiktokAccount: string;
    instagramAccount: string;
    numberOfFollowers: number;

    constructor(
        name: string,
        genre: string,
        tiktokAccount: string,
        instagramAccount: string,
        numberOfFollowers: number,
    ) {
        this.name = name,
            this.genre = genre,
            this.tiktokAccount = tiktokAccount,
            this.instagramAccount = instagramAccount,
            this.numberOfFollowers = numberOfFollowers
    }

    setFollowers(followers: number) {
        try {
            if (isNaN(followers)) throw new Error('the value is not a number')
            this.numberOfFollowers = followers
            return this.numberOfFollowers
        } catch (error) {
            console.error(error)
            return
        }
    }
    getFollowers() {
        console.log(this.numberOfFollowers)
    }
    getTikTokAccount() {
        console.log(this.tiktokAccount)
    }
}


const hanan = new Celeb('Hanan', 'music', 'https://www.tiktok.com/@hananbenari', 'https://z-p42.www.instagram.com/hananbenariofficial/?hl=en-gb', 7310)
const shuli = new Celeb('shuli', 'music', 'none', 'none', 457)
const ori = new Celeb('ori', 'humor', 'https://www.tiktok.com/@ori_hizkiah?lang=he-IL', 'none', 41066)
const hrvArush = new Celeb('shalom', 'judaism', 'https://www.tiktok.com/@rav_shalom__arush', 'https://z-p3.www.instagram.com/Rav_Shalom__Arush/?hl=nb', 6332)

hanan.setFollowers(14552)
shuli.setFollowers(9008)
ori.setFollowers(68799)
hrvArush.setFollowers(10475)

hanan.getTikTokAccount()
shuli.getTikTokAccount()
ori.getTikTokAccount()
hrvArush.getTikTokAccount()

function mostFollowers(celeb1: Celeb, celeb2: Celeb, celeb3: Celeb, celeb4: Celeb): Array<Celeb> | undefined {
    try {
        const mostFollowers = [celeb1, celeb2, celeb3, celeb4]
        for (let j = 0; j < mostFollowers.length - 1; j++) {
            for (let i = 0; i < mostFollowers.length - 1; i++) {
                if (mostFollowers[i].numberOfFollowers < mostFollowers[i + 1].numberOfFollowers) {
                    let term = mostFollowers[i + 1]
                    mostFollowers[i + 1] = mostFollowers[i]
                    mostFollowers[i] = term
                }
            }
        }
        return mostFollowers
    } catch (error) {
        console.error(error)
        return
    }
}
console.log(mostFollowers(hanan, shuli, ori, hrvArush))

const arrFollowets = (mostFollowers(hanan, shuli, ori, hrvArush))
if (arrFollowets !== undefined) {
    for (let i = 0; i < arrFollowets.length; i++) {
        console.log(arrFollowets[i].name)
    }
}
