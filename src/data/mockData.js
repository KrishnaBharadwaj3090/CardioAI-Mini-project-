import { FiActivity, FiBarChart2, FiCpu, FiFileText, FiHeart, FiMessageCircle, FiShield, FiTrendingUp } from 'react-icons/fi'

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Prediction', path: '/prediction' },
  { label: 'Results', path: '/results' },
  { label: 'Chatbot', path: '/chatbot' },
  { label: 'Reports', path: '/reports' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'About', path: '/about' },
]

export const features = [
  { title: 'AI Risk Screening', text: 'Clinical risk-form analysis with confidence scoring and care guidance.', icon: FiCpu },
  { title: 'Live Health Dashboard', text: 'Vitals, risk trends, recovery progress, and weekly cardio analytics in one view.', icon: FiActivity },
  { title: 'Medical Chat Assistant', text: 'A guided assistant with safe, predefined educational heart-health answers.', icon: FiMessageCircle },
  { title: 'PDF Care Reports', text: 'Generate polished, printable reports for internship demos and portfolio reviews.', icon: FiFileText },
]

export const stats = [
  { value: '94%', label: 'Demo prediction confidence' },
  { value: '24/7', label: 'AI assistant availability' },
  { value: '8+', label: 'Health signals tracked' },
  { value: '3 min', label: 'Report generation flow' },
]

export const testimonials = [
  { name: 'Dr. Aisha Raman', role: 'Cardiology Mentor', quote: 'CardioAI presents complex heart metrics in a clear, internship-ready interface.' },
  { name: 'Neel Kapoor', role: 'HealthTech Founder', quote: 'The visual polish and simulated AI workflow make it feel like a real SaaS prototype.' },
  { name: 'Maya Thomas', role: 'Patient Experience Lead', quote: 'The assistant, reports, and analytics flow are approachable without feeling simplistic.' },
]

export const overviewCards = [
  { label: 'Heart Rate', value: '72 bpm', trend: '+2.4%', status: 'Stable', icon: FiHeart },
  { label: 'Oxygen Saturation', value: '98%', trend: '+1.1%', status: 'Excellent', icon: FiShield },
  { label: 'Cardio Load', value: '41%', trend: '-5.2%', status: 'Improving', icon: FiBarChart2 },
  { label: 'Recovery Index', value: '86%', trend: '+8.6%', status: 'Strong', icon: FiTrendingUp },
]

export const riskScores = [
  { label: 'Coronary Risk', score: 28, tone: 'cyan' },
  { label: 'Arrhythmia Risk', score: 17, tone: 'green' },
  { label: 'Hypertension Risk', score: 34, tone: 'yellow' },
]

export const weeklyVitals = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  heartRate: [76, 74, 72, 73, 71, 69, 72],
  oxygen: [97, 98, 98, 97, 99, 98, 98],
  stress: [45, 42, 38, 40, 36, 31, 34],
}

export const monthlyTrends = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  wellness: [68, 71, 74, 78, 82, 86],
  risk: [42, 39, 35, 31, 27, 23],
  recovery: [58, 63, 67, 73, 79, 84],
}

export const riskDistribution = [42, 31, 18, 9]

export const chatResponses = {
  'What does a healthy heart rate mean?': 'For many adults, a resting heart rate between 60 and 100 bpm can be normal. Fitness level, medication, stress, and sleep can change it, so trends matter more than one number.',
  'How can I reduce heart disease risk?': 'Helpful habits include regular activity, balanced meals, enough sleep, not smoking, stress management, and routine checkups for blood pressure, cholesterol, and glucose.',
  'What symptoms need urgent care?': 'Chest pressure, severe shortness of breath, fainting, sudden weakness, or pain spreading to the arm, jaw, or back should be treated as urgent. Contact emergency services immediately.',
  'Explain my cardio risk score': 'The score combines mock signals like heart rate, stress, oxygen, sleep, and trend changes. In this demo, lower is better and the guidance is educational only.',
}

export const suggestedQuestions = Object.keys(chatResponses)

export const reportMetrics = [
  { label: 'Resting Heart Rate', value: '72 bpm', note: 'Within target demo range' },
  { label: 'Blood Pressure', value: '118/76', note: 'Healthy simulated reading' },
  { label: 'Oxygen Saturation', value: '98%', note: 'Excellent oxygen level' },
  { label: 'AI Risk Score', value: '24/100', note: 'Low to moderate demo risk' },
]

export const technologies = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Chart.js', 'React ChartJS 2', 'jsPDF', 'html2canvas']

export const clinicalDefaults = {
  age: 52,
  sex: 'Male',
  chestPain: 'Atypical Angina',
  bloodPressure: 124,
  cholesterol: 212,
  fastingSugar: 'No',
  restingEcg: 'Normal',
  maxHeartRate: 158,
  exerciseAngina: 'No',
  oldPeak: 1.1,
  slope: 'Upsloping',
}

export const clinicalFields = [
  { name: 'age', label: 'Age (years)', type: 'number', min: 18, max: 95 },
  { name: 'sex', label: 'Sex', type: 'select', options: ['Female', 'Male'] },
  { name: 'chestPain', label: 'Chest Pain Type', type: 'select', options: ['Typical Angina', 'Atypical Angina', 'Non-anginal Pain', 'Asymptomatic'] },
  { name: 'bloodPressure', label: 'Resting Blood Pressure (mmHg)', type: 'number', min: 80, max: 220 },
  { name: 'cholesterol', label: 'Cholesterol (mg/dL)', type: 'number', min: 120, max: 420 },
  { name: 'fastingSugar', label: 'Fasting Blood Sugar > 120 mg/dL', type: 'select', options: ['No', 'Yes'] },
  { name: 'restingEcg', label: 'Resting ECG', type: 'select', options: ['Normal', 'ST-T Abnormality', 'LV Hypertrophy'] },
  { name: 'maxHeartRate', label: 'Max Heart Rate Achieved (bpm)', type: 'number', min: 70, max: 220 },
  { name: 'exerciseAngina', label: 'Exercise Induced Angina', type: 'select', options: ['No', 'Yes'] },
  { name: 'oldPeak', label: 'ST Depression / Oldpeak', type: 'number', min: 0, max: 6, step: 0.1 },
  { name: 'slope', label: 'Peak Exercise Slope', type: 'select', options: ['Upsloping', 'Flat', 'Downsloping'] },
]

