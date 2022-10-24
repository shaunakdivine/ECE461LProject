import logo from './logo.svg';
import './StatusButton.css';
import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Button} from '@material-ui/core';


function StatusButton(props) {
    const initialText = props.initialText
    const [buttonText, setButtonText] = useState("Join");
    const isJoined = props.isJoined


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