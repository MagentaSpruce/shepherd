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
    <div
      className="bg-amber-500 w-[90vw] h-[20vh] max-w-lg mx-auto p-2 text-center rounded-md
    xs:h-[22vh]
    xp:h-[20vh]"
    >
      <form
        onSubmit={handleSubmit}
        className="p-2 bg-orange-300 h-[18vh]  rounded-md
        xs:h-[20vh]
        xp:h-[18vh]"
      >
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
        <div className="mb-2 p-1 flex justify-center">
          <label htmlFor="name" className="sm:text-lg">
            Name:
          </label>
          &nbsp;
          <input
            className="w-[80%] rounded-lg indent-1 bg-orange-100
            sm:text-lg"
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
          <label className="sm:text-lg" htmlFor="email">
            Email:{' '}
          </label>
          &nbsp;
          <input
            className="w-[80%] rounded-lg indent-1 bg-orange-100
            sm:text-lg "
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
            ref={emailRef}
          />
        </div>
        {!alert.show && (
          <Button
            className="text-center bg-orange-600 rounded-lg shadow-md px-3 py-1  mt-2 shadow-orange-500 hover:scale-110 active:scale-100 cursor-pointer transition-all text-xl tracking-wider text-orange-300 font-semibold
            xp:mt-4
          "
            type="submit"
            disabled={submitting}
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
}

export default Form;
