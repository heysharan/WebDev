import { useNavigate } from 'react-router-dom'

export const Class12Program = () => {
    const navigate = useNavigate()
    const redirect = () => {
        navigate('/')
    }
    return (
        <div>
            <h4>NEET courses for Class 12th</h4>
            <button onClick={redirect}>Home</button>
        </div>
    )
}