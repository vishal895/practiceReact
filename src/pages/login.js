import "../App.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [selectgender, setSelectGender] = useState("");

  const handleSubmit = () => {
    if (!name) {
      setErrors("Please enter name");
      return;
    }

    if (!password) {
      setErrors("Please enter password");
      return;
    }
    if (!selectgender) {
      setErrors("Please enter gender");
      return;
    }

    const formData = {
      "name": name,
      "password": password,
      "gender":selectgender
    };

    axios
      .post("https://google.com", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log("login success");
        }
      })
      .catch((Err) => {
        console.error("failed");
      });
  };

  return (
    <>
      <div className="portion">
        <div className="card">
          <h1 className="login">Login Form</h1>

          <label for="fname" className="head">
            User Name
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="input"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
          />

          <label for="fpassword" className="head">
            Password
          </label>
          <br />
          <input
            type="text"
            id="fpassword"
            name="fpassword"
            className="input"
            value={password}
            onChange={(e) => setPassword(e?.target?.value)}
          />

          <h3 className="head">Please Select</h3>
          <select
            class="form-select"
            aria-label="Default select example"
            className="select_p"
            onChange={(e) => setSelectGender(e.target.value)}
            value={selectgender}
          >
            <option selected>Open this select gender</option>
            <option value="1">male</option>
            <option value="2">Female</option>
          </select>
          <br />
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>

          <p>{errors}</p>
        </div>
      </div>
    </>
  );
}

export default Login;
