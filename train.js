const catchingTrain =() => new Promise(trainArrived);
const gettingTrain =({ line, time}, name) => 
console.log(`${name} is not getting on ${time} 
train on the ${line}`,);
const noSpace = ({message}, name ) => console.log(`${name} 
scream, "It's not my fault that  ${message}!" \n`)

const doSomethingElse = name => console.log(`${name}is doing 
something else while they wait`);


let seatCount =3;

function trainArrived(resolve, reject){
    console.log('trains coming in');
    if(seatCount >=1){   //if specialsaucecount is = to 1 then it will run the next
   const train = {line: "South Western", time: 7.43}
   seatCount --
   setTimeout(() => {
       console.log("Got seat!")
       resolve(train)
   }, 1000)
}else{
    const error = {message: 'no seats available'}
    setTimeout(() => {
        console.log("no seats")
        reject(error)
    })
}
};


module.exports = {catchingTrain, gettingTrain, noSpace, doSomethingElse}
