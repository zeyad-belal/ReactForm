import React from "react";
import styles from "./Form.module.css";
import ErrorModal from "../UI/ErrorModal";

function Form(props) {
  let inputNameRef = React.useRef() 
  let inputAgeRef = React.useRef() 

  let [error, setError] = React.useState("");

  function submitHandler(event) {
    event.preventDefault();

    //REFS
    let enteredName = inputNameRef.current.value
    let enteredAge = inputAgeRef.current.value

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0 ) {
      setError(
        {
          title : "Error Message",
          content : "Name or Age is missing",
          action : () => setError('')
        });
      return;
    }else if (+enteredAge < 1){
      setError(
        {
          title : "Error Message",
          content : "Age must be > 0",
          action : () => setError('')
        });
    }
    props.userData(enteredName, enteredAge);
    inputNameRef.current.value = ''
    inputAgeRef.current.value = ''

  }

  return (
    <>
      {error && <ErrorModal title={error.title} content={error.content} action={() => setError('')}/>}

      <form onSubmit={submitHandler} className={styles.form}>

        <label htmlFor="name">Username</label>
        <input
          id="name"
          type="text"  
          ref ={inputNameRef}
          />

        <label htmlFor="age">Age (Years)</label>
        <input 
        id="age" 
        type="number" 
        ref ={inputAgeRef}
        />

        <button type="submit">Add User</button>

      </form>
    </>
  );
}

export default Form;
