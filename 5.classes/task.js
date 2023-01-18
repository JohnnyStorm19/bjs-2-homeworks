//MISSON #1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(value) {
        if(value > 100) {
            this._state = 100;
        } else if(value < 0) {
            this._state = 0;
        } else {
            this._state = value;
        }
    }
    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'novel';
    }
}

class FantasticBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'detective';
    }
}

//MISSION #2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if(book.state >= 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        const findResult  = this.books.find(item => item[type] === value);
        return findResult  || null;
    }
    giveBookByName(bookName) {
        const findResult = this.books.find(item => item.name === bookName);
        this.books = this.books.filter((item) => item.name !== bookName);
        return findResult || null;
    }
}

//TESTING 

//Наполняю библиотеку
let library = new Library('Российская Национальная Библиотека');
library.addBook(
    new NovelBook(
        'Александр Дюма',
        'Граф Монте-Кристо (Комплект из 2 книг)',
        2020,
        1248
    )
);
library.addBook(
    new DetectiveBook(
        'Эдгар Аллан По',
        'Убийство на улице Морг',
        2019,
        288
    )
);
library.addBook(
    new Magazine(
        'ДЭВИД ЛИНЧ | \"Твин-пикс\"',
        2020,
        107
    )
);
library.addBook(
    new FantasticBook(
        'Френк Герберт',
        'Дюна',
        2020,
        704
    )
);
library.addBook(
    new DetectiveBook(
        'Уилки Коллинз',
        'Лунный камень',
        1919,
        512
    )
);

//Поиск издания 1919 года
library.findBookBy('releaseDate', 1919);

//Выдача книги
let givenBook = library.giveBookByName('Дюна');

//Повреждение книги
givenBook.state = 85;

//Восстанавливаю книгу
givenBook.fix();

//Добавляю восстановленную книгу в библиотеку
library.addBook(givenBook);






//MISSION #3
class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};

    }
    addMark(mark, subject) {
        if(mark > 5 || mark < 2) {
            return;
        } 
        if(!this.marks.hasOwnProperty(subject)){
            this.marks[subject] = [];
            this.marks[subject].push(mark); 
        } else {
        this.marks[subject].push(mark);   
       }
    }
    getAverageBySubject(subject) {
        if(this.marks.hasOwnProperty(subject) && this.marks[subject].length > 0) {
            return this.marks[subject].reduce( (acc, current) => acc + current) / this.marks[subject].length;
        } else {
            return 0;
        }
    }
    getAverage() {
        let keys = Object.keys(this.marks);
        if(keys.length === 0) {
            return 0;
        } else {
            let averageMarks = keys.map((item) => this.getAverageBySubject(item));
            return averageMarks.reduce((acc, current) => acc + current) / averageMarks.length;
        }
    }

}

//TESTING 
let student1 = new Student(
    'Гарри Поттер',
    'мужской',
    11
);
let student2 = new Student(
    'Гермиона Грейнджер',
    'женский',
    11
)
let student3 = new Student(
    'Рональд Уизли',
    'мужской',
    11
)

//Добавляю предметы и оценки
student1.addMark(2, 'Зельеварение');
student1.addMark(3, 'Зельеварение');
student1.addMark(2, 'Зельеварение');
student1.addMark(5, 'Защита от темных искусств');
student1.addMark(4, 'Защита от темных искусств');
student1.addMark(4, 'Травология');

student2.addMark(5, 'Зельеварение');
student2.addMark(5, 'Зельеварение');
student2.addMark(5, 'Зельеварение');
student2.addMark(5, 'Защита от темных искусств');
student2.addMark(5, 'Защита от темных искусств');
student2.addMark(4, 'Предсказание');

student3.addMark(2, 'Зельеварение');
student3.addMark(2, 'Зельеварение');
student3.addMark(3, 'Зельеварение');
student3.addMark(3, 'Защита от темных искусств');
student3.addMark(4, 'Защита от темных искусств');
student3.addMark(3, 'Травология');

//Считаю среднее по предмету
student1.getAverageBySubject('Зельеварение');
student2.getAverageBySubject('Защита от темных искусств');
student3.getAverageBySubject('Зельеварение');

//Считаю среднюю оценку по всем предметам
student1.getAverage();
student2.getAverage();
student3.getAverage();




