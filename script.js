console.log('hello!');
function getData() {
  fetch('https://fetch-gsheet-data.herokuapp.com/get-data')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here
      console.log(data);
    })
    .catch((err) => {
      // Do something for an error here
      console.log(err);
    });
}
