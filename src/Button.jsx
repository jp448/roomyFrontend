import { useNavigate } from "react-router-dom";
import './Button.css';

function Button(props) {
    let navigate = useNavigate();
    function handleClick(){
        navigate(`/${props.path}`);
    }
    return (
        <button className="button-56" onClick={handleClick}>
            {props.children}
        </button>
    );
}

export default Button;