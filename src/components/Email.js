import emailjs from '@emailjs/browser';
import Button from '../ui/Button';

const Email = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qxc0f31',
        'template_5kfpbfh',
        e.target,
        'user_HcxYpkAMyFpXwPy6bVPPe'
      )
      .then(res => {
        window.location.href = '/';
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  return (
    <div
      className="bg-orange-600 h-[30rem]    max-w-xl mx-auto
      
    "
    >
      <h2
        className="text-xl mb-1
      xp:mb-2
      sm:text-2xl
      ms:-mt-4
      ll:mt-0"
      >
        Email the Author
      </h2>
      <form
        onSubmit={sendEmail}
        className="w-[90vw] max-w-lg p-2 bg-orange-300 mx-auto h-[26rem]  border-amber-500 border-4 rounded-md
        sm:text-lg sm:h-[29.5rem]"
      >
        <div className="p-2 flex justify-center">
          <label htmlFor="name">Name:&nbsp;</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded-lg indent-1 w-[80%] bg-orange-100"
            required
            minLength="4"
          />
        </div>
        <div className="flex justify-center p-2">
          <label htmlFor="email">Email:&nbsp;</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded-lg indent-1 w-[80%] bg-orange-100"
            required
          />
        </div>
        <div className="flex justify-center p-2">
          <textarea
            name="message"
            id="message"
            cols="35"
            rows="10"
            className="rounded-md indent-1 bg-orange-100
            "
            placeholder="Write message here..."
          ></textarea>
        </div>

        <Button
          className="px-3 py-1 text-center rounded-lg shadow-lg   mt-2 shadow-orange-500 hover:scale-110 active:scale-100 cursor-pointer transition-all text-xl tracking-wider bg-orange-600 text-orange-300 font-semibold
          xp:py-2 xp:px-4"
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Email;
