

enum car{
    TOYOTA =1,
    HONDA,
    MAZDA,
    SUZUKI,
    KIA,
}


interface cartypes {
    Carmade: string;
     Carmodel: string;
 }
class Cartype {
   Model: string;
    constructor(public Carmade: string, public middleInitial: string, public Carmodel: string) {
        this.Model = Carmade + " " + middleInitial + " " + Carmodel;
    }
}

console.log(car);
function greeter(car) {
    return "Made by Toyota " + car; 
}

let user = "Corolla";

document.body.innerHTML = greeter(user);

let user1 = new Cartype("Honda", "Civic", "MUSTAFA");

document.body.innerHTML = greeter(user);
