// type KeyInput = 'Up' | 'Down' | 'Left' | 'Right';

// const doSomething = (keyPressed: KeyInput): number | string => {
//     if(keyPressed === 'Up'){
//         return 1
//     }
//     else if(keyPressed === 'Down'){
//         return 2
//     }
//     else if(keyPressed === 'Left'){
//         return 3
//     }
//     else if(keyPressed === 'Right'){
//         return 4
//     }
//     else {
//         return 'Invalid Option'
//     }
// }

// console.log(doSomething('Up'))
// console.log(doSomething('Down'))
// console.log(doSomething('UpDown'))


enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

const doSomething = (keyPressed: Direction): number | string => {
    if(keyPressed === Direction.Up){
        return 1
    }
    else if(keyPressed === Direction.Down){
        return 2
    }
    else if(keyPressed === Direction.Left){
        return 3
    }
    else if(keyPressed === Direction.Right){
        return 4
    }
    else {
        return 'Invalid Option'
    }
}

console.log(doSomething(Direction.Up))
console.log(doSomething(Direction.Down))
console.log(Direction.Up)