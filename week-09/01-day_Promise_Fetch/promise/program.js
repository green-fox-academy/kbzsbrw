//9th task
// function parsePromised() {
//     let promise = new Promise((resolve, reject) => {

//     })
// }

//7th task
const promise = new Promise((resolve, reject) => {
    resolve('FULFILLED!')
});

promise.then().then().then(console.log);

// Sixth task
// let promise = Promise.resolve('fulfilled');
// promise = Promise.reject('rejected');

// promise.catch(console.log);

// Fifth task
// const promise = new Promise((resolve, reject) => {
//     resolve('PROMISE VALUE');
// })

// promise.then(console.log);
// console.log('MAIN PROGRAM');

// Fourth task
// const promise = new Promise((resolve, reject) => {
// resolve('I FIRED');
// reject(new Error('I DID NOT FIRE'));
// })
// function onRejected(error) {
//     console.log(error.message);
// }
// promise.then(console.log,onRejected);

// Third task
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('REJECTED!'));
//   }, 300);
// });

// function onReject(error) {
//   console.log(error.message);
// }

// promise.then(null, onReject);
// Second task
// const promise = new Promise((resolve, reject) => {
//   resolve('FULFILLED!');
// });
// promise.then(resolve => {
//   setTimeout(()=>console.log(resolve), 300);
// });
//First ex
// setTimeout(() => console.log('TIMED OUT!'), 300);
