let lineCount: number = 12;
let half=Math.floor(lineCount/2)+1;
let space: string="";
let star: string="*";
if (lineCount % 2 === 0) {
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
    star="*";
    for (let m: number = 0; m<half; m++) {
        for (let n: number = 0; n<(lineCount)-1-(m*2);n++) {
        star+="*";
        }
        console.log(space+star);
        space+=" ";
        star="";
    }

} else {
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
}
