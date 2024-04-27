import { useState } from "react";

const Captcha = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [userAnswer, setUserAnswer] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <>
      <p>Please solve the following problem to proceed:</p>
      <p>
        {num1} + {num2} =
      </p>
      <input
        type="text"
        value={userAnswer}
        onChange={handleChange}
        className="input input-bordered"
      />
      {errorMsg && <p>{errorMsg}</p>}
    </>
  );
};

export default Captcha;
