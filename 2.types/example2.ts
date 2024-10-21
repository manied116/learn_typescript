var myStr:string = "test";
var myNumber:number = 1;
var myBoolean:boolean = true;

myStr = myNumber;
myBoolean = myStr;
myNumber = myBoolean;

console.log(myStr, myBoolean, myNumber);
