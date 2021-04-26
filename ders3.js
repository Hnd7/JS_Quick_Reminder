//İçerik : var-let farkı , if-else, döngüler, Diziyi filtreleme, Dizi Map işlemi


// var - let  farkı:
//Var ile tanımlanan değişken fonksiyon içinde her yerden ulaşılabilir
//let  ve const ile tnaımlanan değişken ise sadece tanımlandığı scope içinde ulaşılabilir.
//Eğer var ile tanımlamayı fonksiyon içinde yapmazsak tanımlama window objesine bağlı global bir değişken olur
//Benzer şekilde fonksiyou da obje içind edeğil kodun içinde doğrudan tanımlarsak window objesine bağlanır
//Eğer let ile tanımlamayı fonksiyon dışında yaparsak değişken yine global olur ama window objesine bağlı olmaz


// if-else
let hour =10;
if (hour>=6 && hour<12)
    //tek satır kod için aslında süslü paranteze gerek yok
    console.log('Good morning');
else if (hour>=12 && hour<16){
    //birden çok satır yazacaksan süslü parantez olmak zorunda
    console.log('Good afternoon');
    console.log('Hello');
}
else
    console.log('Good evening');


//JS Döngüleri: For, While, Do...While, For...in, For...of

//for döngüsü :tek sayıları bastıracak
for(let i=0; i<5 ; i++){
    if(i%2!==0) console.log(i);
}

//while döngüsü
let i=0;
let text="";
while ( i < 10) {
    text += "The number is " + i;
    console.log(text)
    i++;
    text="";
  }


//do...while döngüsü
text="";
i=0;
  do {
    text += "The number is " + i;
    console.log(text)
    i++;
    text="";
  }
  while (i < 10);

//for...in döngüsü :Objenin özellikleri üzerinde iterasyon yapar . İndis önemli olduğu için for..in dizilerde kullanılmamalı
let person = {fname:"John", lname:"Doe", age:25};
for  (x in person) {
    console.log(x, person[x]);
}

//for...of döngüsü : İtere edilebilir objenin değerleri üzerinde iterasyon yapar
let cars = ['BMW', 'Volvo', 'Mini'];
for (x of cars) {
    console.log(x);
}

let txt = 'JavaScript';
for (x of txt) {
    console.log(x);
}


//Diziyi filtreleme
const numbers = [1,-1,2,3];
const filtered = numbers.filter(function(value){
    return value >=0;
});
console.log(filtered)

//Yukarıdaki yazımın kısa yolu
const filtered2 = numbers.filter(n=> n>=0);
console.log(filtered2)

//Map işlemi
//filtered2.map(n=> '<li>'+n+'')