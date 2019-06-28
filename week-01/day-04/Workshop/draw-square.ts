let lineCount: number = 6;
let mark: string= "%";
let space: string= "";
for (let i: number=1;i<=lineCount; i++) {
    if (i==1 || i==lineCount) {
        for (let m: number = 0; m<=lineCount-1; m++) {
            mark+="%";
        }
        console.log(mark);
        mark="%";
    } else {
        for (let n: number = 0; n<=lineCount-2;n++){
            space+=" ";
            
        }
        console.log(mark+space+mark);
        space="";
    }

}
