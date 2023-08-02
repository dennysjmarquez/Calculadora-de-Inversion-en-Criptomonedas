let dataCrypto = null;

const csv = require('csv-parser');
const {createReadStream} = require("fs");

const loadDataCryptoReturn = () => {
    if (!dataCrypto) {
        dataCrypto = new Promise((resolve, reject) => {
            const data = [];
            createReadStream('./data/crypto-return.csv')
                .pipe(csv())
                .on('data', (row) => {
                    data.push(row);
                })
                .on('end', () => resolve(data))
                .on('error', (err) => reject(err));
        });
    }
    return dataCrypto;
}
module.exports = {loadDataCryptoReturn};
