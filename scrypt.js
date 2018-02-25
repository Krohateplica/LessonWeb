var a=5;
var b = 2.5;
var str = "переменная";
var key = true;
//document.write(str + " " + b);
//alert(str + ' ' + str.length);
function print(str) {
    document.write(str);

}
function sTriangle(a,h) {
    return a*h*1/2;
}
function newTriangle() {
    print("Площадь треугольника равна: " +sTriangle(5,45));
}