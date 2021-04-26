//OOP temelleri -> js'de aşağıdaki OOP'ya ait 4 özellik nulunur
//Encapsulation : Benzer kodların bir araya toplanmasoyla karmaşıklığın azaltılmasıdır, kod parçaları tekrar kullanılabilir
//Abstraction : Arka planı gizleyerek karmaşıklığı azlatır, koddaki değişikliklerin etkisini izole eder
//Inheritance : Kodun tekrarlanmasını önler
//Polymorphism : swithc/case kullanmak yerine daha temiz çözüm imkanı sunar

//Obje oluşturup çağırma
const circle ={
    //Objenin propertileri
    radius:1,
    //objenin özellikleri de obe olabilir
    location:{
        x:1,
        y:1
    },
    //Objenin metotları
    draw: function(){
        console.log('draw');
    }
};

circle.draw();

//Objenin 1 ya da çok sayıda metodu varsa Factory Function kullanmak, obje tanımlamaktan daha mantıklı 
//const circle objesi tanımlamak yerine aşağıdaki Factory Function ı kullanabiliriz. 
//Böylece metotlarda değişikliğe gidersek ondan üretilmiş bütün objeler kolayca güncellenir
function createCircle(radius){
    return{
        //radius:radius şeklinde kullanmak yerine ismi aynı olduğu için kısaca aşağıdaki gibi tanımlayabiliriz
        radius,
        draw: function(){
            console.log('draw');
        } 

    };
}
//Factory Function a göre oluturduğumuz obje.
const circle2=createCircle(1);
circle2.draw();

//Factory fuction yerine Constructor Function da kullanılabilir
// Constructor Function ismi büyük harfle başlar, bu yönüyle class tanımına benzer ancak js'de class yapısı yoktur
function Circle(radius){
    //Factoryden farklı olarak yapıcı metot return ile başlamaz
    //Yapıcı metodun özellikleri ve metotları "this" ile tanımlanır
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
    //Objeyi bastırmak istersek
    console.log('obje',this);
}
//Yapıcı metot new anahtar kelimesiyle çağrılır. 
//new ile önce boş obje yaratılır, objeye işaret edilir ve this ile değişkenler doldurulur
//new kullanmayı unutma!! eğer new kullanmayı unutursan global tanımlanmış olur değikenler
const another = new Circle(1);
//console'da another.constructor yazarak objenin yapıcı metodunu görebilirsin
//Tanımladığımız Circle fonskiyonu aslıda bir objedir, bu sayede onun üzerinden objelerin özelliklerine ulaşabiliriz
console.log(Circle.name,Circle.length);

//Aşağıdaki gösterim "new Circle(1);" demekle aynı şey
//ilk süslü parantezle new kısmının işi yapılır; boş obje oluşturulur, ardından fonksiyoun parametreleri gönderilir.
Circle.call({},1);
//call e benzeyen bir diğer metot da apply , tek farkı apply'da parametrelerin dizi formatında gönderilmesi
//elimizde hali hazırda bir diz varsa ve fonksiyonumuza göndermek istiyorsak apply daha kullnaışlı
Circle.apply({},[1]);

//Js'de fonksiyona çalışma anında yeni özellik eklemek mümkündür
//Aşağıdaki örnekte önceden tanımladığımız Circle objesine location propertisi ekleniyor
const circle3 = new Circle(10);
circle3.location={x:1};
//Aynı işlemi parantezli gösterimle uygulayarak kodun çalışması anında dinamik olarak erişebiliriz
//özellikle "-" gibi özel karakterler geçiyorsa parantezli veryion kullanılmalı, diğer türlü yapamazsın
const propertyName ='center-location';
circle3[propertyName]={x:1};

//delete ile dinamik olarak silme işlemi de yapılabilir
delete circle3.location;
delete circle3['center-location'];

//aşağıdaki döngüyle objenin özellik ve metotlarını bastırabiliriz
for (let key in circle3){
    console.log(key);
    //değerler de aşağıdaki gibi bastırılabilir
    console.log(key,circle3[key]);
    //eğer sadece özellikleri bastırmak, metotları görmemek istiyorsan aşağıdaki gibi if föngüsü ekleyebilirsin
    if (typeof circle3[key]!== 'function')
        console.log("Özellikler:",key,circle3[key]);
}
//Objenin key'lerini görmenin bir diğer yolu da şudur
console.log(Object.keys(circle3));

//Objede belirli bir özelliğin varlığını kontrol etmek için
if('radius' in circle3)
    console.log('Circle3 has a radius');

    //Abstraction ile kullanıcının erişmesini istemediğimiz obje özelliklerine erişmesini engellemiş oluruz
    function Shape(radius){
        this.radius=radius;
        //this kullanmadan let ile tanımladığımız değişkenler local değişkendir, fonskion dışından ulaşılmaz. private gibi düşünülebilir
        let color ='red';
        let defaultLocation ={x:0,y:0};
        let computeOptimumLocation = function(factor){

        }

        this.draw=function(){
            computeOptimumLocation(0.1);
            //defaultLocation  :local değişkenlere bu şekilde ulaşabilirsin
            //this.radius      :yukarıda this ile tanımlanmış değişkeni çağıracaksan yine this kullanman gerekir
        };

        //Getter - Setter
        this.getDefaultLocation=function(){
            return DefaultLocation;
        };

        //Özelliğe erişip güncellemenin bir diğer yolu da defineProperty fonksiyonunu kullanmaktır
        Object.defineProperty(this,'defaultLocation',{
            //Dışarıdan özelliği görmek için
            get: function(){
                return defaultLocation;
            },
            //Dışarıdan özelliği güncellemek için
            set: function(value){
                //Verilen değeri kontrol etmek için if kullanabilirsin
                if(!value.x||!value.y)
                    throw new Error('Invalid location.');

                defaultLocation=value;
            }
        });       

    }
    const shape = new Shape(10);


    //Stopwatch fonksiyonu tanımlayıp zaman ölçümü yapalım
function Stopwatch(){
    let startTime, endTime, running, duration=0;
    this.start=function(){
        if (running)
            throw new Error('Stopwatch has already started');

        running=true;

        startTime= new Date();
    };
    this.stop=function(){
        if (!running)
            throw new Error('Stopwatch is not started');

        running=false;

        endTime= new Date();
        
        const seconds = (endTime.getTime()-startTime.getTime())/1000;
        duration += seconds;
    };
    this.reset= function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    }
}




