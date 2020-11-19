import type {Data} from './types';

const fetchFire = async (): Promise<Array<string>> => {

  let today, tomorrow, timeStamp: string;
  let loading: boolean;
  

  const data: Data = await fetch(
        "/.netlify/functions/cfaScraper"
    ).then((res) => res.json());
  
    [today, tomorrow] = data.data;
    timeStamp = data.timeStamp;
    loading = false;

    return [today, tomorrow, timeStamp]
}




export default fetchFire;