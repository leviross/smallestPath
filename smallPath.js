//TEST CASES

var arr = [
             ["07"],
        ["51", "29"],
     ["13", "11", "70"],
  ["30", "31", "77", "45"]
];


var arr2 = [
             ["03"],
        ["74", "21"],
     ["06", "29", "95"],
  ["44", "84", "26", "09"],
["71", "62", "58", "07", "47"]
];

//EXPECTED OUTPUT - OBJECT LITERAL WITH 2 KEYS
// {
//   sum: 77,
//   path: ["07", "29", "11", "30"]
// }

var smallestPath = function(arr){
    //VARIABLES OUTSIDE OUR FOR LOOPS
    finalArray = [];
    var temp = 100;
    var sum = 0;
    var path = [];
    //FIRST FOR LOOP, LOOPING THROUGH THE OUTER ARRAY
    for(var i = 0; i < arr.length; i++){
        var elementArray = arr[i];
        //LOOPING THROGH EACH ARRAY WITHIN THE OUTER ARRAY
        for(var j = 0; j < elementArray.length; j++){
            //PARSING THE STRINGS AND MAKING THEM INTO INTEGERS
            var elementInt = parseInt(elementArray[j],10);
            //SAVING THE SMALLEST NUMBER TO THE TEMP VARIABLE
            if(elementInt < temp){
                temp = elementInt;
            }
        }
        //PUSHING SMALLEST NUMBER OF EACH INDIVIDUAL ARRAY INTO FINAL ARRAY
        finalArray.push(temp);
        //INCREMENTING THE SUM VARIABLE
        sum += temp;
        //RE-INITIAZLING TEMP TO 100
        temp = 100;
    }

    //CHANGING THE NUMBERS BACK INTO STRINGS
    finalArray.map(function(item){
        item = item.toString();
        //ADDING A "0" TO ANY NUMBER UNDER 10 SO THAT IT PRODUCES "07" NOT JUST "7"
        if(item.length == 1){
            item = "0" + item;
        }
        path.push(item);
    });

    //OUR FINAL OBJECT VARIABLE WITH KEYS
    var finalObject = {
        sum: sum,
        path: path
    }
    //I WAS RUNNING THIS WITH A NODE COMMAND FROM THE SHELL TO TEST
    return console.log(finalObject);
    //RETURNING FINAL OBJECT WHICH WAS THE REQUESTED OUTPUT, THANX 4 PLAYIN ALOOONG:)
    //return finalObject;

}

smallestPath(arr);








