import { BulbState } from "./BulbState"
import { ToggleState } from "./ToggleState"

// export const Bulb = () => {
//     const [ bulb, setBulb ] = useState(true);  {/* this useState is being moved up here, since this component is the lowest common ancestor for <BulbState /> and <ToggleState /> components
// by doing this we are able to access these state variables in both these components. */}
//     return (                                    
//         <div>
//             <BulbState bulb={bulb} />
//             <ToggleState setBulb={setBulb}/>
//         </div>
//     )
// }


// export const Bulb = ({bulb, setBulb}) => {   
//     {/* receiving props from parent <App /> component and the use of this intermediate component <Bulb /> is just to pass
// down props, which is un-necessary  */}
//     return (                                    
//         <div>
//             <BulbState bulb={bulb} />     
//             <ToggleState setBulb={setBulb}/>
//         </div>
//     )
// }

export const Bulb = () => {   
        return (                                    
            <div>
                <BulbState />     
                <ToggleState />
            </div>
        )
    }