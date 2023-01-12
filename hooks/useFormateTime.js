function useFormatTime(value) {
  let d = `1900, 1, 1, ${value}`;
  let a = d.split(/[- :]/);
  let date = new Date(
    parseInt(a[0]),
    parseInt(a[1]) - 1,
    parseInt(a[2]),
    parseInt(a[3]),
    parseInt(a[4]),
    parseInt(a[5])
  );
  let hr = (date.getHours() < 10 ? "0" : "") + date.getHours();
  let min = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  let time = (
    <span>
      <span>{`${hr}:${min}`}</span>
      <span className="text-[0.6rem]">{`${hr >= 13 ? " PM" : " AM"}`}</span>
    </span>
  );
  return time;
}

export default useFormatTime;
