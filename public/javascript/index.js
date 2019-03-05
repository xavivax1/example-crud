'use strict';

const main = () => {
  const formElement = document.querySelector('form#search-tortilla');
  formElement.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit (event) {
    event.preventDefault();
    const inputElement = event.target.querySelector('input');
    const inputValue = inputElement.value;

    searchTortillas(inputValue);
  }
  const searchTortillas = async (tortillaOwner) => {
    try {
      const tortillasRequest = await fetch(`/api/tortillas?username=${tortillaOwner}`);
      if (tortillasRequest.status === 404) {
        // DOM
        const element = document.querySelector('#notfound');

        element.innerHTML = 'no results';
      }
      // frontend envia peticio
      const tortillas = await tortillasRequest.json();
      // DOM

      console.log(tortillas);
      tortillas.foreach(a => {

      });

      console.log(tortillas);
    } catch (error) {
      console.error(error);
    }
  };
};
window.addEventListener('load', main);
