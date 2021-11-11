const { catchingTrain, gettingTrain, noSpace, doSomethingElse} = require('./train.js')

const passengers =["Brian", "Eric", "Bob", "Jo", "Dave", "Pingu"]

function arrivingAtStation(passenger){
    console.log(`\n ${passenger} arrive at station`)

    catchingTrain()
    .then(r => gettingTrain(r, passenger))
    .catch(err => noSpace(err, passenger))
}

for (let c of passengers){
    arrivingAtStation(c);
    doSomethingElse(c);
}