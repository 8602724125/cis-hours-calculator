var str = "  8 hrs, 49 min	8 hrs, 12 min	2 min	0 min	9 hrs, 17 min	8 hrs, 43 min	9 hrs, 49 min	9 hrs, 2 min	5 hrs, 46 min	0 min	0 min	0 min	9 hrs, 11 min	9 hrs, 47 min	8 hrs, 23 min  ";

    // str = str.trim();
    // str = str.replace(/\t/g, ', ')
    // var hrs = str.matchAll(/hrs/g);
    // var min = str.matchAll(/min/g);
    // var workingDays = Array.from(hrs).length;
    // var totalDays = Array.from(min).length;
    // var totalWorkingMinutes = (workingDays * 8 * 60);
    // var myWoringMinutes  = 0;
    // console.log('totalWorkingMinutes: ', totalWorkingMinutes);
    // console.log('totalDays: ', totalDays);
    // console.log('workingDays: ', workingDays);

    // var str1 = str.split(',');


    // var data;
    // for (let i=0; i<str1.length; i++) {
    //     data = str1[i].trim();
    //     if (data.includes('hrs')) {
    //         myWoringMinutes += (parseInt(data.slice(0, 2))) * 60;
    //     } else if (data.includes('min')) {
    //         myWoringMinutes += parseInt(data.slice(0, 2));
    //     }
    // }
    // var final = "";
    // var hm;
    // var h1;
    // var m1;
    // if (myWoringMinutes - totalWorkingMinutes == 0) {
    // console.log("perfect")
    // } else if (myWoringMinutes - totalWorkingMinutes > 0) {
    //     hm = myWoringMinutes - totalWorkingMinutes;
    //     h1 = parseInt(hm / 60);
    //     m1 = parseInt(hm % 60);
    //     final = h1 + " hrs" + " " + m1 + " min"
    // } else {
    //     hm = totalWorkingMinutes - myWoringMinutes;
    //     h1 = parseInt(hm / 60);
    //     m1 = parseInt(hm % 60);
    //     final = h1 + " hrs" + " " + m1 + " min"
    // }

    // console.log('myWoringMinutes: ', myWoringMinutes);
    // console.log('final: ', final);




    str = str.trim();
    str = str.replace(/,/g, '')
    str = str.replace(/\t/g, '')
    var hrs = str.matchAll(/hrs/g);
    var min = str.matchAll(/min/g);
    var workingDays = Array.from(hrs).length;
    var totalDays = Array.from(min).length;
    var totalWorkingMinutes = (workingDays * 8 * 60);
    var myWoringMinutes  = 0;
    console.log('totalWorkingMinutes: ', totalWorkingMinutes);
    console.log('totalDays: ', totalDays);
    console.log('workingDays: ', workingDays);

    // var str1 = str.split('hrs');
    var str1 = str.split('min');
    // console.log('str1: ', str1);
    // console.log('str2: ', str2);
    // console.log('str2 length: ', str2.length);


    var data;
    for (let i=0; i<str1.length -1; i++) {
        data = str1[i].trim();
        if (data.includes('hrs')) {
            myWoringMinutes += (parseInt(data.slice(0, 2))) * 60;
            myWoringMinutes += parseInt(data.substr(-2));
        } else {
            myWoringMinutes += parseInt(data.substr(-2));
        }
    }
    var final = "";
    var hm;
    var h1;
    var m1;
    if (myWoringMinutes - totalWorkingMinutes == 0) {
    console.log("perfect")
    } else if (myWoringMinutes - totalWorkingMinutes > 0) {
        hm = myWoringMinutes - totalWorkingMinutes;
        h1 = parseInt(hm / 60);
        m1 = parseInt(hm % 60);
        final = h1 + " hrs" + " " + m1 + " min"
    } else {
        hm = totalWorkingMinutes - myWoringMinutes;
        h1 = parseInt(hm / 60);
        m1 = parseInt(hm % 60);
        final = h1 + " hrs" + " " + m1 + " min"
    }

    console.log('myWoringMinutes: ', myWoringMinutes);
    console.log('final: ', final);


