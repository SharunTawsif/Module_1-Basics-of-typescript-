const course : string = "Sharun Tawsif"
console.log(course);


let student : [string, number] = ["tawsif", 12];

let hello : [string, number][] = [
    ["tawsif", 12],
    ["maruf", 13]
    
]


//shob gular type define kore disi and value ase 

let obj : {
    firstName : string;
    middleName : string;
    lastName : string;
} = {
    firstName : "sharun",
    middleName : "something",
    lastName: "tawsif"
}

//jekono ekta element er value nai tokhn ei system..eitake ke optional type define bole

let obj1 : {
    firstName : string;
    middleName ?: string;
    lastName : string;
} = {
    firstName : "sharun",
    
    lastName: "tawsif"
}

//amra ekhanei jodi kono organization er naam add korte chai

let obj2 : {
    organization : string;
    firstName : string;
    middleName ?: string;
    lastName : string;
} = {
    organization : "programming hero",
    firstName : "sharun",
    lastName: "tawsif"
}
//eita chaile change o kore fela possible
obj2.organization = "AUST";


//jodi emn hoy je amra eita kokhonoi change korte dibo na taile evabe use korbo..eitar kono type declare na kore naam ta kei type hishebe define kore dibo,,eita ke chailei change kora possible na
//etake literal types bola hoy
let obj3 : {
    organization : "programming hero";
    firstName : string;
    middleName ?: string;
    lastName : string;
} = {
    organization : "programming hero",
    firstName : "sharun",
    lastName: "tawsif"
}

//different way..define korar shomoy readonly use korlam..ekhn chaileo pore r change kora jabe na

let obj4 : {
    readonly organization : string;
    firstName : string;
    middleName ?: string;
    lastName : string;
} = {
    organization : "programming hero",
    firstName : "sharun",
    lastName: "tawsif"
}