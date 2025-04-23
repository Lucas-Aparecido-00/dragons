export const capitalizeFirstLetter = (phrase?: string, all = false): string => {
  if (!phrase) return ''

  if (all) {
    const words = phrase.split(' ')

    let newPrase = ''

    words.forEach((word) => {
      // if (word.trim().length < 3) {
      //   newPrase += ` ${word.toLowerCase()}`

      //   return
      // }

      if (!word?.trim()) return

      newPrase += ` ${word[0]?.toUpperCase()}${word
        .substring(1)
        .toLocaleLowerCase()}`
    })

    return newPrase?.trim()
  }

  const firstLetter = phrase[0]?.toUpperCase()

  return `${firstLetter}${phrase.substring(1).toLowerCase()}`
}
