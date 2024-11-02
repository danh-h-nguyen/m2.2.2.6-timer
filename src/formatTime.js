export const formatTime = (time) => {
  const getSeconds = String(time % 60).padStart(2, "0");
  const minutes = Math.floor(time / 60);
  const getMinutes = String(minutes % 60).padStart(2, "0");
  const getHours = String(Math.floor(minutes / 60)).padStart(2, "0");

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
