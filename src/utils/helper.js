export const formatNumberToReadableView = (viewCount) => {
  if (viewCount >= 1000000) {
    return Math.floor(viewCount / 1000000) + "M";
  } else if (viewCount >= 1000) {
    return Math.floor(viewCount / 1000) + "K";
  } else {
    return viewCount;
  }
};

export const timeAgo = (publishedAt) => {
  const currentTime = new Date();
  const publishedTime = new Date(publishedAt);

  let yearsDifference = currentTime.getFullYear() - publishedTime.getFullYear();
  let monthsDifference = currentTime.getMonth() - publishedTime.getMonth();
  let daysDifference = currentTime.getDate() - publishedTime.getDate();
  let hoursDifference = currentTime.getHours() - publishedTime.getHours();
  let minutesDifference = currentTime.getMinutes() - publishedTime.getMinutes();
  let secondsDifference = currentTime.getSeconds() - publishedTime.getSeconds();

  let yearsAgo, monthsAgo, daysAgo, hoursAgo, minutesAgo, secondsAgo;

  if (secondsDifference < 0) {
    minutesDifference -= 1;
    secondsAgo = 60 + secondsDifference;
  } else {
    secondsAgo = secondsDifference;
  }

  if (minutesDifference < 0) {
    hoursDifference -= 1;
    minutesAgo = 60 + minutesDifference;
  } else {
    minutesAgo = minutesDifference;
  }

  if (hoursDifference < 0) {
    daysDifference -= 1;
    hoursAgo = 24 + hoursDifference;
  } else {
    hoursAgo = hoursDifference;
  }

  if (daysDifference < 0) {
    monthsDifference -= 1;
    const previousMonth = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      0
    ).getDate();
    daysAgo = previousMonth + daysDifference;
  } else {
    daysAgo = daysDifference;
  }

  if (monthsDifference < 0) {
    yearsDifference -= 1;
    monthsAgo = 12 + monthsDifference;
  } else {
    monthsAgo = monthsDifference;
  }

  yearsAgo = yearsDifference;

  if (yearsAgo > 0) {
    return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
  } else if (monthsAgo > 0) {
    return monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
  } else if (daysAgo > 0) {
    return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
  } else if (hoursAgo > 0) {
    return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
  } else if (minutesAgo > 0) {
    return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
  } else {
    return secondsAgo === 1 ? "1 second ago" : `${secondsAgo} seconds ago`;
  }
};

export const postedDate = (postedAt) => {
  const date = new Date(postedAt);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

export const formatDuration = (videoDuration) => {
  if (videoDuration == undefined) return;

  const regex =
    /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?/;
  const matches = videoDuration.match(regex);

  const hours = parseInt(matches[4] || 0, 10);
  const minutes = parseInt(matches[5] || 0, 10);
  const seconds = parseInt(matches[6] || 0, 10);

  const formattedHours = hours > 0 ? String(hours).padStart(2, "0") + ":" : "";
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return formattedHours + formattedMinutes + ":" + formattedSeconds;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
