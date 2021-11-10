
const SERVER = '';

const postBook = (message) => {
  fetch(`${SERVER}/api/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),

  })
    .then(response => response.json())
    .then(data => {
        return data
    })
};

export { postBook };
