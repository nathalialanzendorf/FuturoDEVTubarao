function digaOlaPara(nome) {
    console.log(`Olá ${nome}!`);
  }

/*
  digaOlaPara("Maria");
  setTimeout(digaOlaPara, 0, "Ana");
  digaOlaPara("Pedro");
  setTimeout(digaOlaPara, 1, "João");
*/


//setInterval(digaOlaPara, 3, "parameter1", "parameter2", "parameter3");

/*
const intervalo = setInterval(digaOlaPara, 3, "parameter1");
setTimeout(clearIntervalByTimeout, 1000);

function clearIntervalByTimeout() {
    clearInterval(intervalo);
}
*/

const Status = {
  PENDING: "pendente",
  FULFILLED: "realizada",
  REJECTED: "rejeitada",
  SETTLED: "estabelecida",
};

//promises
//pending (pendente) - O estado inicial da Promise, ela foi iniciada mas ainda não foi realizada nem rejeitada;
let list;

async function getListOne() {
  const request = fetch("https://swapi.dev/api/people");

  request
    .then((response) => {
      response.json().then((data) => {
        criaListagem(data.results);
      });
    })
    .catch((error) => {
      console.log("Catch", error)
    })
    .finally(() => console.log("finally"));
}
//promisePending.then((data) => console.log(Status.PENDING, data));
/*
//fulfilled (realizada) - Sucesso da operação, Promise realizada (resolvida);
const promiseFulfilled = new Promise((resolve, reject) => resolve(true))
promiseFulfilled.then((data) => console.log(Status.FULFILLED, data));

//rejected (rejeitada) - Falha da operação, Promise rejeitada;
const promiseRejected= new Promise((resolve, reject) => resolve(true));
promiseRejected.then((data) => console.log(Status.REJECTED, data));

//settled (estabelecida) - É o estado final da Promise, quando ela já sabe se foi resolvida ou rejeitada.
const promiseSettled= new Promise((resolve, reject) => resolve(true));
promiseSettled.then((data) => console.log(Status.SETTLED, data));


/*


const promise = new Promise((resolve, reject) => resolve(true))
  .then((data) => console.log("sucesso", data))
  .catch((error) => console.log("falha", error))
  .finally(() => console.log("sucesso ou falha (final)"));
*/