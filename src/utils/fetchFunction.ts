
const fetchFunction = async (isFire: boolean) => {

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

    return data;
  
}




export default fetchFunction;