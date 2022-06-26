export default (data) => {
  let dataMap = data.map((item) => item.price * item.count);
  return dataMap.reduce((total, value) => total + value, 0);
};
