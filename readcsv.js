const { parse } = require('csv-parse');
const { createReadStream } = require('fs');

const readCSV = () => {
    const friends = [];

    const readStream = createReadStream('./people.csv', 'utf8');

    readStream
        .pipe(
            parse({
                delimiter: ',',
                columns: true,
                trim: true,
            })
        )
        .on('data', (chunk) => {
            friends.push(chunk);
        });

    readStream.on('error', (err) => {
        console.log('Error found');
    });

    readStream.on('end', () => {
        for (const property in friends) {
            console.log(`${property}:${property.last_name}`) // i'm not sure how to loop through this object to compare the date. everything i tried is coming back as undefined. 
        }

        console.log(friends);
        console.log('Finished reading csv file');
    });
};
readCSV()
