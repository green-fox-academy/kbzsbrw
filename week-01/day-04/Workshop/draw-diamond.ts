let lineCount: number = 2;
let doubleit = lineCount*2;
    for(let i: number=0; i<doubleit; i++){
        if (i < lineCount){
            for(let j: number =0; j<i; j++){
                console.log('*');
            }
        }
        else if (i >= lineCount){
            for(let j=doubleit; j>i; j--){
                console.log('*');
            }
        }
    }