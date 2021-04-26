        //Değişken, obje, dizi, fonksiyon tanımlama, 

        //let ile değişken tanımlanır
        let first_name='Hande';
        console.log(first_name);
        //const ile tanımladığın değişkenin değeri değiştirilemez
        const interestRate=0.3;
        //değişkenin tuttuğu değeri temizlemek için null kullanılır
        let selectedColor=null;
        //Değişkenin tipine çalışma anında karar verilir, bu sayede değeri sonradan değiştirilebilir
        console.log('first_name:',first_name, ', Tipi:', typeof first_name);
        first_name=5; //js'de int,float gibi ayrım yok hepsi number tipinde
        console.log('first_name:',first_name,', Tipi:',typeof first_name);
        //js primitive tipleri: String, Number, Boolean, undefined, null
        first_name=undefined;
        console.log('first_name:',first_name,', Tipi:',typeof first_name);
        first_name=null;
        console.log('first_name:',first_name,', Tipi:',typeof first_name);
        
        //js Referans tipleri: Object, Array, Function

        //Obje tanımlama
        let person = {
                name: 'Hande',
                age:25
        };
        //Dot notation ile obje değerini değiştirme
        person.name='Nur';
        //Bracket notation ile obje değerini değiştirme
        person['name']='Şen';
        //Bracket notation kullanarak program çalışırken dinamik olarak alama yapabiliriz
        //Örneğin kullanıcı menüden seçim yapar, selection değişkenine kaydedilir sonrasında Bracket gösterimi ile objenin ilgili özelliği güncellenir.
        let selection='name';
        person[selection]='Hande';
        console.log(person);

        //Array tanımlama 
        // Boş olarak tanımlamak istersen -> let selectedColors=[];
        let selectedColors=['red','blue'];
        //Diziye eleman ekleme ve elemanın değerinideğiştirmme
        selectedColors[2]='green';
        //Dizi tek tip elemanlardan oluşmak zorunda değil
        selectedColors[2]=1;
        //Dizinin uzunluğu
        console.log('Dizi:',selectedColors, 'Uzunluğu:',selectedColors.length);
        console.log('İlk elemanı:',selectedColors[0]);

        //Fonksiyon tanımlama
        function greet(name,lastName){
                // "," yerine "+" kullanarak da concat işlemini yapabilirsin, + kullandığında boşluksuz birleştiriyor
                console.log('Hello', name,lastName);
        }
        //Fonksiyonu çağırma. Eğer burada 2. değişkeni vermezsen undefined olarak aktarılır
        greet('Hande');

        function square(number){
                return number*number;
        }
        //fonksiyonun sonucunu doğrudan değişkene atayabiliriz
        let number=square(2);
        console.log(square(2));