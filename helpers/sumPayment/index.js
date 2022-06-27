// eslint-disable-next-line import/no-anonymous-default-export
export default (data) => {
  let dataMap = data.map((item) => item.price * item.count);
  return dataMap.reduce((total, value) => total + value, 0);
};
