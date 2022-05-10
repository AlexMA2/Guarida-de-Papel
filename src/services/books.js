const HOST = "http://localhost:8080/bonita";
const BonitaToken = "8255916a-9160-42f4-b9cf-06aab90d026b";

const processName = "Adjudicación de Compras";

function getAuthToken() {
  var myHeaders = new Headers();
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    credentials: "include",
  };

  return fetch(HOST + "/API/system/session/unusedId", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.headers.get("x-bonita-api-token");
    })
    .catch((error) => console.log("error", error));
}

function loginToBonita() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("username", "walter.bates");
  urlencoded.append("password", "bpm");
  urlencoded.append("redirect", "false");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
    credentials: "include",
  };

  return fetch(HOST + "/loginservice", requestOptions)
    .then((result) => {
      if (!result.ok) {
        throw Error(result.status);
      }
      return getAuthToken();
    })
    .catch((error) => console.log("error", error));
}

const getProcess = async () => {
  //const token = await loginToBonita()

  const response = await fetch(`${HOST}/API/bpm/process?s=${processName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Bonita-API-Token": BonitaToken,
    },
  })
    .then((response) => console.log(response))
    
};

const postBook = (message) => {
    console.log(message)
  const PROCESS_ID = '5038638724498434799'
  fetch(`${HOST}/API/bpm/process/${PROCESS_ID}/instantiation`, {
    method: "POST",
    headers: {
        "X-Bonita-API-Token": BonitaToken,
        "Content-Type": "application/json",      
    },
    body: JSON.stringify(message),

  })
};

export { postBook };
