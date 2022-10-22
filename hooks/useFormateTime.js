function useFormatTime(value, locale = "es-ES") {
  let d = new Date(`1900, 1, 1,${value}`);
  let hr = (d.getHours() < 10 ? "0" : "") + d.getHours();
  let min = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  let time = `${hr}:${min}${hr >= 13 ? "PM" : "AM"}`;
  return time;
}

export default useFormatTime;
