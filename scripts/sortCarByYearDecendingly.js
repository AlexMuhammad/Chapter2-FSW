function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  let resultLength = result.length

  // Tulis code-mu disini
  for (let i = 0; i < resultLength; i++) {
    for (let j = 0; j < (resultLength - i - 1); j++) {
      if (result[j].year < result[j + 1].year) {
        let temp = result[j]
        result[j] = result[j + 1]
        result[j + 1] = temp
      }
    }
  }

  //Gak dibolehin ama mas harris hehehe
  // result.sort((a, b) => {
  //   return b.year - a.year
  // })
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
