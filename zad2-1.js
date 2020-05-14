console.log('zd1_1_3');
const li_other = document.querySelectorAll("li");

const getDatasInfo = (links) => {
    let array = [];
    for(i=0;i < links.length; i++){
        array.push(links[i].dataset);
    } 
    return array;
}

let wynik = getDatasInfo(li_other);
console.log(wynik)