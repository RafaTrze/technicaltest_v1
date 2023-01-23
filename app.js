// const contacts = require('./createreaddb')

// console.log(contacts.friends) // empty object. i'm not sure how to use async function to resolve that.

// data conversion 
// 

// db object is how i want the data to look like and logic bellow to make it work
const db = {
    '1': {
        firstName: 'Rafal',
        lastName: 'Trzeciak',
        birthDay: '17/1',
        birthYear: 1998,
        email: 'aaaaaa',
    },

    '2': {
        firstName: 'John',
        lastName: 'Doe',
        birthDay: '30/3',
        birthYear: 2000,
        email: 'aaaaaa',
    },

    '3': {
        firstName: 'Jane',
        lastName: 'Doe',
        birthDay: '29/2',
        birthYear: 2004,
        email: 'aaaaaa',
    },

    '4': {
        firstName: 'Arthur',
        lastName: 'Deen',
        birthDay: '28/2',
        birthYear: 1901,
        email: 'aaaaaa',
    },
};

let date = {
    day: new Date().getDate(),
    month: (new Date().getMonth() + 1),
    year: new Date().getFullYear(),
    dayMonth: `${new Date().getDate()}/${(new Date().getMonth() + 1)}`
}

// date.day = 10;
// date.month = 12;

// date input: 
date.year = 2001;
date.dayMonth = '28/2'


const isItSkipYear = () => {
    let test = date.year/4 - Math.floor(date.year/4)
    if (test === 0) {
        return true
    }

    else {
        return false
    }
};

// console.log(date.year/4 - Math.floor(date.year/4));
// console.log(isItSkipYear())

console.log(`It is: ${date.dayMonth}`)

if (isItSkipYear() == true) {
    for (let property in db) {
        if (db[property].birthDay == date.dayMonth){
            console.log(`Subject: Happy Birthday! \n
Happy birthday, dear ${db[property].firstName}`)
        }
    }
}     


else {
    if (date.dayMonth == '28/2') {
        for (let property in db) {
            if (db[property].birthDay == date.dayMonth){
                console.log(`Subject: Happy Birthday! \n
Happy birthday, dear ${db[property].firstName}`)
            }
        }
        
        date.dayMonth = '29/2'

        for (let property in db) {
            if (db[property].birthDay == date.dayMonth){
                console.log(`Subject: Happy Birthday! \n
Happy birthday, dear ${db[property].firstName}`)
            }
        }
    }

    else {
        for (let property in db) {
            if (db[property].birthDay == date.dayMonth){
                console.log(`Subject: Happy Birthday! \n
Happy birthday, dear ${db[property].firstName}`)
            }
        }
    }
};

console.log('end')