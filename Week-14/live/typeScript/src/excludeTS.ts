type UserEvent = 'click' | 'scroll' | 'mousemove'

type UserEventExclude = Exclude<UserEvent, 'scroll'>

const evenHandler = (userEvent: UserEventExclude) => {
    console.log(`Event: ${userEvent}`)
}

evenHandler('click');
// evenHandler('scroll'); // Error - Argument of type '"scroll"' is not assignable to parameter of type 'UserEventExclude'