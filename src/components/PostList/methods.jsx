const formatDate = (date, format) => {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());
  format = format.replace(/HH/, date.getHours());
  format = format.replace(/SS/, date.getMinutes());

  return format;
};

const sortObject = (obj) => {
  const ascKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  const ascObj = {};

  ascKeys.forEach((key) => {
    ascObj[key] = obj[key];
  });

  return ascObj;
};

export { formatDate, sortObject };
