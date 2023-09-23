window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

const functionApi = 'https://resume-counter-eus.azurewebsites.net/api/HttpTrigger1?code=Lw9DqUfJIUSmkHVlUo_dQszBreZfQY0xnfMGFdQcJhvCAzFuPgMdLA==&id=home';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then(response => {
      return response.json()
    })
    .then(response => {
      count = response;
      console.log("Hello, you are visitor number - " + count);
      document.getElementById('counter').innerText = count;
    }).catch(function (error) {
      console.log(error);
    });
  return count;
}