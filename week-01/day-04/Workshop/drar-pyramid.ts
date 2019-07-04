let lineCount: number = 7;
/*let star: string = "*"
//let half=Math.floor(lineCount/2);
let before: string="a"
for (let i: number=1; i<lineCount-1;i++) {
    before+="a";
}
for (let k: number = 1; k<lineCount; k++) {
    console.log(before+star+after);
    before-="a";
    after-="a";
    star+="*";

}*/
let space: string="";
let star: string="*";
while (lineCount>=1) {
    for (let j=lineCount-1; j>=1; j--){
    space+=" ";
}
    console.log(space+star);
    star+="*";
    star+="*";
    space="";
    lineCount--;
}