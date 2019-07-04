let lineCount: number = 7;
let space: string="";
let star: string="*";
for (let k: number = 0; k<lineCount; k++) {
    for (let j: number = 0; j<=lineCount-k;j++) {
    space+=" ";
    }
    console.log(space+star);
    star+="**";
    space="";
}

