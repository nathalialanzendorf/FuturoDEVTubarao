/*

//função anonima
(async function () {
  const promise1 = fetch("https://swapi.dev/api/people");
  console.log(promise1);
}) ();


//arow function
(async () => {
  const promise1 = await fetch("https://swapi.dev/api/people");
  console.log(promise1);
}) ();

function createPromise1() {
  promise1
    .then((response) => {
      console.log("Buscando pessoas...");
      const data = response;
      criaListagem(data.results);

    }).catch((error) => { 
      console.log("Ocorreu um erro ao buscar pessoas...", error)

    }).finally(() => {
      console.log("Terminou a promisse para buscar pessoas...");
    });
}

async function createPromise2() {
  try {
    console.log("Buscando pessoas...");
    const response = await promise2;
    const data = response;
    criaListagem(data.results);

  } catch (error) {
    console.log("Ocorreu um erro ao buscar pessoas...", error)
  } finally {
    console.log("Terminou a promisse para buscar pessoas...");
  }
}

*/