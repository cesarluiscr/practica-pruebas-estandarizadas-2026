/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Beaker, 
  Globe, 
  Calculator, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  Trophy,
  ChevronRight
} from "lucide-react";
import { quizData, SubjectQuiz, Question } from "./quizData";

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  const handleSubjectSelect = (subject: SubjectQuiz) => {
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers(new Array(subject.questions.length).fill(null));
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (userAnswers[currentQuestionIndex] !== null) return;

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newUserAnswers);

    if (optionIndex === selectedSubject?.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < (selectedSubject?.questions.length || 0) - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setSelectedSubject(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  const getSubjectIcon = (id: string) => {
    switch (id) {
      case "espanol": return <BookOpen className="w-8 h-8" />;
      case "ciencias": return <Beaker className="w-8 h-8" />;
      case "sociales": return <Globe className="w-8 h-8" />;
      case "matematicas": return <Calculator className="w-8 h-8" />;
      default: return <BookOpen className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      <header className="bg-white border-b border-slate-200 py-4 md:py-6 px-4 mb-6 md:mb-8 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
            <div className="bg-blue-600 p-2 rounded-xl text-white shrink-0">
              <Trophy className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="truncate">
              <h1 className="text-lg md:text-2xl font-bold tracking-tight truncate">Prueba 2026</h1>
              <p className="text-[10px] md:text-sm text-slate-500 font-medium whitespace-nowrap">Preparación MEP Costa Rica</p>
            </div>
          </div>
          {selectedSubject && (
            <button 
              id="back-button"
              onClick={resetQuiz}
              className="flex items-center gap-1.5 md:gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm md:text-base shrink-0"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span>Volver</span>
            </button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-12">
        <AnimatePresence mode="wait">
          {!selectedSubject ? (
            <motion.div 
              key="subjects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {quizData.map((subject) => (
                <button
                  id={`subject-${subject.id}`}
                  key={subject.id}
                  onClick={() => handleSubjectSelect(subject)}
                  className="group relative bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left overflow-hidden translate-z-0"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 ${subject.color} opacity-5 group-hover:opacity-10 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 transition-opacity`} />
                  <div className={`${subject.color} w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 shadow-lg shadow-current/20`}>
                    {getSubjectIcon(subject.id)}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{subject.name}</h2>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4">{subject.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold text-xs md:text-sm group-hover:gap-2 transition-all">
                    Comenzar Quiz <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </motion.div>
          ) : showResult ? (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-xl text-center max-w-2xl mx-auto"
            >
              <div className="mb-6 md:mb-8 flex justify-center">
                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center ${Math.round((score / selectedSubject.questions.length) * 100) >= 70 ? 'bg-yellow-100 text-yellow-600' : 'bg-slate-100 text-slate-600'}`}>
                  <Trophy className="w-12 h-12 md:w-16 md:h-16" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-1 md:mb-2">¡Quiz Completado!</h2>
              <p className="text-slate-500 text-sm md:text-base mb-6 md:mb-8 font-medium">Has finalizado el práctico de {selectedSubject.name}</p>
              
              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl mb-6 flex flex-row justify-around items-center">
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500 uppercase font-black tracking-widest mb-1">Nota Final</p>
                  <p className={`text-4xl md:text-5xl font-black ${Math.round((score / selectedSubject.questions.length) * 100) >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                    {Math.round((score / selectedSubject.questions.length) * 100)}
                  </p>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500 uppercase font-black tracking-widest mb-1">Correctas</p>
                  <p className="text-3xl md:text-4xl font-black text-slate-900">{score}/{selectedSubject.questions.length}</p>
                </div>
              </div>

              <div className="mb-8 px-2">
                {Math.round((score / selectedSubject.questions.length) * 100) >= 90 ? (
                  <p className="text-green-600 font-bold text-lg md:text-xl">¡Impresionante! Tienes un dominio total del tema.</p>
                ) : Math.round((score / selectedSubject.questions.length) * 100) >= 70 ? (
                  <p className="text-blue-600 font-bold text-lg md:text-xl">¡Buen trabajo! Has aprobado la práctica.</p>
                ) : (
                  <p className="text-red-500 font-bold text-lg md:text-xl">Es necesario repasar más para mejorar la nota.</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button
                  id="restart-quiz"
                  onClick={() => handleSubjectSelect(selectedSubject)}
                  className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
                  Intentar otra vez
                </button>
                <button
                  id="go-home"
                  onClick={resetQuiz}
                  className="bg-white text-slate-700 border-2 border-slate-200 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Ver otras materias
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 md:space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="space-y-0.5 md:space-y-1">
                  <span className="text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-widest">{selectedSubject.name}</span>
                  <h2 className="text-base md:text-lg font-bold">Pregunta {currentQuestionIndex + 1} de {selectedSubject.questions.length}</h2>
                </div>
                <div className="flex gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                  {selectedSubject.questions.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 min-w-4 md:w-6 flex-1 md:flex-none rounded-full transition-colors ${idx <= currentQuestionIndex ? 'bg-blue-600' : 'bg-slate-200'}`} 
                    />
                  ))}
                </div>
              </div>

              <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <p className="text-xl md:text-2xl font-bold leading-tight mb-6 md:mb-8">
                  {selectedSubject.questions[currentQuestionIndex].text}
                </p>

                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {selectedSubject.questions[currentQuestionIndex].options.map((option, idx) => {
                    const isAnswered = userAnswers[currentQuestionIndex] !== null;
                    const isSelected = userAnswers[currentQuestionIndex] === idx;
                    const isCorrect = idx === selectedSubject.questions[currentQuestionIndex].correctAnswer;
                    
                    let buttonClass = "p-4 md:p-5 rounded-xl md:rounded-2xl border-2 text-left font-semibold transition-all flex items-center justify-between gap-3 text-sm md:text-base";
                    if (!isAnswered) {
                      buttonClass += " border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 cursor-pointer";
                    } else if (isSelected) {
                      buttonClass += isCorrect ? " border-green-500 bg-green-50 text-green-700" : " border-red-500 bg-red-50 text-red-700";
                    } else if (isCorrect) {
                      buttonClass += " border-green-500 bg-green-50 text-green-700";
                    } else {
                      buttonClass += " border-slate-50 opacity-40";
                    }

                    return (
                      <button
                        id={`option-${idx}`}
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleAnswerSelect(idx)}
                        className={buttonClass}
                      >
                        <span className="flex-1 leading-snug">{option}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 shrink-0" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                
                {userAnswers[currentQuestionIndex] !== null && selectedSubject.questions[currentQuestionIndex].explanation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 p-4 bg-blue-50 rounded-xl text-blue-800 text-sm font-medium border border-blue-100"
                  >
                    💡 {selectedSubject.questions[currentQuestionIndex].explanation}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
