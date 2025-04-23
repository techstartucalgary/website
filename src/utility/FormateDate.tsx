const FormatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const newDate = date
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    })
    .replace(/(\d)(?=(st|nd|rd|th))/, "$1");
  return newDate;
};

export default FormatDate;
