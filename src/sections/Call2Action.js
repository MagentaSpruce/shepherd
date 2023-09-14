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
    <div className="bg-orange-600">
      <section
        className="w-[100vw] max-w-[1250px] mx-auto h-[100vh] bg-orange-600 text-center
    xs:h-[110vh] 
    sm:h-[112vh]
    xp:h-[103vh]
    ms:h-[120vh]
    mx:h-[92vh]
    ll:h-[150vh]
    xx:h-[138vh]
    rr:h-[110vh]
    gg:h-[85vh]"
      >
        <div
          className="pt-2 text-2xl
      mx:text-3xl 
      xx:text-5xl
      rr:text-6xl
      gg:text-7xl "
        >
          <h2 style={{ fontFamily: "'Macondo', cursive" }}>Readers Area</h2>
        </div>
        <h3
          className="text-center p-2
      xp:mb-2
      sm:text-lg 
      xx:text-2xl
      rr:text-3xl
      gg:text-3xl"
        >
          Please provide your name and email below if you would like to be
          notified of future releases.
        </h3>
        <Form getFormData={getFormData} />
        <div
          className="pt-4
      xp:pt-8"
        >
          <Email />
        </div>
      </section>
    </div>
  );
}

export default Call2Action;
