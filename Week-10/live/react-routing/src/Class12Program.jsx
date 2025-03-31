import { useNavigate } from 'react-router-dom'

export const Class12Program = () => {
    const navigate = useNavigate();
    const redirectBtn = () => {
      navigate('/')
    }
    return <>
    <div>NEET courses for Class 12th</div>
    <button onClick={redirectBtn}>Redirect to Home</button>
    </>;
};