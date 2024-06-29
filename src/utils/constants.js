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
  "https://api.codetabs.com/v1/proxy?quest=" +
  encodeURIComponent(
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );

export const VIDEO_DETAILS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=&key=" +
  API_KEY;

export const YOUTUBE_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=&key=" +
  API_KEY;

export const LIVE_CHAT_COUNT = 50;

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

export const Comments = [
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_k6-rNswI0hCgGtdnCar1dyXQjCVKYXRt8UQBy_gtg=s88-c-k-c0x00ffffff-no-rj",
    name: "Aarav Kapoor",
    message: "Hey everyone, thanks for joining the chat!",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_mo-ngw2iXTjilc4X3R9TWfKMVubJaaWmP-E9AYx2N-KkwGfZ7Ck2wgooJGVstqf0wbRw=s88-c-k-c0x00ffffff-no-rj",
    name: "Kavya Patel",
    message: "Excited to be here!",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_lKv5b8OX7YBzDfeNJKT0MfH_4pmGKHkBJT4miwRQ=s88-c-k-c0x00ffffff-no-rj",
    name: "Saanvi Rao",
    message: "Hello all! Looking forward to this.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_kSPmOxucOqMxZguCViqB-awc9Snf0biYN5UpdLpKs=s88-c-k-c0x00ffffff-no-rj",
    name: "Eshan Dixit",
    message: "Hii all!",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_nU2YD2Z--lTM_gdrvauZL95c14lMizI3TCYnoHVH-z3cvFi5RKknXfib9wghzEocwihg=s88-c-k-c0x00ffffff-no-rj",
    name: "Tarun Venkatesh",
    message: "Hi folks, let's have a great time!",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_n4EABOy6Ijor53Y9vON11pv7lnVa4DCZbpGTyhfVHnh3Pxiux6cQbieChI2FN94xMBGA=s88-c-k-c0x00ffffff-no-rj",
    name: "Nisha Iyer",
    message: "Nice to meet everyone here!",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_n02aBkZ6gA9UspmxlxuPL7QwN40SJljnzglzTyhg=s88-c-k-c0x00ffffff-no-rj",
    name: "Chandan Kumar",
    message: "Hope everyone is doing well today.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_koRtQTuIwjQ4FP3RZVg1uE66PaOdUeqFgH8lWkw-1bt37GjlJuRBJ7yTL7l5mFm3VeNQ=s88-c-k-c0x00ffffff-no-rj",
    name: "Diya Jain",
    message: "Greetings! Can't wait to start.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_nWYWEApFtIJntK9shwlEwV9_wRtAHtPupeYUpmVYicAgNsz9R5Ritb9w2bJZCVPccFrA=s88-c-k-c0x00ffffff-no-rj",
    name: "Harsh Kapoor",
    message: "Hello friends! This should be fun.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_nBiBza47xrVI22HQqbI5vVMSjOKCrypMV0wpODLhDTVe4Nl2G7EKpFmagMA2FW4bucAg=s88-c-k-c0x00ffffff-no-rj",
    name: "Riya Jain",
    message: "Hi everyone, let's have a productive chat.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_k2j-U1hx2gQCJStFa-jkECGZa50pYXWpHLgxBfCIntw44Dm80MYPjDJG2ntcx9_FaCSw=s88-c-k-c0x00ffffff-no-rj",
    name: "Ojaswini Sharma",
    message: "Good to see so many people here!",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_lsIO0KH93OMfL3PN3kkxTUk7TsNceOYa6t219yVP8ios1EvW8tDuW7p3U0VVLxkXJlUA=s88-c-k-c0x00ffffff-no-rj",
    name: "Indrajit Singh",
    message: "Hello! Excited for today's discussion.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_m1idWxVplo-dpxPo0o-DxCuXCxTKec7Qq6c14vnfKda9Y=s88-c-k-c0x00ffffff-no-rj",
    name: "Pooja Kulkarni",
    message: "Hey guys, let's get started!",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_kZyWrChFEYAvLOMGM2qlt0mdtA9-YJq_CgXX8-FfYxO87z=s88-c-k-c0x00ffffff-no-rj",
    name: "Meera Reddy",
    message: "Hi all, happy to join this chat.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_nsAGbqLIW9HxJ1otnf3WJPSKpcpwSm8TqD33wzWyo=s88-c-k-c0x00ffffff-no-rj",
    name: "Bhaskar Rao",
    message: "Good day all! Looking forward to this.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_lk8UN6Sm2yXevei5XBZ0muyiJhvTS1zIloiZrEPT_2wh0ZN2PNXNrKYz2OHyMARUfXcg=s88-c-k-c0x00ffffff-no-rj",
    name: "Yuvraj Rajput",
    message: "Hello everyone, let's make this fun!",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_n1hHNFfhXBR4BASbMAHa8CRJOT-_7vV_OG-i3RKWwWIZ-j-3B7Fl4iapOfpamSrb2qYA=s88-c-k-c0x00ffffff-no-rj",
    name: "Lata Kapoor",
    message: "Greetings to all! Excited to be here.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_nYIeTzmuX5AFSZBdBKrnA7LtpkDigfEm-RxoNn0bQ=s88-c-k-c0x00ffffff-no-rj",
    name: "Vidhi Iyer",
    message: "Hi everyone, hope you're all doing great.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_n7TwThyzy39wxTdPOeA9WYOTwdGXF9SNywfz6u9B0=s88-c-k-c0x00ffffff-no-rj",
    name: "Falguni Patel",
    message: "Hello, happy to be part of this chat.",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_lKBxAG9yj99WSqe-XXAcMltw6EGKqohXJ0ggyXN_k=s88-c-k-c0x00ffffff-no-rj",
    name: "Jatin Shah",
    message: "Looking forward to a great conversation!",
  },
];
