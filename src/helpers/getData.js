import { urlGuajolota } from "./Url";

const getData = async () => {
  const resp = await fetch(urlGuajolota);
  const data = resp.json();
  return data;
};

export default getData;
