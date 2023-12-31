
// ! cross platform yapısına sahip.
// ! oop yapısına uygun

// ? yorum satırları;
// single comment
/*
multiple comments
*/

// ! veri yazdırma şekilleri
// * konsolda verileri görmek için
console.log("loglama");
console.warn("warn");
console.error("error");
console.info("info");

// * pop-up çıkarıp bilgilendirme için
alert("bilgilendirme");

// * ekrana yazı yazdırmak için
document.writeln("ekranda yazı");

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! variables
// ! var
// aynı isimde değişken oluşturulabilir, değişken içeriği değiştirilebilir.

var result = 14.53;
console.log(typeof result + " => " + result);
var result = "js";
console.log(typeof result + " => " + result);
var result = 2023;
console.log(typeof result + " => " + result);
var result = true;
console.log(typeof result + " => " + result);

// ? naming convention
var deneme = "deneme";
console.log(deneme);

var _$deneme44 = "deneme";
console.log($deneme44);

var deneme44 = "deneme";
console.log(deneme44);

var denemeVerisi = "deneme";
console.log(denemeVerisi);

// * whoisting yapısı
result2 = 56;
var result2;

// ! let
// aynı isimde değişken oluşturulamaz, değişken içeriği değiştirilebilir.

// let say =2;
// let say =3; // hatalı yazım

// ! const
// aynı isimde değişken oluşturulamaz, değişken içeriği değiştirilemez.

const kdv = 0.18;


// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! operators

// + - * ** / % 

// x++ => önce x yazıp sonra 1 arttırıyor
// x-- => önce x yazıp sonra 1 eksiltiyor
// ++x => önce 1 arttırıp sonra x yazdırıyor
// --x => önce 1 eksiltip sonra x yazdırıyor

// =    => atama
// ==   => eşit (türüne bakmaz)
// ===  => eşit (türüne bakar)
// ! değil anlamına geliyor, olumsuzluk verir

// && => ve
// || => veya

var num1 = 40;
var num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// pop-up ile kullanıcıdan bilgi alma. Bilgiyi string olarak alır. cast(numbera çevirme)
var userdata = Number(prompt("lütfen sayı giriniz : "));
console.log(userdata);

// ? undefined => tanımsız
var result;
console.log(result);
// ? NaN => not a number, bir sayı değil
var result = "asdf" / 4;
console.log(result);
// ? isNaN => sayı olup olmadığını gösterir. true ya da false döndürür
var result = 5;
console.log(isNaN(result));
// ? Infinity => bir sayıyı sıfıra bölme hatası
var result = 5;
console.log(result/0);

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! Math
console.log(Math.PI); // pi sayısını verir
console.log(Math.E); // e sayısını verir
console.log(Math.min(4,5,87,65,21)); // sayıların en küçüğünü verir
console.log(Math.max(4,5,87,65,21)); // sayıların en büyüğünü verir
console.log(Math.sqrt(16)); // karekök
console.log(Math.abs(-25)); // mutlak değer
console.log(Math.pow(2,3)); // üslü sayılar
console.log(Math.floor(3.4)); // sayıyı aşağıya yuvarlar
console.log(Math.ceil(3.4)); // sayıyı yukarıya yuvarlar
console.log(Math.round(3.4)); // en yakın tam sayıya yuvarlama yapar
console.log(Math.sin(45)); // sinusunu verir
console.log(Math.round(Math.random()*9)); // rastgele sayılar üretir

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// * Number
var say1 = 15000;
console.log(say); 

var say2 = 1.5E+4; // bilimsel yazım
console.log(say2); 

var binary = 0b00011; // * binary 0 ve 1 lerden oluşur => ikilik sayı sistemi
console.log(binary); 

var octal = 0o7612; // * octal : 0-1-2-3-4-5-6-7 => sekizlik sayı sistemi
console.log(octal); 

var decimal = 1234567; // * decimal : 0-1-2-3-4-5-6-7-8-9 => onluk kullandığımız sayı sistemi
console.log(decimal); 

var hexadecimal = ff1245; // * hexadecimal : 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F => hex kodları yazımı
console.log(hexadecimal);

// * Cast
// ! veri türlerini birbirine çevirme

// * Number, bir değeri sayıya dönüştürmeye çalışır ve başarısız olduğunda NaN döndürür. Her türlü veriyi sayıya çevirmeye çalışır.
console.log(Number("10")+10);
// * parseInt, bir dizeyi belirtilen temel sayı sistemine (genellikle onluk sayı sistemine) göre sayıya dönüştürür. 
// * Başarıyla dönüştürülemediğinde 0 döndürür. Genellikle metin dizelerini sayılara dönüştürmek için kullanılır.
console.log(parseInt("10")+10);

var number = 30;
// * string bir veri türüdür. Bir değişkenin veya bir değerin dize (string) türünde olduğunu belirtmek için kullanılır.
console.log(String(number) + 10);
// * data.toString() ise bir yöntemdir ve çoğu JavaScript nesnesi üzerinde kullanılabilir. Bu yöntem, bir nesnenin içeriğini bir dizeye dönüştürmek için kullanılır.
// * Nesnenin tipine ve içeriğine bağlı olarak farklı sonuçlar üretebilir. Bazı nesneler bu yöntemi özelleştirebilir, bu nedenle dönüşüm sonucu değişebilir.
console.log(number.toString()+10); // stringe çevirme



// ------------------------------------------------------------------------------------------------------------------------------------------- //


// * String
// * Array
// * Object

// * string metodları;
let str = " merHaba ";
console.log(str);
console.log(str.trim()); // ? baş ve sondaki boşlukları siler
console.log(str.toLowerCase()); // ? hepsini küçük harf yapar
console.log(str.toUpperCase()); // ? hepsini büyük harf yapar
console.log(str.charAt(2)); // ? parantez içerisindeki indekste bulunan karalteri verir
console.log(str.indexOf("a")); // ? arama yapıp ilk bulduğu index sonucunu verir
console.log(str.lastIndexOf("a")); // ? arama yapıp en sondaki index sonucunu verir
console.log(str.concat("ekleme")); // ? sonuna ekleme yapar
console.log(str.replace(str,"replace")); // ? içerik değiştirmek için kullanılır
console.log(str.startsWith("a")); // ? başlangıcı kontrol edip boolean değer verir
console.log(str.endsWith("a")); // ? son karakteri kontrol edip booelan değer verir
console.log(str.includes("a")); // ? verilen karakteri içerip içermediğini kontrol eder, boolean değer verir
console.log(str.length); // ? değişkenin karakter uzunluğunu verir
console.log(str.substring(0, 2)); // ? verilen indeks numaraları arasındaki karakterleri verir

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! FUNCTION

// * parametresiz ve değer döndürmeyen
function deneme1() {
    console.log("deneme1");
};
deneme1();

// * parametreli ve değer döndürmeyen
function deneme2(isim) {
    console.log("deneme2 " + isim);
}
deneme2("Tuğçe");

// * parametresiz ve değer döndüren
function deneme3() {
    return "deneme3";
}
let result = deneme3();
console.log(result);

// * parametreli ve değer döndüren
function deneme4(ad) {
    return "deneme4 " + ad;
}
let result = deneme4("Tuğçe");
console.log(result);

// * anonymous function
let value = function(a,b){sonuc = a + b; return sonuc; };
console.log(value(2,5));

// * arrow function
let arrow = (a,b) => {sonuc = a + b; return sonuc;}
console.log(arrow(2,5));

// * Immedia function (çağırmadan direkt gelen fonksiyon)
(function(){
    console.log("immedia function");
})();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! CONDITION (IF-ELSE)

// * farklı yazımlarla if else yapısı;
const condi = () =>{
    let num = 4;
    if(num >= 2){
        console.log("büyüktür");
    }
    else{
        console.log("küçüktür");
    }
};
condi();

const condi2 = () =>{
    let num = 4;
    if(num >= 2)
        console.log("büyüktür");
    else
        console.log("küçüktür");
};
condi2();

const condi3 = () =>{
    let num = 4;
    let result = (num >= 2) ? "büyüktür" : "küçüktür"; // * ternary operatörü (?:)
};
condi3();

const condi4 = () =>{
    let num = 4;
    console.log((num >= 2) ? "büyüktür" : "küçüktür");
};
condi4();

// * birden fazla if else yapısı
const condi5 = () =>{
    let num = 4;
    if(num == 1){
        console.log("1");
    }
    else if(num == 2){
        console.log("2");
    }
    else if(num == 3){
        console.log("3");
    }
    else if(num == 4){
        console.log("4");
    }
    else{
        console.log("object");
    }
};
condi5();

// * switch-case
const condi6 = () =>{
    let num = 4;
    switch (num) {
        case 1:
            console.log("1");
            break;
        case 2:
            console.log("2");
            break;
        case 3:
            console.log("3");
            break;
        case 4:
            console.log("4");
            break;
        default:
            console.log("object");
            break;
    }
};
condi6();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! LOOP

// * break    => döngüyü kırma
// * return   => metod kırma
// * continue => bir kereye mahsus atlayıp döngüyü devam ettirme

// * for döngüsü
let loop = () => {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}
loop();

// * while döngüsü (sonsuz döngüler için kullanılır)
let loop2 = () => {
    let i = 1;
    while(i <= 10){
        console.log(i);
        i++;
    }
}
loop2();

// * do while döngüsü (do bir kere çalışır ve sonra while kontrol edilir)
let loop3 = () => {
    let i = 1;
    do{
        console.log(i);
        i++;
    }
    while(i <= 10);
}
loop3();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! TRY-CATCH (hata ayıklama için )

let tryCatch = () => {
    try {
        alertx("try");
    } catch (error) {
        console.log("catch " + error.message); // hatayı yazdırma
        console.log("catch " + error.name); // hatayı tanımsal yazdırma
        console.error("catch " + error); // hatayı tüm detaylarıyla görüntüleme
    } finally{
        console.log("db.close"); // her koşulda çalışması gereken kodlar
    }
}
tryCatch();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! DEBUG (hata ayıklama)

// debug yapılacak satırlar tıklanarak breakpoint olarak ayarlanır.
// debug seçildiğinde chrome seeneğini seçip oluşturduğu json dosyasına proje linkini yapıştırıyoruz.
// ardından launch kısmından çalıştırıyoruz. 
const debugData = () => {
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i;
    }
    console.log("toplam : " + sum);
}
debugData();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! SOFTWARE PRINCIBLES

// * KISS : (keep it simple,stupid) tasarımı basit tutmayı ve gereksiz karmaşıklıktan kaçınmayı amaçlar.

// * YAGNI : (you aren't gonna need it) sadece mevcut ihtiyaçlara odaklanılması gerektiğini savunur ve gereksinimler ortaya çıkmadan önce 
// * gereksiz özellikler eklemekten kaçınılması gerektiğini ifade eder.

// * SOLID : 5 temel prensibi temsil eder;
// * S: (Single responsbility princible) Bir sınıfın veya modülün tek sorumluluğu olması.
// * O: (Open / closed princible) Mevcut kodu değiştirmeden yeni özellikler eklemek mümkün olmalıdır.
// * L: (Liskow substitution princible) Türetilmiş bir sınıf üst sınıfın davranışını değiştirmemeli ancak genişletmelidir.
// * I: (Interface segregation princible) Arayüzler işlevsel olmalı ve gereksiz metodlar içermemelidir.
// * D: (Dependency Inversion princible) Yüksek seviyeli modüller düşük seviyeli modüllere bağlı olmamalıdır.

// * CLEAN CODE : kodun karmaşıklığını azaltmak, gereksiz detayları ortadan kaldırmak

// * SPAGHETTI CODE : kötü kodlama uygulamalarının bir sonucu olarak ortaya çıkan karmaşık, okunması zor ve bakımı zor olan bir kod tabanını tanımlar.

// * DUMMY CODE : sahte veya örnek kod, bir yazılım geliştiricinin bir konsepti anlamak veya bir problemi çözmek için kullanabileceği basit, işlevsiz kod parçasıdır.

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! Monad
// * Bir fonksiyonun çıktısı, başka bir fonksiyonun girdisi ise buna monad denir.

const first = () => {
    let user = Number(prompt("Lütfen bir sayı giriniz : "))
    return user;
}
const second = () => {
    let data = first();
    console.log(Math.sqrt(data));
}
second();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! setTimeOut() , setInterval()

// * settimeout : belirlenen zaman sonra çalışır. 1 kere çalışır.
setTimeout(function(){
    console.log("setTimeOut Çalıştı");
},2000)

// * setInterval : belirlenen zaman sonra çalışır ve sonsuza kadar devam eder.
setInterval(function(){
    console.log("setinterval Çalıştı");
},2000)

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! callbackfunction
// * Farklı fonksiyonlar arasında bilgi akışı sağlamamıza yarar. Fonksiyonlar arasında işlemler sürer. Karmaşık yapılar oluşur.

const ilk = (data) => {
    return Math.pow(data,2);
}

const iki = (callbackfunction) => {
    let user = Number(prompt("Lütfen bir sayı giriniz : "))
    let data = callbackfunction(user);
    console.log(data);
}

second(first);

// ! promise
// * callbackfunction'dan çok daha kısa yazım ile fonksiyonlar arası çalışmayı sağlar.
// * catch bir tane olmak zorunda

const prom = () => {
    let data = new Promise((resolve, reject) => {
        let status = 200;
        if (status === 200){
            resolve("çalıştı"); // olumlu sonuç ise then içine girer
        }else{
            reject("çalışmadı"); // olumsuz sonuç catch içine girer
        }
    }).
    then(() => {
        console.log("olumlu");
    }).
    catch((err) => {
        console.error(err);
    }); 
}
prom();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! FIFO (First-In-First-Out) ve LIFO (Last-In-First-Out) terimleri
// * veri yapısı olan veri kümelerini veya koleksiyonları işlerken sıkça kullanılır. 
// * Bu iki terim, verilerin koleksiyondan nasıl alındığını ve sıralandığını tanımlar.

// * FIFO (First-In-First-Out): Bu kavram, ilk giren ilk çıkar anlamına gelir. Yani, veri koleksiyonuna eklenen ilk öğe, 
// * koleksiyondan çıkarılmak istendiğinde ilk olarak çıkarılır. FIFO sıralama, bir sırayla işleme ve kuyruk mantığına uyar. 
// * Örnek olarak, bir sıra oluştururken veya işlemleri sırayla işlerken FIFO kullanılabilir.

// * LIFO (Last-In-First-Out): Bu kavram, son giren ilk çıkar anlamına gelir. Yani, veri koleksiyonuna eklenen son öğe, 
// * koleksiyondan çıkarılmak istendiğinde ilk olarak çıkarılır. LIFO sıralama, bir yığın (stack) yapısına benzer ve son eklenen öğeler önce çıkarılır. 
// * Örnek olarak, geri alma (undo) işlemi veya işlem yığınlama (call stack) gibi senaryolarda LIFO kullanılabilir.

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! dizi Iterative for , for in, for of, foreach, map, filter, fill

let arr = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    return numbers;
}
arr();

let arrResult = () => {
    let data = arr();
    console.log(data);
    console.log(data[data.length - 1]); // son elemana ulaşma

    // ? Iterative for loops
    for (let i = 0; i < data.length; i++) {
        document.write(data[i] + " ");
    }
    document.write("<br/>");
    
    // ? for in
    for(let temp in data){
        document.write(temp + "=>" + data[temp] + " ");
    }
    document.write("<br/>");

    // ? for of
    for(let temp of data){
        document.write(temp + " ");
    }
    document.write("<br/>");

    // ? foreach
    //   forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    data.forEach(element => {
        document.write(element + " ");
    });
    document.write("<br/>");
    data.forEach(function(value, index,array){
        document.write(`${index} => ${value} <br/> ${array} `);
    })

    // ? filter
    let result1 = data.filter((value, index,array) => {
        return value % 2 == 0;
    }).forEach(function(value, index,array){
        document.write(`${index} => ${value} <br/>`);
    })
    console.log(result1);

    // ? map
    let result2 = data.map((value, index,array) => {
        return value += 10;
    })
    console.log(result2);

}
arrResult();


// ! dizi metotları

let data = [0,1,2,3,4,5,6,7,8,9];

console.log(data.length); // * eleman sayısı

data.push(99); // * dizi sonuna eleman ekleme

data.unshift(11); // * dizi başına eleman ekleme

data.pop(); // * dizi sondan eleman siler

data.shift(); // * dizi başından eleman siler

data.sort(); // * diziyi küçükten büyüğe sıralar

data.reverse() // * diziyi terse çevirir

console.log(data.toString()); // * diziyi stringe çevirme

console.log(data);

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! JSON ve XML arasındaki farklar

// JSON (JavaScript Object Notation) ve XML (eXtensible Markup Language), veri depolamak, iletmek ve yapılandırmak için kullanılan iki farklı 
// veri biçimidir. Her ikisi de veri taşıma amaçları için kullanılabilir, ancak bazı temel farklar vardır:

// * Sözdizimi:
// JSON: JSON, JavaScript tabanlı bir veri biçimidir ve verileri anahtar-değer çiftleri olarak depolar. 
// Veriler, çoğunlukla JSON nesneleri olarak adlandırılan süslü parantezler { } içinde depolanır. 
// Anahtarlar metin (dize) olmalıdır ve değerler dize, sayı, mantık, nesne, dizi veya null olabilir.
// XML: XML, metin tabanlı bir veri biçimidir ve açılış ve kapanış etiketleri kullanarak verileri yapılandırır. 
// Her öğe (element) bir açılış etiketi (<tag>) ve bir kapanış etiketi (</tag>) ile çevrelenir. 
// XML, kullanıcı tarafından tanımlanan etiketler kullanılarak daha karmaşık veri yapılarını ifade etmek için esnek bir yapı sunar.

// * Okunabilirlik:
// JSON: JSON, insanlar için daha okunabilir bir formatta olabilir. Veriler genellikle düzgün biçimlendirilmiş ve hızlıca anlaşılabilir.
// XML: XML, insanlar için daha zor okunabilir olabilir, özellikle büyük ve karmaşık belgelerde. 
// Etiketler, verileri çevrelerken fazladan işaretleme gerektirir.

// * Veri Taşıma Amaçları:
// JSON: JSON, web uygulamaları ve RESTful API'ler gibi modern uygulama geliştirme senaryoları için sıklıkla tercih edilir. 
// JavaScript ile kolayca işlenebilir.
// XML: XML, veri belgelerini değişiklik yapma veya verileri dönüştürme gerektiren çok sayıda iş süreci ve endüstri standardında kullanılır. 
// Özellikle B2B veri alışverişi ve belge depolama için kullanışlıdır.

// * Veri Boyutu:
// JSON: JSON verileri genellikle daha az karakter içerir, bu nedenle daha küçük veri boyutlarına sahiptir. 
// Bu, JSON'un daha hızlı ağ iletimine ve daha düşük bant genişliği gereksinimlerine yol açabilir.
// XML: XML verileri daha fazla metin içerir ve bu nedenle JSON'a göre daha büyük veri boyutlarına sahiptir.
// Her iki formatın da avantajları ve dezavantajları vardır ve kullanılacakları bağlama bağlıdır. 
// JSON, modern web uygulamaları ve hızlı veri iletimi için sıklıkla tercih edilirken, XML daha esnek ve endüstri standartlarına daha uygun olabilir.

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! object

let objectTutorial = () => {

    const personObj = { // * obje
        name: 'John',
        "surname" : `doe`,
        number : 1,
        isLogin : false,
        "software" : ["HTML", "CSS"], // * obje içerisinde dizi kullanma
        fullname:function(){   // * obje içerisinde fonksiyon
            return this.name + " " + this.surname;
        }
    };
    console.log(personObj); 
    console.log(personObj.name); // * variable
    console.log(personObj["surname"]); // * variable nested 
    console.log(personObj.software[0]); // * obje içindeki dizinin indeksine ulaşma

    const objectToString = JSON.stringify(personObj); // * objeyi stringe çevirme
    console.log(objectToString); 
    const stringToObject = JSON.parse(objectToString); // * stringi objeye çevirme
    console.log(stringToObject); 

    personObj.lang = "english"; // * object variable (objeye ekleme yapma)
    console.log(personObj.lang);

    console.log(personObj.fullname()); // * obje içindeki fonksiyonu yazdırma
}
objectTutorial();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! object constructor
let objectConstructor = () => {
    
    let personCons = function(name,surname){
        this.name = name;
        this.surname = surname;
        console.log(this);
    };

    let personResult = new personCons("Tuğçe","KANER");
    let person2 = new personCons("Berk","KURAL");
}
objectConstructor();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! call, apply, bind

// * parametresiz
let noParameterCallApplyBind = () => {

    let functionOtherObject = function(){
        console.log(`Parametresiz Function : ${this.adi}`);
    }

    let objectData = {
        "adi" : "Tuğçe",
    };

    functionOtherObject.call(objectData);
    functionOtherObject.apply(objectData);
    let deneme = functionOtherObject.bind(objectData);
    deneme();
}
noParameterCallApplyBind();

// * parametreli
let ParameterCallApplyBind = () => {

    let functionOtherObject = function(surname){
        console.log(`Parametresiz Function : ${this.adi} => ${surname}`);
    }

    let objectData = {
        "adi" : "Tuğçe",
    };

    functionOtherObject.call(objectData,"KANER");
    functionOtherObject.apply(objectData,["KANER"]);
    let deneme2 = functionOtherObject.bind(objectData,"KANER");
    deneme2();
}
ParameterCallApplyBind();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! obje ve dizilerle callback - promise örneği

// * callback ile
let callbackfunctionComputer = () => {

    const computerObject1 = { // * 1. objelerle yazım
        computerName : "callback computer 1",
        price : 100,
    };
    const computerObject2 = {
        computerName : "callback computer 2",
        price : 200,
    };
    const computerObject3 = {
        computerName : "callback computer 3",
        price : 300,
    };

    const computerArray = [ // * 2. objeleri dizi içerisinde toplama
        {computerName : "callback computer 1", price : 100,},
        {computerName : "callback computer 2", price : 200,},
        {computerName : "callback computer 3", price : 300,}
    ];

    const computerArray2 = []; // * 3. diziyi objelerle random oluşturma
    for (let i = 0; i < 5; i++) {
        let computerObject = {
            computerName : "computer " + (i + 1), 
            price : (i + 1) * 100
        };
        computerArray2.push(computerObject);
    }
    console.log(computerArray2);

    for (let i = 0; i < computerArray2.length; i++) { // * dizideki objelerin tek bir değer karşılığını yazdırma
        console.log(computerArray2[i].computerName);
    }
    const arrayincomputerName = () => { // * map ile değer yazdırma
        computerArray2.map((temp) =>{
            console.log(`${temp.computerName}`);
        })
    }
    arrayincomputerName();

    const arrayInPrice = (price,callBackFnc) => { 
        computerArray2.push(price);
        callBackFnc();
    }

    arrayInPrice({computerName: "computer 6", price : 600},arrayincomputerName);
}
callbackfunctionComputer();

// * promise ile 
let promiseComputer = () => {

    const computerArray = [ // * 2. objeleri dizi içerisinde toplama
        {computerName : "callback computer 1", price : 100,},
        {computerName : "callback computer 2", price : 200,},
        {computerName : "callback computer 3", price : 300,}
    ];

    const computerArray2 = []; // * 3. diziyi objelerle random oluşturma
    for (let i = 0; i < 5; i++) {
        let computerObject = {
            computerName : "computer " + (i + 1), 
            price : (i + 1) * 100
        };
        computerArray2.push(computerObject);
    }
    console.log(computerArray2);

    for (let i = 0; i < computerArray2.length; i++) { // * dizideki objelerin tek bir değer karşılığını yazdırma
        console.log(computerArray2[i].computerName);
    }
    const arrayincomputerName = () => { // * map ile değer yazdırma
        computerArray2.map((temp) =>{
            console.log(`${temp.computerName}`);
        })
    }
    arrayincomputerName();

    const arrayInComputerObject = (obj) =>{
        const promiseReturn = new Promise(() => {
            computerArray2.push(obj);
        })
        return promiseReturn;
    }
    arrayInComputerObject({computerName: "computer 6", price : 600})
    .then((response) => {console.log(response);})
    .catch((err) => {console.error(err);})
}
promiseComputer();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! event

// * buttonlar ile olay tetikleme
let eventFunction = () => {
    console.log("event çalıştı");
}

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! DOM

// * Document Object Model
// * Projedeki HTML, CSS ve JS manipülasyonu / yönlendirmesi denebilir.
let newDataDate = () => {

    // * HTML
    let now = document.getElementById("text-data");  // * butona tıklandığında text içeriği güncelleme
    now.innerHTML = "<b><i>" + new Date().getFullYear() + "</i></b>";

    // * CSS
    now.style.color = "yellow"; 
    now.style.backgroundColor = "black";
    now.style.padding = ".5rem";
}

// ! dom işlemleri için element seçim yöntemleri;
// ? document.getElementById => id'ye göre
// ? document.getElementsByClassName[i] => i indeksindeki class'a göre
// ? document.getElementsByTagName => tag'a göre
// ? document.querySelector => daha rahat bir seçim, class, id kullanılabilir

// * sayfa geçişi 
let outside = () =>{
    let userinfo = window.confirm("Farklı bir sayfaya gitmek ister misiniz ?")
    ? window.location = "https://www.linkedin.com/feed/"
    : window.alert("Bu sayfada kalındı.");
}

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! listener

// * olay dinleme
let userListener = () => {
    let listenerParag = document.getElementById("parag2_id");
    listenerParag.addEventListener("click", function(e){
        alert(e.preventDefault + " " + e.target);
        document.getElementById("log-admin").innerHTML = "okundu";        
    });
}
userListener();

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! local storage
// * verileri database ya da browser'da saklanır. Localstorage ise veri saklamak için kullanılır, sadece lokal bilgisayarda kullanılabilir.
// * tarayıcı üzerine kayıt yapar.
let localData = () => {
    // * locale bilgi kaydetme
   const name = localStorage.setItem("name", "Tuğçe");
   const surname = localStorage.setItem("surname", "KANER");

    // * localden bilgi çekme
   const getName = localStorage.getItem("name");
   console.log(getName);

    // * belirtilen key silme
   localStorage.removeItem("name");

    // * tüm local storage temizleme
    localStorage.clear();
}
localData();

// ------------------------------------------------------------------------------------------------------------------------------------------- //








