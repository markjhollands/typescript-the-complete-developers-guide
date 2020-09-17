export const dateStringToDate = (dateString: string): Date => {
  // 10/08/2020
  const dateParts = dateString
    .split('/') // ['10', '08', '2020']
    .map((value: string): number => {
      return parseInt(value);
    }); // [10, 8, 2020]

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // new Date(2020, 7, 10)
}