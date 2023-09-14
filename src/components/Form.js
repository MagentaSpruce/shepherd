import { useRef, useState } from 'react';
import Button from '../ui/Button';
// import Input from '../ui/Input';
import Alert from './Alert';
import { getDatabase, ref, push } from 'firebase/database';
import app from '../firebase';

const database = getDatabase(app);

function Form({ getFormData }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submitting, isSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   isSubmitting(true);

  //   const name = nameRef.current.value;
  //   const email = emailRef.current.value;

  //   const formData = {
  //     name: name,
  //     email: email,
  //   };

  //   console.log(formData);
  //   nameRef.current.value = '';
  //   emailRef.current.value = '';
  //   getFormData(formData);
  //   isSubmitting(false);
  //   showAlert('success', 'Results submitted', true);
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    isSubmitting(true);

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const formData = {
      name: name,
      email: email,
    };

    // Send the form data to Firebase
    try {
      const databaseRef = ref(database, 'formData'); // Replace 'formData' with your desired database path
      await push(databaseRef, formData);
      showAlert('success', 'Results submitted', true);
    } catch (error) {
      showAlert('error', `Firebase error: ${error.message}`, true);
      console.error('Firebase error: ', error);
    }

    nameRef.current.value = '';
    emailRef.current.value = '';
    isSubmitting(false);
  };

  const showAlert = (type = '', msg = '', show = false) => {
    setAlert({ show: show, type: type, msg: msg });
  };

  return (
    <div
      className="bg-amber-500 w-[90vw] h-[20vh] max-w-lg mx-auto p-2 text-center rounded-md
    xs:h-[22vh]
    xp:h-[20vh]
    ms:h-[23vh]
    ll:h-[36vh]
    xx:h-[30vh]
    rr:h-[22vh]
    gg:h-[18vh]
    "
    >
      <form
        onSubmit={handleSubmit}
        className="p-2 bg-orange-300 h-[18vh]  rounded-md
        xs:h-[20vh]
        xp:h-[18vh]
        ms:h-[21vh]
        ll:h-[33vh]
        xx:h-[27.5vh]
        rr:h-[20vh]
        gg:h-[16.5vh]
        "
      >
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
        <div className="mb-2 p-1 flex justify-center">
          <label
            htmlFor="name"
            className="sm:text-lg
          mx:text-xl mx:mt-4"
          >
            Name:
          </label>
          &nbsp;
          <input
            className="w-[80%] rounded-lg indent-1 bg-orange-100
            sm:text-lg
            mx:text-xl mx:mt-4"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            required
            minLength="4"
            ref={nameRef}
          />
        </div>
        <div className="p-1 flex justify-center mx:mt-4">
          <label
            className="sm:text-lg
          mx:text-xl"
            htmlFor="email"
          >
            Email:{' '}
          </label>
          &nbsp;
          <input
            className="w-[80%] rounded-lg indent-1 bg-orange-100
            sm:text-lg 
            mx:text-xl"
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
            className="text-center bg-orange-600 rounded-md shadow-md px-3 py-1  mt-2 shadow-orange-500 hover:scale-110 active:scale-100 cursor-pointer transition-all text-xl tracking-wider text-orange-300 font-semibold
            xp:mt-3
            sm:mt-2
            mx:text-xl mx:mt-8
            xx:mt-4
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
