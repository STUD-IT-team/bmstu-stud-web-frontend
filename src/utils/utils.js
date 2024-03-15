export function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

export function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1,
  });
}

export function detectBrowser() {
  let result = 'Other';
  if (navigator.userAgent.indexOf('YaBrowser') !== -1) {
    result = 'Yandex Browser';
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    result = 'Mozilla Firefox';
  } else if (navigator.userAgent.indexOf('MSIE') !== -1) {
    result = 'Internet Exploder';
  } else if (navigator.userAgent.indexOf('Edge') !== -1) {
    result = 'Microsoft Edge';
  } else if (navigator.userAgent.indexOf('Safari') !== -1) {
    result = 'Safari';
  } else if (navigator.userAgent.indexOf('Opera') !== -1) {
    result = 'Opera';
  } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
    result = 'Google Chrome';
  }
  return result;
}

export function detectOS() {
  if (window.navigator.userAgent.indexOf("Windows NT 11.0")!== -1) return "Windows 11";
  if (window.navigator.userAgent.indexOf("Windows NT 10.0")!== -1) return "Windows 10";
  if (window.navigator.userAgent.indexOf("Windows NT 6.3") !== -1) return "Windows 8.1";
  if (window.navigator.userAgent.indexOf("Windows NT 6.2") !== -1) return "Windows 8";
  if (window.navigator.userAgent.indexOf("Windows NT 6.1") !== -1) return "Windows 7";
  if (window.navigator.userAgent.indexOf("Windows NT 6.0") !== -1) return "Windows Vista";
  if (window.navigator.userAgent.indexOf("Windows NT 5.1") !== -1) return "Windows XP";
  if (window.navigator.userAgent.indexOf("Windows NT 5.0") !== -1) return "Windows 2000";
  if (window.navigator.userAgent.indexOf("Mac")            !== -1) return "Mac"; // Macintosh, MacIntel, MacPPC, Mac68K
  if (window.navigator.userAgent.indexOf("iP")             !== -1) return "iOS"; // iPad, iPhone, iPod
  if (window.navigator.userAgent.indexOf("Android")        !== -1) return "Android";
  if (window.navigator.userAgent.indexOf("X11")            !== -1) return "UNIX";
  if (window.navigator.userAgent.indexOf("Linux")          !== -1) return "Linux";
  return "Unknown OS";
}

export function getDateDayStart(date) {
  const dateStart = new Date(date);
  dateStart.setUTCHours(0, 0, 0, 0);
  return dateStart;
}
export function getDateDayEnd(date, daysToEnd=0) {
  const dateEnd = addDaysToDate(date, daysToEnd);
  dateEnd.setUTCHours(23,59,59,999);
  return dateEnd;
}
export function addDaysToDate(date, days) {
  const MS_IN_DAY = 1000*60*60*24;
  return new Date(Number(date) + MS_IN_DAY * days);
}
export function compressEventsByDays(dateFrom, daysPeriod, events) {
  const res = [];
  for (let i = 0; i < daysPeriod; i++) {
    const dateDay = addDaysToDate(dateFrom, i);
    res.push({
      date: dateDay,
      events: events.filter((event) => (event.date.getDate() === dateDay.getDate() && event.date.getMonth() === dateDay.getMonth() && event.date.getFullYear() === dateDay.getFullYear())),
    });
  }
  return res;
}
