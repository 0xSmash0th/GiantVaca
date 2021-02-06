const re = new RegExp('There are currently no COVID-19 vaccine appointments available.', 'gi')

function NewTab() { 
    window.open( 
        "https://www.youtube.com/watch?v=09LTT0xwdfw", "_blank");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkPage(){
    while (true) {
        await sleep(5000)
        const matches = document.documentElement.innerHTML.match(re)
        if (matches) {
            location.reload()
        } else {
            NewTab();
            alert("Go to the Giant page and sign up for your vaccine!!!");
        }  
    }
}

checkPage()