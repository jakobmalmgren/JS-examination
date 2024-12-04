const generateKey = async () => {
  let key;
  try {
    let response = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
      {
        method: "POST",
      }
    );
    key = await response.json();
  } catch (error) {
    console.log(error);
  }
  return key;
};

export const generateData = async () => {
  let data;
  try {
    let key = await generateKey();
    let resp = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: { "x-zocom": `${key.key}` },
      }
    );
    data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
};

// det här är hämtning av API, så nyckel-funktionen och
// hämtning av datan från API hänger ihop.
