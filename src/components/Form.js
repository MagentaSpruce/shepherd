import { useRef, useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Alert from './Alert';

function Form({ getFormData }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submitting, isSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = e => {
    isSubmitting(true);
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const formData = {
      name: name,
      email: email,
    };

    console.log(formData);
    nameRef.current.value = '';
    emailRef.current.value = '';
    getFormData(formData);
    isSubmitting(false);
    showAlert('success', 'Results submitted', true);
  };

  const showAlert = (type = '', msg = '', show = false) => {
    setAlert({ show: show, type: type, msg: msg });
  };

  return (
    <div className="bg-red-300 w-[90vw] h-[20vh] max-w-lg mx-auto p-2 text-center">
      <form onSubmit={handleSubmit} className="p-2 bg-blue-300 h-[18vh] ">
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
        <div className="mb-2 p-1 flex justify-center">
          <label htmlFor="name" className="">
            Name:
          </label>
          &nbsp;
          <input
            className="w-[60%] rounded-lg indent-1"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            required
            minLength="4"
            ref={nameRef}
          />
        </div>
        <div className="p-1 flex justify-center">
          <label htmlFor="email">Email: </label>

          <input
            className="w-[60%] rounded-lg indent-1"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
            ref={emailRef}
          />
        </div>
        <Button
          className="text-center bg-indigo-500 rounded-lg shadow-lg px-2  mt-2 shadow-indigo-500 hover:scale-110 active:scale-100 cursor-pointer transition-all text-xl tracking-wider 
          "
          type="submit"
          disabled={submitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
