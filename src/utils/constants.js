export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  API_KEY;

export const CHANNEL_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const TagNames = [
  "All",
  "Gaming",
  "Live",
  "Namaste JavaScript",
  "IPL",
  "Akshay Saini",
  "Music",
  "Sports",
  "Virat Kohli",
  "Comedy",
  "React",
  "Code with Harry",
  "Cricket",
  "Technical Suneja",
  "Football",
  "News",
  "Podcasts",
  "Shopping",
  "Finance",
];
