const transformationDataCategories = (sellersPerCategory, setDataChart) => {
  const dataColumns = Object.entries(sellersPerCategory).map(seller => {
    return `${seller[0]},${seller[1]}\n`
  }).join('')
  console.log(dataColumns)
  setDataChart(dataColumns.slice(0, dataColumns.length - 1))
}

const transformationMarkChart = (marks, setDataChart) => {
  const dataColumns = Object.entries(marks).map(mark => {
    return `${mark[0]},${mark[1]}\n`
  }).join('')
  console.log(dataColumns)
  setDataChart(dataColumns.slice(0, dataColumns.length - 1))
}

export { transformationDataCategories, transformationMarkChart }
