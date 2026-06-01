import { useEffect, useRef, useState } from 'react'
import { FiMessageCircle, FiPlus, FiSend } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import SectionHeader from '../components/ui/SectionHeader'
import { chatResponses, suggestedQuestions } from '../data/mockData'

export default function Chatbot() {
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Hi, I am CardioAI. Ask me a heart-health question for educational guidance.' }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, typing])

  function sendMessage(text = input) {
    const clean = text.trim()
    if (!clean || typing) return
    setMessages((items) => [...items, { role: 'user', text: clean }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const answer = chatResponses[clean] || 'This demo assistant can explain common heart-health concepts, risk scores, urgent symptoms, and prevention habits. For personal symptoms, please consult a qualified clinician.'
      setMessages((items) => [...items, { role: 'assistant', text: answer }])
      setTyping(false)
    }, 900)
  }

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader centered={false} eyebrow="AI Medical Chatbot" title="ChatGPT-like cardio assistant" subtitle="A polished educational chatbot with suggested questions, sidebar conversations, typing state, and auto-scroll." />
        <div className="mt-8 grid min-h-[680px] gap-6 lg:grid-cols-[310px_1fr]">
          <GlassCard className="p-4">
            <Button variant="secondary" className="w-full"><FiPlus /> New conversation</Button>
            <div className="mt-5 space-y-3">
              {suggestedQuestions.map((question) => <button key={question} onClick={() => sendMessage(question)} className="focus-ring w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm font-semibold text-slate-300 transition hover:border-cardioCyan/40 hover:text-white">{question}</button>)}
            </div>
          </GlassCard>
          <GlassCard className="flex flex-col overflow-hidden">
            <div className="border-b border-white/10 p-5"><h3 className="flex items-center gap-2 text-xl font-black text-white"><FiMessageCircle className="text-cardioCyan" /> CardioAI Care Chat</h3></div>
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {messages.map((message, index) => <motion.div key={`${message.role}-${index}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[82%] rounded-3xl px-5 py-4 text-sm leading-6 ${message.role === 'user' ? 'bg-cardioCyan text-midnight' : 'bg-white/10 text-slate-100'}`}>{message.text}</div></motion.div>)}
              {typing && <div className="inline-flex rounded-3xl bg-white/10 px-5 py-4 text-slate-300"><span className="animate-pulse">CardioAI is typing...</span></div>}
              <div ref={bottomRef} />
            </div>
            <div className="border-t border-white/10 p-4">
              <div className="flex gap-3 rounded-full bg-white/10 p-2">
                <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && sendMessage()} placeholder="Ask about heart health..." className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500" />
                <button onClick={() => sendMessage()} className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-cardioGreen text-midnight"><FiSend /></button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
