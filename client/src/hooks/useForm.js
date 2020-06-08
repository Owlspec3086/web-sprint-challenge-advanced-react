// write your custom hook here to control your checkout form
import React, { useState } from 'react';


//adding initialvalue as props
const useForm = initialValue => {
  //setting useState for values
  const [values, setValues] = useState(initialValue);

  //Dealing with handle events
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];

};

export default useForm;
