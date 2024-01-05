const person = {
    name:"Erald",
    surname:"Skura",
    adress:{
        street:"Rr.Ali Demi",
        city:"Tirana",
        country:"Albania"
    },
    profiles:['twiter','linkedIn','instagram'],
    printProfiles:()=>{
       person.profiles.map(
            (profile)=>{
                console.log(profile)
            }
        )
    }
}

export default function LearningJavaScript(){
    return(
       <>
        <div>{person.name}</div>
        <div>{person.surname}</div>
        <div>{person.adress.street}</div>
        <div>{person.adress.city}</div>
        <div>{person.profiles[0]}</div>
        <div>{ person.printProfiles() }</div>
       </>
       
    );
}