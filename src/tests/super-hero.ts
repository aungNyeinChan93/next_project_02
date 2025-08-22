
export class SuperHero {
    public name: string;
    constructor(name: string) {
        this.name = name
    }
    public run = () => {
        console.log(`${this.name} is running`);
    }
};

export const flash = new SuperHero('flash')


