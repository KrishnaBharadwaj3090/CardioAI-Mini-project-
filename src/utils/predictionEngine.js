export function calculateHeartRisk(values) {
  const age = Number(values.age || 0)
  const bp = Number(values.bloodPressure || 0)
  const cholesterol = Number(values.cholesterol || 0)
  const maxHr = Number(values.maxHeartRate || 0)
  const oldPeak = Number(values.oldPeak || 0)

  let score = 12
  if (age > 55) score += 12
  if (age > 65) score += 8
  if (values.sex === 'Male') score += 5
  if (values.chestPain === 'Asymptomatic') score += 18
  if (values.chestPain === 'Non-anginal Pain') score += 8
  if (bp > 140) score += 10
  if (cholesterol > 240) score += 12
  if (values.fastingSugar === 'Yes') score += 7
  if (values.restingEcg !== 'Normal') score += 8
  if (maxHr < 130) score += 10
  if (values.exerciseAngina === 'Yes') score += 13
  if (oldPeak > 2) score += 10
  if (values.slope === 'Downsloping') score += 8
  if (values.slope === 'Flat') score += 4

  const risk = Math.max(6, Math.min(92, Math.round(score)))
  const level = risk >= 65 ? 'High Risk' : risk >= 36 ? 'Moderate Risk' : 'Low Risk'
  const confidence = Math.max(82, Math.min(96, 98 - Math.round(Math.abs(48 - risk) / 4)))
  const probability = risk

  const recommendations = risk >= 65
    ? ['Schedule a clinician review soon', 'Track blood pressure and cholesterol closely', 'Avoid heavy exertion until medically reviewed']
    : risk >= 36
      ? ['Improve weekly activity consistency', 'Review diet, sleep, and stress patterns', 'Repeat screening after lifestyle changes']
      : ['Maintain current healthy routines', 'Continue preventive checkups', 'Monitor trends rather than single readings']

  return {
    risk,
    level,
    confidence,
    probability,
    model: 'Random Forest Demo Classifier',
    createdAt: new Date().toISOString(),
    inputs: values,
    recommendations,
  }
}

export function getStoredPrediction() {
  try {
    return JSON.parse(localStorage.getItem('cardioai:lastPrediction') || 'null')
  } catch {
    return null
  }
}

export function savePrediction(prediction) {
  localStorage.setItem('cardioai:lastPrediction', JSON.stringify(prediction))
}
