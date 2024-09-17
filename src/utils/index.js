const generateUserId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const getOrCreateUserId = () => {
  let userId = localStorage.getItem("userId");

  if (!userId) {
    userId = generateUserId();
    localStorage.setItem("userId", userId);
  }

  return userId;
};

export { getOrCreateUserId };
