interface users {
    name: string;
    age: number;
    gender: 'male' | 'female';
    cr: number
}
type station = 'mbk' | '11' | 'siam';
let pay: number;
let currentLocation: station = 'mbk';
let destination: station = '11';
let anusorn: users = { name: "yo", age: 61, gender: "male", cr: 100  }
const isCheckAge = (age: number): boolean => {
    if (age <= 6 || age >= 60) {
        return true;
    } else {
        return false;
    }
}
const ticket = (mStation: station, mDestination: station): void => {
    if (mStation !== mDestination) {
        let start: number = 0;
        let end: number = 0;
        const station: station[] = ['mbk', '11', 'siam'];

        for (let index = 0; index < station.length; index++) {
            if (station[index] === mStation) {
                start = index
            }
            if (station[index] === mDestination) {
                end = index;
            }
        }
        if (start === -1 || end === -1 || start > station.length) {
            console.log('invalid station');
            return ;
        }
        const stationCount:number = Math.abs(end - start) ;
        let fare :number =0 ;
        // promotion
        if(isCheckAge(anusorn.age))
        {
            fare = stationCount*5 ;
        }else
        {
            fare =  stationCount*10;
        }
        console.log(`You are traveling from ${mStation} to ${mDestination}` );
        console.log(`Total station ${stationCount}` );
        console.log(`Total fare ${fare}` );
        if(anusorn.cr - fare <= 0)
        {
            console.log(`No cr , Remaining ${anusorn.cr}`);
        }else
        {
            console.log(`Remaining ${anusorn.cr - fare}`)
        }
    } else {
        console.log("Unable");
    }
}

ticket(currentLocation, destination);