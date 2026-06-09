const btn = document.getElementById('btn');
const bday = document.getElementById('birthday');
const res = document.getElementById('result');

const bdayValue = bday.value;

console.log(bdayValue);

function calculateAge(){
    const bdayValue = bday.value;

    if(bdayValue === ""){
        alert("Please Enter your Birthday");
    }
    else{
        const age = getAge(bdayValue);
        res.innerText = `Your age is ${age} ${age > 1 ? 'years' : 'year'} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }

    return age;
}

btn.addEventListener('click', calculateAge);
