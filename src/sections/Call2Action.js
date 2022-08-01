import Email from '../components/Email';
import Form from '../components/Form';
//add a state value for alert for when form is submitted success/error
function Call2Action() {
  const getFormData = formData => {
    fetch(
      'https://theshepherd-77005-default-rtdb.firebaseio.com/formData.json',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application-json',
        },
      }
    );
  };

  return (
    <section className="w-[100vw] max-w-[1200px] mx-auto h-[100vh] bg-orange-600 text-center ">
      <div className="pt-2 text-2xl font-semibold ">
        <h2>Readers Area</h2>
      </div>
      <h3 className="text-center p-2 ">
        Please provide your name and email if you would like to be notified of
        future releases.
      </h3>
      <Form getFormData={getFormData} />
      <div className="pt-4">
        <Email />
      </div>
    </section>
  );
}

export default Call2Action;
