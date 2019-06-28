let lineCount: number = 6;

let mark: string= "%";
let before: string= "";
let after: string= "";
let z: number= 3;
for (let i: number=1;i<=lineCount+1; i++) {
    if (i==1 || i==lineCount+1) {
        for (let m: number = 0; m<=lineCount-1; m++) {
            mark+="%";
        }
        console.log(mark);
        mark="%";
    } else {
        for (let n: number = 0;n<=lineCount-z;n++) {
            after+=" ";
        }
        console.log(mark+before+mark+after+mark);
        after="";
        before+=" ";
        z++;
    }

}