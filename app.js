// variable/huvisagch
var name = "bat";
// number, string, boolean, undefined, null
console.log("Hi"+name);
// alert();
// +prompt("") --> garaas utga avah
// +,-,/,*,% --> operator
// if,else --> hervee buyu nuhtsul shalgah
// var age=+prompt("Nasaa oruulna uu");
// >,<, <=, >=, ==;
// && - and(bas) , || - or(esvel)
//if(age>18 && age<30){
	//console.log("Ider nas");
	// alert("Nasand hursen bna");
// }else if(age<=3 && age>=0){
	//console.log("Nylh huuhed");
//}else if(age<18 && age>10){
	//console.log("Zaluu huuhed"
//}else{
	//console.log("Nasand hureegui bna");
//}
// 1 Гараас тоо аваад тэгш эсвэл сондгойг шалга
// 2 Гараас тоо авахад эерэг эсвэл сөрөгийг шалга
var number = +prompt("Too oruulna uu");
if(number%2==0){
	console.log("Tegsh bna");
}else{
	console.log("Sondgoi bna");
}
var number2 = +prompt("too oruulna uu");
if(number2<0){
	console.log("Surug too");
}else{
	console.log("Eyreg too");
}
// switch - nuhtsul shalgana
var today = 6;
switch(today){
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	default:
		console.log("Not found");
		break;
}
var lang = "English";
switch(lang){
	case "English":
		console.log("Hello");
		break;
	case "Mongolia":
		console.log("Sain baina uu");
		break;
	case "Spanish":
		console.log("Hola!");
		break;
	default:
		console.log("Not found");
}
// 1. too1 = garaas too avna
// 2. garaas operator(+,-,*,/)
// 3. too2 = garaas too avna
// 4. alert deer bodoj gargaj irne
var too1=+prompt("Too 1 oruulna uu");
var op = prompt("Operator oruulna uu (+,-,*,/)");
var too2 = +prompt("Too 2 oruulna uu");
switch(op){
	case "+":
		alert(too1+too2);
		break;
	case "-":
		alert(too1-too2);
		break;
	case "*":
		alert(too1*too2);
		break;
}