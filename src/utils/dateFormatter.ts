const dateFormatter = (val: string) => {
  const date = new Date(val);
  const f = new Intl.DateTimeFormat("en-ng", {
    dateStyle:"long"
  })
  return f.format(date);
}

export default dateFormatter;