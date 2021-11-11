const { catchingTrain, gettingTrain, doSomethingElse, noSpace} = require("./train.js")



const passengers =["Brian", "Eric", "Bob", "Jo", "Dave"]

async function arrivingAtStation(passenger){
    try{
        console.log(`\n ${passenger} has arrived at station`)
        const order = await catchingTrain()
        gettingTrain(order, passenger)
     } catch (e) {
     noSpace(e, passenger)
}
}

for (let c of passengers){
    arrivingAtStation(c);
    doSomethingElse(c);
}