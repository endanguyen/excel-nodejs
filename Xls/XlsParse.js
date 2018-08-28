"use strict";
const xls = require('./xlsx');
/**
 * Xls Parse.
 * @private
 */
class XlsParse {
    constructor (data, opts) {
        this.xlsData = xls.read(data);
        this.xlsBinary = xls.write(this.xlsData, {
            bookType: 'xlsx',
            type: 'buffer'
        });
        return this.xlsBinary;
    }

    deleteBinary(){
        delete this.xlsBinary;
    }
}
module.exports = XlsParse;
