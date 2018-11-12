var car;
(function (car) {
    car[car["TOYOTA"] = 1] = "TOYOTA";
    car[car["HONDA"] = 2] = "HONDA";
    car[car["MAZDA"] = 3] = "MAZDA";
    car[car["SUZUKI"] = 4] = "SUZUKI";
    car[car["KIA"] = 5] = "KIA";
})(car || (car = {}));
var Cartype = /** @class */ (function () {
    function Cartype(Carmade, middleInitial, Carmodel) {
        this.Carmade = Carmade;
        this.middleInitial = middleInitial;
        this.Carmodel = Carmodel;
        this.Model = Carmade + " " + middleInitial + " " + Carmodel;
    }
    return Cartype;
}());
console.log(car);
function greeter(car) {
    return "Made by Toyota " + car;
}
var user = "Corolla";
document.body.innerHTML = greeter(user);
var user1 = new Cartype("Honda", "Civic", "MUSTAFA");
document.body.innerHTML = greeter(user);
