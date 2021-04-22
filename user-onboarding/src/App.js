import React, { useState } from "react";
import axios from "axios";
import schema from "./formSchema";
import * as yup from "yup";
import User from './User.js'
import UserCard from "./UserCard";


const initialFormValues = {
  name:'',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: false,
}

const initialUsers = [];

function App() {
  const [users, setUsers] = useState(initialUsers); // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors); 


  const postNewUser = (newUser) => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res.data)
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) //
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };



  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ["agree"].filter(
        (agree) => formValues[agree]
      ),
    };
    postNewUser(newUser);
    setFormValues(initialFormValues)
  };



  return (
    <div>
      <User values={formValues} submit={formSubmit} change={inputChange} errors={formErrors}/>

      {users.map((user) => {
        return <UserCard key={user.id} details={user} />;
      })}

    </div>
  );
}

export default App;
