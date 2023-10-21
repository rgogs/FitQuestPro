export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/",
  params: { limit: "100" },
  headers: {
    "X-RapidAPI-Key": "b8bd73cd38msha52a507f7ee7a51p1d4c46jsn97279dd05982",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "835f669464mshdc6c05456a0884ep153914jsn7760b8d1b1de",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
