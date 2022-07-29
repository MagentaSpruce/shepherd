import Form from '../components/Form';

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

  return <Form getFormData={getFormData} />;
}

export default Call2Action;
