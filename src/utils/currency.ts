export function Dollar(value: string) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const formattedValue = formatter.format(Number(value));

  return formattedValue
}