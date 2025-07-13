export const getRandomIds = (max_options) => {
  const ids = [];
  while (ids.length < max_options) {
    const randId = Math.floor(Math.random() * 150);
    if (!ids.includes(randId)) {
      ids.push(randId);
    }
  }
  return ids;
};

export const getRandomIndex = (max_options) => {
  const randomIndex = Math.floor(Math.random() * max_options);
  return randomIndex;
};
