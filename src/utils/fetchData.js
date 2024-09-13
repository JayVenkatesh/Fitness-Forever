export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '5f929172efmsh990a0b5c5cb02d3p156883jsnfa1d03ce282b',
    },
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };