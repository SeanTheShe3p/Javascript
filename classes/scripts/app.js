class Pets {
    constructor(meme_name, legs, food, sound){
        this.meme_name = meme_name;
        this.legs = legs;
        this.food = food;
        this.sound = sound;
    }

    animalStats() {
        return `this is a ${this.meme_name}, they have ${this.legs} many legs, you may want to feed him some ${this.food}. ${this.sound}, ${this.sound}`
    }
}
const cat = new Pets("Catto", 4, "fish/chicken", "meow")
const dog = new Pets("Pupper", 4, "meat", "woof")
const snake = new Pets("Snek", 0, "mice", "ssss")
const bird = new Pets("Birb", 2, "seeds", "tweet")

document.getElementById("script1").innerHTML = cat.animalStats();
document.getElementById("script2").innerHTML = dog.animalStats();
document.getElementById("script3").innerHTML = snake.animalStats();
document.getElementById("script4").innerHTML = bird.animalStats();