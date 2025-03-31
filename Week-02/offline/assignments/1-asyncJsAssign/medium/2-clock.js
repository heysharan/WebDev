const time = () => {
    console.clear();
    const date = new Date()
    let hours24 = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');

    let hours12 = ((date.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
    let ampm = date.getHours >= 12 ? 'PM' : 'AM';

    console.log(`${hours24}:${minutes}:${seconds}`)
    console.log(`${hours12}:${minutes}:${seconds} ${ampm}`)

}

setInterval(time,1000)