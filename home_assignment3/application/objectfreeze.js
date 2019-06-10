const deepFreeze = (obj) => {
  let objProps = Object.getOwnPropertyNames(obj);
      objProps.forEach(item => {
        if (typeof obj[item] == 'object' && obj[item] !== null) deepFreeze(obj[item]);
      });

  return Object.freeze(obj);
};

export default work;
