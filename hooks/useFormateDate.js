function useFormatDate(value, locale = "es-ES") {
  return new Date(value).toLocaleDateString(locale);
}

export default useFormatDate;
