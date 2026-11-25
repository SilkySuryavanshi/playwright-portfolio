export {    }
let score: number = 95;
if (score >= 90) {
    console.log("Result is EXCELLENT");
}
else if (score >= 50) {
    console.log("Result is PASS");
}
else {
    console.log("Result is FAIL");
}

//Task 2
const browsers: string[] = ["chrome", "firefox", "webkit"];
for (let i=0; i<browsers.length; i++)
{ console.log("The Current browsers in your system are: ", browsers[i])}


//Task 3
const scores: number[] = [80, 45, 95, 30];
for (let i=0; i< scores.length; i++) {
if  (scores[i] >= 50) {
    console.log(scores[i], "Result is PASS");
}
else {
    console.log(scores[i],"Result is FAIL");
}
}