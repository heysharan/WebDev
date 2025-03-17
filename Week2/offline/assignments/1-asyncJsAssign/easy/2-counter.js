let i = 0;
const counter = () => {
    console.clear();
    console.log(i);
    i++
    setTimeout(counter, 1000);    
}

setTimeout(counter, 1000);