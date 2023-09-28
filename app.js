
// ! cross platform yapısına sahip.
// ! oop yapısına uygun

// ? yorum satırları;
// single comment
/*
multiple comments
*/

// ! veri yazdırma şekilleri
// * konsolda verileri görmek için
// console.log("loglama");
// console.warn("warn");
// console.error("error");
// console.info("info");

// * pop-up çıkarıp bilgilendirme için
// alert("bilgilendirme");

// * ekrana yazı yazdırmak için
// document.writeln("ekranda yazı");

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! variables
// ! var
// aynı isimde değişken oluşturulabilir, değişken içeriği değiştirilebilir.

// var result = 14.53;
// console.log(typeof result + " => " + result);
// var result = "js";
// console.log(typeof result + " => " + result);
// var result = 2023;
// console.log(typeof result + " => " + result);
// var result = true;
// console.log(typeof result + " => " + result);

// ? naming convention
// var deneme = "deneme";
// console.log(deneme);

// var _$deneme44 = "deneme";
// console.log($deneme44);

// var deneme44 = "deneme";
// console.log(deneme44);

// var denemeVerisi = "deneme";
// console.log(denemeVerisi);

// * whoisting yapısı
// result2 = 56;
// var result2;

// ! let
// aynı isimde değişken oluşturulamaz, değişken içeriği değiştirilebilir.

// let say =2;
// let say =3; // hatalı yazım

// ! const
// aynı isimde değişken oluşturulamaz, değişken içeriği değiştirilemez.

// const kdv = 0.18;


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

// var num1 = 40;
// var num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);
// console.log(num1 ** num2);

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// pop-up ile kullanıcıdan bilgi alma. Bilgiyi string olarak alır. cast(numbera çevirme)
// var userdata = Number(prompt("lütfen sayı giriniz : "));
// console.log(userdata);

// ? undefined => tanımsız
// var result;
// console.log(result);
// ? NaN => not a number, bir sayı değil
// var result = "asdf" / 4;
// console.log(result);
// ? isNaN => sayı olup olmadığını gösterir. true ya da false döndürür
// var result = 5;
// console.log(isNaN(result));
// ? Infinity => bir sayıyı sıfıra bölme hatası
// var result = 5;
// console.log(result/0);

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! Math
// console.log(Math.PI); // pi sayısını verir
// console.log(Math.E); // e sayısını verir
// console.log(Math.min(4,5,87,65,21)); // sayıların en küçüğünü verir
// console.log(Math.max(4,5,87,65,21)); // sayıların en büyüğünü verir
// console.log(Math.sqrt(16)); // karekök
// console.log(Math.abs(-25)); // mutlak değer
// console.log(Math.pow(2,3)); // üslü sayılar
// console.log(Math.floor(3.4)); // sayıyı aşağıya yuvarlar
// console.log(Math.ceil(3.4)); // sayıyı yukarıya yuvarlar
// console.log(Math.round(3.4)); // en yakın tam sayıya yuvarlama yapar
// console.log(Math.sin(45)); // sinusunu verir
// console.log(Math.round(Math.random()*9)); // rastgele sayılar üretir

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// * Number
// var say = 15000;
// console.log(say); 

// var say2 = 1.5E+4; // bilimsel yazım
// console.log(say2); 

// var binary = 0b00011; // * binary 0 ve 1 lerden oluşur => ikilik sayı sistemi
// console.log(binary); 

// var octal = 0o7612; // * octal : 0-1-2-3-4-5-6-7 => sekizlik sayı sistemi
// console.log(octal); 

// var decimal = 1234567; // * decimal : 0-1-2-3-4-5-6-7-8-9 => onluk kullandığımız sayı sistemi
// console.log(decimal); 

// var hexadecimal = ff1245; // * hexadecimal : 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F => hex kodları yazımı
// console.log(hexadecimal);

// * Cast
// ! veri türlerini birbirine çevirme

// * Number, bir değeri sayıya dönüştürmeye çalışır ve başarısız olduğunda NaN döndürür. Her türlü veriyi sayıya çevirmeye çalışır.
// console.log(Number("10")+10);
// * parseInt, bir dizeyi belirtilen temel sayı sistemine (genellikle onluk sayı sistemine) göre sayıya dönüştürür. 
// * Başarıyla dönüştürülemediğinde 0 döndürür. Genellikle metin dizelerini sayılara dönüştürmek için kullanılır.
// console.log(parseInt("10")+10);

// var number = 30;
// * string bir veri türüdür. Bir değişkenin veya bir değerin dize (string) türünde olduğunu belirtmek için kullanılır.
// console.log(String(number) + 10);
// * data.toString() ise bir yöntemdir ve çoğu JavaScript nesnesi üzerinde kullanılabilir. Bu yöntem, bir nesnenin içeriğini bir dizeye dönüştürmek için kullanılır.
// * Nesnenin tipine ve içeriğine bağlı olarak farklı sonuçlar üretebilir. Bazı nesneler bu yöntemi özelleştirebilir, bu nedenle dönüşüm sonucu değişebilir.
// console.log(number.toString()+10); // stringe çevirme



// ------------------------------------------------------------------------------------------------------------------------------------------- //


// * String
// * Array
// * Object

// * string metodları;
// let str = " merHaba ";
// console.log(str);
// console.log(str.trim()); // ? baş ve sondaki boşlukları siler
// console.log(str.toLowerCase()); // ? hepsini küçük harf yapar
// console.log(str.toUpperCase()); // ? hepsini büyük harf yapar
// console.log(str.charAt(2)); // ? parantez içerisindeki indekste bulunan karalteri verir
// console.log(str.indexOf("a")); // ? arama yapıp ilk bulduğu index sonucunu verir
// console.log(str.lastIndexOf("a")); // ? arama yapıp en sondaki index sonucunu verir
// console.log(str.concat("ekleme")); // ? sonuna ekleme yapar
// console.log(str.replace(str,"replace")); // ? içerik değiştirmek için kullanılır
// console.log(str.startsWith("a")); // ? başlangıcı kontrol edip boolean değer verir
// console.log(str.endsWith("a")); // ? son karakteri kontrol edip booelan değer verir
// console.log(str.includes("a")); // ? verilen karakteri içerip içermediğini kontrol eder, boolean değer verir
// console.log(str.length); // ? değişkenin karakter uzunluğunu verir
// console.log(str.substring(0, 2)); // ? verilen indeks numaraları arasındaki karakterleri verir

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// ! FUNCTION

// * parametresiz ve değer döndürmeyen
// function deneme1() {
//     console.log("deneme1");
// };
// deneme1();

// * parametreli ve değer döndürmeyen
// function deneme2(isim) {
//     console.log("deneme2 " + isim);
// }
// deneme2("Tuğçe");

// * parametresiz ve değer döndüren
// function deneme3() {
//     return "deneme3";
// }
// let result = deneme3();
// console.log(result);

// * parametreli ve değer döndüren
// function deneme4(ad) {
//     return "deneme4 " + ad;
// }
// let result = deneme4("Tuğçe");
// console.log(result);

// * anonymous function
// let value = function(a,b){sonuc = a + b; return sonuc; };
// console.log(value(2,5));

// * arrow function
// let arrow = (a,b) => {sonuc = a + b; return sonuc;}
// console.log(arrow(2,5));

// ------------------------------------------------------------------------------------------------------------------------------------------- //









