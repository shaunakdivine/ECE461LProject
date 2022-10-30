
import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function StatusButton() {
    // const initialText = props.initialText
    const [buttonText, setButtonText] = useState("Join");
    // const isJoined = props.isJoined


    // function handleClick(){

    //     setButtonText('Leave');

    //     setTimeout(() => {
    //         setButtonText(initialText);
    //       }, 1000); 
    //     }
    

      return (
        <div>
          <Button onClick={() => setButtonText("Leave")}>{buttonText}</Button>
        </div>
      );

}

StatusButton.defaultProps = {
    isJoined: false
}

export default StatusButton;