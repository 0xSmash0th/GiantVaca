const msg = "Go to the Giant page and sign up for your vaccine!!!"
const phn1 = '##########'
const phn2 = '##########'
const myKey = '#### YOUR API KEY GOES HERE'

const re1 = new RegExp('There are currently no COVID-19 vaccine appointments available.', 'gi');
const re2 = new RegExp('Our services aren\'t available right now', 'gi');

function NewTab() { 
    window.open( 
        "https://www.youtube.com/watch?v=09LTT0xwdfw", "_blank");
}

function textMe(phnNumber){
    fetch('https://textbelt.com/text', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        phone: phnNumber,
        message: msg,
        key: myKey, // Get your key here: 
        }),
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkPage(){
    while (true) {
        await sleep(30000)
        const matches1 = document.documentElement.innerHTML.match(re1)
        const matches2 = document.documentElement.innerHTML.match(re2)
        if (matches1 || matches2) {
            location.reload();
        } else {
            //textMe(phn1);
            //textMe(phn2);
            NewTab();
            alert("Go to the Giant page and sign up for your vaccine!!!");
        }  
    }
}

checkPage()