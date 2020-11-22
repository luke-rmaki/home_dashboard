import type {Data} from './types';

const fetchFunction = async (isFire: boolean): Promise<Array<string>> => {

  let today, tomorrow: string;
  let loading: boolean;

  const functionName: string = isFire ? "cfaScraper" : "binScraper";
  

  const data: Data = await fetch(
        `/.netlify/functions/${functionName}`
    ).then((res) => res.json());
  
    [today, tomorrow] = data.data;
    loading = false;

    return [today, tomorrow]
}




export default fetchFunction;