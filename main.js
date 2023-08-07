window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});


const functionApi = 'https://dhresume-counter.azurewebsites.net/api/HttpTrigger1?code=E5d_whDegZ-DKXmAFMCx7PWtIDKrucS2WUa3PcOytKoHAzFu6ejT1w==&id=home';

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