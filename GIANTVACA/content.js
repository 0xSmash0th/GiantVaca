const re1 = new RegExp('There are currently no COVID-19 vaccine appointments available.', 'gi')
const re2 = new RegExp('Our services aren\'t available right now', 'gi')

function NewTab() { 
    window.open( 
        "https://www.youtube.com/watch?v=09LTT0xwdfw", "_blank");
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
            location.reload()
        } else {
            NewTab();
            alert("Go to the Giant page and sign up for your vaccine!!!");
        }  
    }
}

checkPage()