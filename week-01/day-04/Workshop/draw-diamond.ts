let lineCount: number = 7;
let half=Math.floor(7/2)+1;
let space: string="";
let star: string="*";
for (let k: number = 0; k<half; k++) {
    for (let j: number = 0; j<=half-k;j++) {
    space+=" ";
    }
    console.log(space+star);
    star+="*";
    star+="*";
    space="";
}


space="   ";
star="";
for (let m: number = 0; m<half; m++) {
    for (let n: number = 0; n<(lineCount)-2-(m*2);n++) {
    star+="*";
    }
    console.log(space+star);
    space+=" ";
    star="";
}



/*  for (let m: number = 0; m<lineCount; m++) {
    for (let n: number = 0; n<=lineCount-m;n++) {
    space+="";
    }
    console.log(space+star);
    star+=" ";
    star+=" ";
    space="";
}
 */

