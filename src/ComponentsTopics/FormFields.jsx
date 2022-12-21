import React ,{useState} from "react";

function FormFields() {
    const [Data, setData] = useState({
      name: "",
      email: "",
      password: "",
      gender: "",
      language: "",
      checkk:false
    });
    const handleForm = (event) =>{
        event.preventDefault();
        console.log(Data);
    }
    const getData = (event) => {
        const {name,value,checked} = event.target;
        setData({
          ...Data,
          [name]: value,
          checkk:checked
        });
        
    }
  return (
    <div>
      <form onSubmit={handleForm}>
        <label style={{ display: "block" }} htmlFor="name">
          Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder="username"
          value={Data.name}
          onChange={getData}
        />
        <label style={{ display: "block" }} htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={Data.email}
          onChange={getData}
        />
        <label style={{ display: "block" }} htmlFor="password">
          Password
        </label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={Data.password}
          onChange={getData}
        />
        <br />
        <br />
        <label htmlFor="" style={{ display: "block" }}>
          Gender :
        </label>
        <input
          type="radio"
          name="gender"
          id="male"
          value={Data.gender}
          onChange={getData}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value={Data.gender}
          onChange={getData}
        />
        <label htmlFor="female">Female</label>
        <br />
        <br />
        <label htmlFor="language">Language : </label>
        <select
          name="language"
          id="op"
          value={Data.language}
          onChange={getData}
        >
          {""}
          <option>Select Options</option>
          <option>ANGULAR</option>
          <option>REACT</option>
          <option>VUE</option>
          <option>NEXT</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          name="checkk"
          id="check"
          value={Data.checkk}
          onChange={getData}
        />
        <label htmlFor="check">Accept Terms and Conditions</label>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default FormFields;
