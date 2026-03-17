'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Brain,
  Code,
  MessageSquare,
  Clock,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Play,
  ArrowRight,
  ArrowLeft,
  Flag,
  Send,
  RotateCcw,
  Trophy,
  Target,
  Zap,
  GraduationCap,
  Menu,
  X,
  Home,
  FileText,
  Timer,
  BarChart3,
  Sparkles,
  Calculator,
  MessageCircle,
  Keyboard
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { studyMaterial, practiceQuestions, topicMapping, mockTestQuestions } from '@/lib/nqt-data'
import { pyqQuestions } from '@/lib/pyq-data'

// Types
type Section = 'home' | 'study' | 'practice' | 'mock' | 'pyq'
type Category = 'numerical' | 'reasoning' | 'verbal' | 'coding'

interface UserAnswer {
  [key: number]: string
}

interface ReviewFlags {
  [key: number]: boolean
}

// Category config
const categoryConfig = {
  numerical: { icon: Calculator, label: 'Numerical Ability', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  reasoning: { icon: Brain, label: 'Reasoning Ability', color: 'text-violet-500', bg: 'bg-violet-500/10' },
  verbal: { icon: MessageCircle, label: 'Verbal Ability', color: 'text-amber-500', bg: 'bg-amber-500/10' },
  coding: { icon: Code, label: 'Coding in C++', color: 'text-sky-500', bg: 'bg-sky-500/10' }
}

export default function TCSNQTPrep() {
  const [currentSection, setCurrentSection] = useState<Section>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentSection('home')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  TCS NQT Prep
                </h1>
                <p className="text-xs text-slate-500 hidden sm:block">Your Complete Preparation Guide</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'study', label: 'Study Material', icon: BookOpen },
                { id: 'practice', label: 'Practice', icon: Target },
                { id: 'pyq', label: 'PYQ 2025', icon: FileText },
                { id: 'mock', label: 'Mock Test', icon: Timer }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={currentSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentSection(item.id as Section)}
                  className={`gap-2 ${currentSection === item.id ? 'bg-violet-500 hover:bg-violet-600' : ''}`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            >
              <div className="px-4 py-3 space-y-1">
                {[
                  { id: 'home', label: 'Home', icon: Home },
                  { id: 'study', label: 'Study Material', icon: BookOpen },
                  { id: 'practice', label: 'Practice', icon: Target },
                  { id: 'pyq', label: 'PYQ 2025', icon: FileText },
                  { id: 'mock', label: 'Mock Test', icon: Timer }
                ].map((item) => (
                  <Button
                    key={item.id}
                    variant={currentSection === item.id ? 'default' : 'ghost'}
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      setCurrentSection(item.id as Section)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {currentSection === 'home' && <HomeSection key="home" onNavigate={setCurrentSection} />}
          {currentSection === 'study' && <StudySection key="study" />}
          {currentSection === 'practice' && <PracticeSection key="practice" />}
          {currentSection === 'pyq' && <PYQSection key="pyq" />}
          {currentSection === 'mock' && <MockTestSection key="mock" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2024 TCS NQT Prep. Made for students preparing for TCS NQT.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>65 Questions</span>
              <span>•</span>
              <span>75 Minutes</span>
              <span>•</span>
              <span>4 Categories</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Home Section Component
function HomeSection({ onNavigate }: { onNavigate: (section: Section) => void }) {
  const features = [
    {
      icon: BookOpen,
      title: 'Study Material',
      description: 'Comprehensive notes with simple explanations for all topics',
      color: 'from-emerald-500 to-teal-500',
      action: () => onNavigate('study')
    },
    {
      icon: Target,
      title: 'Practice Questions',
      description: 'Topic-wise practice with step-by-step solutions',
      color: 'from-violet-500 to-purple-500',
      action: () => onNavigate('practice')
    },
    {
      icon: FileText,
      title: 'PYQ 2025',
      description: 'Previous year questions with detailed solutions',
      color: 'from-rose-500 to-pink-500',
      action: () => onNavigate('pyq')
    },
    {
      icon: Timer,
      title: 'Mock Tests',
      description: 'Full-length tests simulating real exam conditions',
      color: 'from-amber-500 to-orange-500',
      action: () => onNavigate('mock')
    }
  ]

  const stats = [
    { label: 'Study Topics', value: '30+', icon: BookOpen },
    { label: 'Practice Questions', value: '100+', icon: Target },
    { label: 'PYQ Questions', value: '40+', icon: FileText },
    { label: 'Mock Questions', value: '65', icon: Timer }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      {/* Hero Section */}
      <div className="text-center py-12 md:py-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Complete TCS NQT Preparation
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Ace Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            TCS NQT Exam
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8"
        >
          Master Numerical, Reasoning, Verbal, and Coding sections with our comprehensive preparation platform.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="gap-2 bg-violet-500 hover:bg-violet-600 px-8" onClick={() => onNavigate('study')}>
            <BookOpen className="w-5 h-5" />
            Start Learning
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8" onClick={() => onNavigate('mock')}>
            <Play className="w-5 h-5" />
            Take Mock Test
          </Button>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-violet-500" />
              <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={feature.action}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="gap-2 group-hover:gap-4 transition-all">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Category Preview */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
            <CardTitle className="text-2xl">Exam Categories</CardTitle>
            <CardDescription className="text-violet-100">
              TCS NQT covers these four main areas
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(Object.keys(categoryConfig) as Category[]).map((key) => {
                const config = categoryConfig[key]
                const Icon = config.icon
                const count = topicMapping[key]?.length || 0
                return (
                  <div key={key} className={`p-4 rounded-xl ${config.bg} border border-slate-200 dark:border-slate-700`}>
                    <Icon className={`w-8 h-8 ${config.color} mb-2`} />
                    <h3 className="font-semibold text-slate-900 dark:text-white">{config.label}</h3>
                    <p className="text-sm text-slate-500">{count} topics</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

// Study Section Component
function StudySection() {
  const [activeCategory, setActiveCategory] = useState<Category>('numerical')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Study Material</h2>
          <p className="text-slate-500 mt-1">Learn concepts with simple, beginner-friendly explanations</p>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as Category)}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
          {(Object.keys(categoryConfig) as Category[]).map((key) => {
            const config = categoryConfig[key]
            const Icon = config.icon
            return (
              <TabsTrigger key={key} value={key} className="gap-2">
                <Icon className="w-4 h-4 hidden sm:inline" />
                {config.label.split(' ')[0]}
              </TabsTrigger>
            )
          })}
        </TabsList>

        {(Object.keys(categoryConfig) as Category[]).map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <Accordion type="single" collapsible className="space-y-2">
                {studyMaterial[category]?.map((topic, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className={`w-10 h-10 rounded-lg ${categoryConfig[category].bg} flex items-center justify-center text-lg font-bold ${categoryConfig[category].color}`}>
                          {topic.icon}
                        </span>
                        <span className="font-semibold text-left">{topic.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4">
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                          <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Simple Explanation
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{topic.explanation}</p>
                        </div>
                        
                        {topic.examples.map((example, eIndex) => (
                          <div key={eIndex} className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                              <Lightbulb className="w-4 h-4" />
                              {example.title}
                            </h4>
                            {example.steps && (
                              <div className="space-y-2">
                                {example.steps.map((step, sIndex) => (
                                  <div key={sIndex} className="flex items-start gap-2 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                                      {sIndex + 1}
                                    </span>
                                    <span className="text-slate-700 dark:text-slate-300">{step}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {example.code && (
                              <pre className="mt-3 p-4 rounded-xl bg-slate-900 text-slate-100 text-sm overflow-x-auto">
                                <code>{example.code}</code>
                              </pre>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  )
}

// Practice Section Component
function PracticeSection() {
  const [category, setCategory] = useState<Category>('numerical')
  const [topic, setTopic] = useState<string>('')
  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState<UserAnswer>({})
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>({})
  const [showHints, setShowHints] = useState<Record<number, boolean>>({})

  const topics = topicMapping[category] || []
  const questions = topic ? (practiceQuestions[category]?.[topic as keyof typeof practiceQuestions[typeof category]] || []) : []

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const checkAnswer = (questionId: number, correctAnswer: string) => {
    const userAnswer = answers[questionId]
    if (!userAnswer) return null
    return userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
  }

  const resetPractice = () => {
    setAnswers({})
    setShowSolutions({})
    setShowHints({})
    setStarted(false)
  }

  if (!started) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Practice Questions</h2>
          <p className="text-slate-500 mt-1">Choose a category and topic to start practicing</p>
        </div>

        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Select Your Practice Session</CardTitle>
            <CardDescription>Choose a category and specific topic to practice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select value={category} onValueChange={(v) => { setCategory(v as Category); setTopic('') }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(categoryConfig) as Category[]).map((key) => {
                    const config = categoryConfig[key]
                    return (
                      <SelectItem key={key} value={key}>
                        <span className="flex items-center gap-2">
                          <config.icon className={`w-4 h-4 ${config.color}`} />
                          {config.label}
                        </span>
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Topic</label>
              <Select value={topic} onValueChange={setTopic} disabled={!category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      <span className="flex items-center justify-between w-full">
                        {t.name}
                        <Badge variant="secondary" className="ml-2">{t.count} Q</Badge>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full gap-2 bg-violet-500 hover:bg-violet-600" 
              disabled={!topic}
              onClick={() => setStarted(true)}
            >
              <Play className="w-4 h-4" />
              Start Practice
            </Button>
          </CardContent>
        </Card>

        {/* Topic Preview */}
        {category && topics.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((t) => (
              <Card 
                key={t.id} 
                className={`cursor-pointer transition-all ${topic === t.id ? 'ring-2 ring-violet-500' : 'hover:shadow-md'}`}
                onClick={() => setTopic(t.id)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{t.name}</span>
                    <Badge variant="secondary">{t.count} questions</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Practice: {topics.find(t => t.id === topic)?.name}
          </h2>
          <p className="text-slate-500 mt-1">{questions.length} questions</p>
        </div>
        <Button variant="outline" onClick={resetPractice} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Change Topic
        </Button>
      </div>

      <div className="space-y-6">
        {questions.map((q, index) => {
          const isCorrect = checkAnswer(q.id, q.answer)
          const showSolution = showSolutions[q.id]
          const showHint = showHints[q.id]

          return (
            <Card key={q.id} className={`transition-all ${isCorrect === true ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20' : isCorrect === false ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20' : ''}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg ${categoryConfig[category].bg} flex items-center justify-center font-bold ${categoryConfig[category].color}`}>
                    {index + 1}
                  </span>
                  <p className="text-slate-900 dark:text-white font-medium whitespace-pre-line">{q.question}</p>
                </div>

                {q.type === 'mcq' ? (
                  <div className="space-y-2 ml-12">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = answers[q.id] === opt
                      const isCorrectOption = opt === q.answer
                      let optionClass = 'border-slate-200 dark:border-slate-700'
                      if (showSolution) {
                        if (isCorrectOption) optionClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                        else if (isSelected && !isCorrectOption) optionClass = 'border-red-500 bg-red-50 dark:bg-red-950/30'
                      } else if (isSelected) {
                        optionClass = 'border-violet-500 bg-violet-50 dark:bg-violet-950/30'
                      }

                      return (
                        <label 
                          key={optIndex}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${optionClass}`}
                        >
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={opt}
                            checked={isSelected}
                            onChange={() => handleAnswerChange(q.id, opt)}
                            className="sr-only"
                          />
                          <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-violet-500 bg-violet-500 text-white' : 'border-slate-300'}`}>
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            <span className="font-medium mr-2">{String.fromCharCode(65 + optIndex)}.</span>
                            {opt}
                          </span>
                          {showSolution && isCorrectOption && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto" />
                          )}
                        </label>
                      )
                    })}
                  </div>
                ) : q.type === 'code' ? (
                  <div className="ml-12 space-y-3">
                    <Textarea
                      placeholder="Write your C++ code here..."
                      className="font-mono min-h-[200px] bg-slate-900 text-slate-100"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="ml-12">
                    <Input
                      placeholder="Enter your answer"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      className="max-w-xs"
                    />
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4 ml-12">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => setShowHints(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                  >
                    <Lightbulb className="w-4 h-4" />
                    {showHint ? 'Hide Hint' : 'Show Hint'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => setShowSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                  >
                    <BookOpen className="w-4 h-4" />
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                  </Button>
                </div>

                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-12 mt-4"
                    >
                      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                        <p className="text-amber-800 dark:text-amber-200"><strong>Hint:</strong> {q.hint}</p>
                      </div>
                    </motion.div>
                  )}

                  {showSolution && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-12 mt-4"
                    >
                      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-3">Step-by-Step Solution</h4>
                        <div className="space-y-2">
                          {q.solution.map((step, sIndex) => (
                            <div key={sIndex} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">
                                {sIndex + 1}
                              </span>
                              <span className="text-slate-700 dark:text-slate-300">{step}</span>
                            </div>
                          ))}
                        </div>
                        {q.code && (
                          <pre className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-100 text-sm overflow-x-auto">
                            <code>{q.code}</code>
                          </pre>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </motion.div>
  )
}

// Mock Test Section Component
function MockTestSection() {
  const [testState, setTestState] = useState<'intro' | 'active' | 'results'>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<UserAnswer>({})
  const [reviewFlags, setReviewFlags] = useState<ReviewFlags>({})
  const [timeRemaining, setTimeRemaining] = useState(75 * 60) // 75 minutes

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (testState === 'active' && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setTestState('results')
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [testState, timeRemaining])

  const startTest = () => {
    setTestState('active')
    setCurrentQuestion(0)
    setAnswers({})
    setReviewFlags({})
    setTimeRemaining(75 * 60)
  }

  const submitTest = () => {
    setTestState('results')
  }

  const resetTest = () => {
    setTestState('intro')
    setCurrentQuestion(0)
    setAnswers({})
    setReviewFlags({})
    setTimeRemaining(75 * 60)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Calculate results
  const calculateResults = () => {
    let correct = 0
    let incorrect = 0
    let unanswered = 0
    const categoryScores: Record<string, { correct: number; total: number }> = {}

    mockTestQuestions.forEach((q) => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { correct: 0, total: 0 }
      }
      categoryScores[q.category].total++

      if (answers[q.id] === undefined) {
        unanswered++
      } else if (answers[q.id].toLowerCase() === q.answer.toLowerCase()) {
        correct++
        categoryScores[q.category].correct++
      } else {
        incorrect++
      }
    })

    return { correct, incorrect, unanswered, categoryScores }
  }

  if (testState === 'intro') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">TCS NQT Mock Test</h2>
          <p className="text-slate-500 mt-2">Simulate the real exam experience</p>
        </div>

        <Card className="border-2 border-violet-200 dark:border-violet-800">
          <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-xl">Test Structure</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">65</div>
                <div className="text-sm text-slate-500">Questions</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">75 min</div>
                <div className="text-sm text-slate-500">Duration</div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900 dark:text-white">Sections:</h4>
              {(Object.keys(categoryConfig) as Category[]).map((key) => {
                const config = categoryConfig[key]
                const count = mockTestQuestions.filter(q => q.category === config.label.split(' ')[0]).length
                return (
                  <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex items-center gap-2">
                      <config.icon className={`w-4 h-4 ${config.color}`} />
                      <span>{config.label}</span>
                    </div>
                    <Badge variant="secondary">{count} Q</Badge>
                  </div>
                )
              })}
            </div>

            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
              <p className="text-amber-800 dark:text-amber-200 text-sm">
                <strong>⚠️ Note:</strong> Once started, you cannot navigate to other sections. The test will auto-submit when time runs out.
              </p>
            </div>

            <Button className="w-full gap-2 bg-violet-500 hover:bg-violet-600" size="lg" onClick={startTest}>
              <Play className="w-5 h-5" />
              Start Mock Test
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  if (testState === 'results') {
    const { correct, incorrect, unanswered, categoryScores } = calculateResults()
    const percentage = Math.round((correct / mockTestQuestions.length) * 100)

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-6"
      >
        {/* Results Summary */}
        <Card className="border-2 border-violet-200 dark:border-violet-800 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-6 text-white text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Test Completed!</h2>
            <div className="text-5xl font-bold mb-2">{percentage}%</div>
            <p className="text-violet-100">You scored {correct} out of {mockTestQuestions.length}</p>
          </div>
          <CardContent className="pt-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
                <div className="text-2xl font-bold text-emerald-600">{correct}</div>
                <div className="text-sm text-slate-500">Correct</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-red-50 dark:bg-red-950/30">
                <div className="text-2xl font-bold text-red-600">{incorrect}</div>
                <div className="text-sm text-slate-500">Incorrect</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="text-2xl font-bold text-slate-600">{unanswered}</div>
                <div className="text-sm text-slate-500">Skipped</div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Performance by Topic</h4>
            <div className="space-y-3">
              {Object.entries(categoryScores).map(([category, scores]) => (
                <div key={category} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{category}</span>
                    <span>{scores.correct}/{scores.total}</span>
                  </div>
                  <Progress value={(scores.correct / scores.total) * 100} className="h-2" />
                </div>
              ))}
            </div>

            <Button className="w-full mt-6 gap-2" onClick={resetTest}>
              <RotateCcw className="w-4 h-4" />
              Take Another Test
            </Button>
          </CardContent>
        </Card>

        {/* Question Review */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Review Answers</h3>
          {mockTestQuestions.map((q, index) => {
            const userAnswer = answers[q.id]
            const isCorrect = userAnswer?.toLowerCase() === q.answer.toLowerCase()
            const isUnanswered = userAnswer === undefined

            return (
              <Card key={q.id} className={`${isCorrect ? 'border-emerald-500' : isUnanswered ? 'border-slate-300' : 'border-red-500'}`}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white ${isCorrect ? 'bg-emerald-500' : isUnanswered ? 'bg-slate-400' : 'bg-red-500'}`}>
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{q.category}</Badge>
                        {isCorrect && <Badge className="bg-emerald-500">Correct</Badge>}
                        {!isCorrect && !isUnanswered && <Badge className="bg-red-500">Incorrect</Badge>}
                        {isUnanswered && <Badge variant="outline">Unanswered</Badge>}
                      </div>
                      <p className="text-slate-900 dark:text-white font-medium">{q.question}</p>
                    </div>
                  </div>

                  <div className="ml-12 space-y-2">
                    <p><strong>Your Answer:</strong> <span className={isCorrect ? 'text-emerald-600' : 'text-red-600'}>{userAnswer || 'Not answered'}</span></p>
                    <p><strong>Correct Answer:</strong> <span className="text-emerald-600">{q.answer}</span></p>
                    
                    <details className="mt-3">
                      <summary className="cursor-pointer text-violet-600 hover:text-violet-700 font-medium">View Solution</summary>
                      <div className="mt-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                        <div className="space-y-2">
                          {q.solution.map((step, sIndex) => (
                            <div key={sIndex} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">
                                {sIndex + 1}
                              </span>
                              <span className="text-slate-700 dark:text-slate-300">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </motion.div>
    )
  }

  // Active Test
  const question = mockTestQuestions[currentQuestion]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <div className={`text-2xl font-mono font-bold ${timeRemaining < 300 ? 'text-red-500 animate-pulse' : 'text-slate-900 dark:text-white'}`}>
            ⏱️ {formatTime(timeRemaining)}
          </div>
          <Badge variant="secondary">Question {currentQuestion + 1} of {mockTestQuestions.length}</Badge>
        </div>
        <Button variant="destructive" size="sm" onClick={submitTest} className="gap-2">
          <Send className="w-4 h-4" />
          Submit Test
        </Button>
      </div>

      <div className="grid lg:grid-cols-[1fr,280px] gap-4">
        {/* Question Panel */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className={`${categoryConfig[question.category.toLowerCase() as Category]?.bg || 'bg-slate-100'} ${categoryConfig[question.category.toLowerCase() as Category]?.color || 'text-slate-600'}`}>
                {question.category}
              </Badge>
              <span className="text-slate-500">Q{question.id}</span>
              {reviewFlags[question.id] && (
                <Badge variant="outline" className="border-amber-500 text-amber-600">
                  <Flag className="w-3 h-3 mr-1" />
                  Marked
                </Badge>
              )}
            </div>

            <p className="text-lg font-medium text-slate-900 dark:text-white mb-6 whitespace-pre-line">{question.question}</p>

            {question.type === 'mcq' ? (
              <div className="space-y-2">
                {question.options.map((opt, optIndex) => {
                  const isSelected = answers[question.id] === opt
                  return (
                    <label 
                      key={optIndex}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/30' : 'border-slate-200 dark:border-slate-700 hover:border-violet-300'}`}
                    >
                      <input
                        type="radio"
                        name={`mock-q-${question.id}`}
                        value={opt}
                        checked={isSelected}
                        onChange={() => setAnswers(prev => ({ ...prev, [question.id]: opt }))}
                        className="sr-only"
                      />
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-violet-500 bg-violet-500 text-white' : 'border-slate-300'}`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">
                        <span className="font-medium mr-2">{String.fromCharCode(65 + optIndex)}.</span>
                        {opt}
                      </span>
                    </label>
                  )
                })}
              </div>
            ) : (
              <Input
                placeholder="Enter your answer"
                value={answers[question.id] || ''}
                onChange={(e) => setAnswers(prev => ({ ...prev, [question.id]: e.target.value }))}
                className="max-w-xs"
              />
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => setReviewFlags(prev => ({ ...prev, [question.id]: !prev[question.id] }))}
                className={`gap-2 ${reviewFlags[question.id] ? 'border-amber-500 text-amber-600' : ''}`}
              >
                <Flag className="w-4 h-4" />
                {reviewFlags[question.id] ? 'Unmark' : 'Mark for Review'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(prev => Math.min(mockTestQuestions.length - 1, prev + 1))}
                disabled={currentQuestion === mockTestQuestions.length - 1}
                className="gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Question Grid */}
        <Card className="h-fit sticky top-24">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Question Navigator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-1.5 max-h-[400px] overflow-y-auto">
              {mockTestQuestions.map((q, index) => {
                const isAnswered = answers[q.id] !== undefined
                const isMarked = reviewFlags[q.id]
                const isCurrent = index === currentQuestion

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-full aspect-square rounded-lg text-xs font-medium transition-all ${
                      isCurrent
                        ? 'bg-violet-500 text-white ring-2 ring-violet-300'
                        : isMarked
                        ? 'bg-amber-100 text-amber-700 border border-amber-300'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-violet-500"></span>
                <span>Current</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-emerald-100 border border-emerald-300"></span>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-amber-100 border border-amber-300"></span>
                <span>Marked</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

// PYQ Section Component
function PYQSection() {
  const [selectedYear, setSelectedYear] = useState<string>('2025')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>({})
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})

  const questions = pyqQuestions[selectedYear] || []
  const filteredQuestions = selectedCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category.toLowerCase() === selectedCategory.toLowerCase())

  const categories = ['all', 'Numerical', 'Reasoning', 'Verbal', 'Coding']

  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'numerical': return Calculator
      case 'reasoning': return Brain
      case 'verbal': return MessageCircle
      case 'coding': return Code
      default: return FileText
    }
  }

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'numerical': return 'emerald'
      case 'reasoning': return 'violet'
      case 'verbal': return 'amber'
      case 'coding': return 'sky'
      default: return 'slate'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-8 h-8 text-violet-500" />
            Previous Year Questions (PYQ)
          </h2>
          <p className="text-slate-500 mt-1">TCS NQT 2025 Actual Questions with Detailed Solutions</p>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">{questions.filter(q => q.category === 'Numerical').length}</div>
                <div className="text-xs text-slate-500">Numerical</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-violet-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">{questions.filter(q => q.category === 'Reasoning').length}</div>
                <div className="text-xs text-slate-500">Reasoning</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">{questions.filter(q => q.category === 'Verbal').length}</div>
                <div className="text-xs text-slate-500">Verbal</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-sky-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">{questions.filter(q => q.category === 'Coding').length}</div>
                <div className="text-xs text-slate-500">Coding</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, index) => {
          const CategoryIcon = getCategoryIcon(q.category)
          const color = getCategoryColor(q.category)
          const showSolution = showSolutions[q.id]
          
          return (
            <Card key={q.id} className="overflow-hidden">
              <div className={`h-1 bg-gradient-to-r from-${color}-500 to-${color}-600`} />
              <CardContent className="pt-6">
                {/* Question Header */}
                <div className="flex items-start gap-3 mb-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg bg-${color}-500/10 flex items-center justify-center font-bold text-${color}-600`}>
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="secondary" className={`bg-${color}-500/10 text-${color}-600`}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {q.category}
                      </Badge>
                      <Badge variant="outline">TCS NQT {q.year}</Badge>
                    </div>
                    <p className="text-slate-900 dark:text-white font-medium whitespace-pre-line">{q.question}</p>
                  </div>
                </div>

                {/* MCQ Options or Code */}
                {q.type === 'mcq' && q.options && (
                  <div className="space-y-2 ml-11">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = userAnswers[q.id] === opt
                      const isCorrect = q.answer === opt
                      let optClass = 'border-slate-200 dark:border-slate-700'
                      
                      if (showSolution) {
                        if (isCorrect) optClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                        else if (isSelected && !isCorrect) optClass = 'border-red-500 bg-red-50 dark:bg-red-950/30'
                      } else if (isSelected) {
                        optClass = 'border-violet-500 bg-violet-50 dark:bg-violet-950/30'
                      }
                      
                      return (
                        <label 
                          key={optIndex}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${optClass}`}
                        >
                          <input
                            type="radio"
                            name={`pyq-${q.id}`}
                            value={opt}
                            checked={isSelected}
                            onChange={() => setUserAnswers(prev => ({ ...prev, [q.id]: opt }))}
                            className="sr-only"
                          />
                          <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-violet-500 bg-violet-500 text-white' : 'border-slate-300'}`}>
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </span>
                          <span className="text-slate-700 dark:text-slate-300">
                            <span className="font-medium mr-2">{String.fromCharCode(65 + optIndex)}.</span>
                            {opt}
                          </span>
                          {showSolution && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto" />
                          )}
                        </label>
                      )
                    })}
                  </div>
                )}

                {/* Code Block */}
                {q.type === 'code' && q.code && (
                  <div className="ml-11 mt-4">
                    <div className="bg-slate-900 rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                        <span className="text-sm text-slate-300">C++ Solution</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 text-xs text-slate-400 hover:text-white"
                          onClick={() => navigator.clipboard.writeText(q.code || '')}
                        >
                          Copy Code
                        </Button>
                      </div>
                      <pre className="p-4 text-sm text-slate-100 overflow-x-auto">
                        <code>{q.code}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4 ml-11">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => setShowSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                  >
                    <Lightbulb className="w-4 h-4" />
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                  </Button>
                </div>

                {/* Solution */}
                <AnimatePresence>
                  {showSolution && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-11 mt-4"
                    >
                      <div className={`p-4 rounded-xl bg-${color}-50 dark:bg-${color}-950/30 border border-${color}-200 dark:border-${color}-800`}>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-violet-500" />
                          Step-by-Step Solution
                        </h4>
                        <div className="space-y-2">
                          {q.solution.map((step, sIndex) => (
                            <div key={sIndex} className="flex items-start gap-2 p-2 rounded-lg bg-white/50 dark:bg-slate-900/50">
                              <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-${color}-500/20 text-${color}-600 flex items-center justify-center text-xs font-bold`}>
                                {sIndex + 1}
                              </span>
                              <span className="text-slate-700 dark:text-slate-300">{step}</span>
                            </div>
                          ))}
                        </div>
                        {q.type === 'mcq' && (
                          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                            <span className="font-semibold text-emerald-600">Correct Answer: {q.answer}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </motion.div>
  )
}
