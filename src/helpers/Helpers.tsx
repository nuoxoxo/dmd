export const GetRandomDateString = (): [number, string, number, number] => {

  const [L, R] = [new Date(2021, 0, 1), new Date(2025, 11, 31)]

  // .getTime : returns date's epoch time in milliseconds
  const EpochOffset = L.getTime() + Math.random() * (R.getTime() - L.getTime())
  const RandomTime = new Date(EpochOffset)
  const Months = [
    "January", "February", "March", 
    "April", "May", "June", 
    "July", "August", "September", 
    "October", "November", "December"
  ]

  return [
    RandomTime.getDay(),
    Months[RandomTime.getMonth()],
    RandomTime.getDate(),
    RandomTime.getFullYear()
  ]
};

