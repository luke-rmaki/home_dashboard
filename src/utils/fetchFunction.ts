
const fetchFunction = async (isFire: boolean): Promise<Array<string>> => {

  let today, tomorrow: string;
  let loading: boolean;

  const functionName: string = isFire ? "cfaScraper" : "binScraper";
  

  const data = await fetch(
        `/.netlify/functions/${functionName}`
    ).then((res) => res.json());

    if (isFire) {
      [today, tomorrow] = data.data;
      loading = false;
  
      return [today, tomorrow]
    } 

    const {binType, date} = data;

    return [binType, date];
  
}




export default fetchFunction;