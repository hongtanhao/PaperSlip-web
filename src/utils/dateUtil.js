/* eslint-disable */
Date.prototype.format = function (dateF) {
    var tempObj = {
        'Y+': this.getFullYear(),
        'M+': this.getMonth() + 1 ,
        'D+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getMinutes(),
    }
    Object.keys(tempObj).forEach(element => {
        if (tempObj[element] < 10)  tempObj[element] = '0' + tempObj[element]
        if(new RegExp(element).test(dateF)) {
            dateF = dateF.replace(new RegExp(element,  'g'), tempObj[element]) // "2019-11-21 13:0m+:0s+"
        }
    });
    return dateF;
}
console.log(new Date().format('YYYY-MM-DD'))
