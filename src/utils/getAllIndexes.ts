const getAllIndexes = (array: any[], searchingValue: any): any[] => {
  const newArray = []
  let i = -1

  while ((i = array.indexOf(searchingValue, i + 1)) !== -1) {
    newArray.push(i)
  }

  return newArray
}

export default getAllIndexes
