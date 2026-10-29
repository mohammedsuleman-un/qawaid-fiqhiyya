// Verdeelt bij meerkeuzevragen het juiste antwoord over de posities (de vragen worden
// geschreven met het antwoord op een vaste plek). Juist/onjuist-vragen blijven zoals ze zijn.
export function spreadAnswers (quiz) {
  let k = 0
  return quiz.map((q) => {
    if (q.type !== 'mc') return q
    const n = q.options.length
    const want = k++ % n
    const shift = (want - q.answer + n) % n
    const options = q.options.map((_, j) => q.options[(j - shift + n) % n])
    return { ...q, options, answer: want }
  })
}
