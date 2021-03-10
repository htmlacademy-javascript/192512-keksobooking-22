const createFetch = (onSuccess, onError) => () => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data', {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

const createSubmit = (formData, onSuccess, onError) => {
  return fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    credentials: 'same-origin',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    }
  })
    .catch((err) => {
      onError(err);
    });
};



export { createFetch, createSubmit };
