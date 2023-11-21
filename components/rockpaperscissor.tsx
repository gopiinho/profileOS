'use client'

import { useState } from 'react'
import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { CardProps } from '@/utils/constants'
import { useModalStore } from '@/utils/State/modalstore'
import { AnimatePresence, motion } from 'framer-motion'

// Icons
import { GiAbstract029 } from 'react-icons/gi'
import { FaHandRock } from 'react-icons/fa'
import { FaHandPaper } from 'react-icons/fa'
import { FaHandScissors } from 'react-icons/fa'

/* ------------- Game Logic --------------- */

enum Result {
  win = 'You won!',
  lose = 'You lost!',
  tie = "It's a tie!",
}

const choices = ['rock', 'paper', 'scissors']

export default function RockPaperScissor({ title }: CardProps) {
  const [result, setResult] = useState('Pick')
  const [playerScore, setPlayerScore] = useState(0)
  const [cpuScore, setCpuScore] = useState(0)
  const [turns, setTurns] = useState(0)

  const { gameVisible, toggleGameVisible } = useModalStore((state) => ({
    gameVisible: state.gameVisible,
    toggleGameVisible: state.toggleGameVisible,
  }))

  // cpu generated
  function getCpuMove() {
    const cpuMoveIndex = Math.floor(Math.random() * 3)
    return choices[cpuMoveIndex].toString()
  }

  function playerMove(move: string) {
    const cpuMove = getCpuMove()
    getResult(move, cpuMove)
  }

  function getResult(playerMove: string, cpuMove: string) {
    setTurns(turns + 1)
    let result = ''
    if (playerMove === cpuMove) {
      result = Result.tie
    } else if (
      (playerMove === 'rock' && cpuMove === 'scissors') ||
      (playerMove === 'paper' && cpuMove === 'rock') ||
      (playerMove === 'scissors' && cpuMove === 'paper')
    ) {
      result = Result.win
      setPlayerScore(playerScore + 1)
    } else {
      result = Result.lose
      setCpuScore(cpuScore + 1)
    }
    setResult(result)
  }

  function resetStats() {
    setCpuScore(0)
    setPlayerScore(0)
    setTurns(0)
  }

  return (
    <motion.div
      initial={{
        scale: 0,
        x: '0%',
        y: '70%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{ duration: 0.2 }}
      animate={{ scale: 1, x: '50%', y: '50%' }}
      exit={{
        scale: 0,
        x: '0%',
        y: '70%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      className='absolute inset-0 flex items-center justify-center'
    >
      <Card className='relative h-[95%] w-[95%]'>
        <CardHeader onClick={toggleGameVisible}>
          <CardIcon>
            <GiAbstract029 />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='flex flex-col text-center text-base'
          style={{ fontFamily: 'modeseven' }}
        >
          <div className='relative py-3'>
            <h4 className='text-4xl'>
              <span className='text-accent'>R</span>o
              <span className='text-accent'>P</span>a
              <span className='text-accent'>S</span>c
            </h4>
            <p className='text-[0.68rem]'>Rock.Paper.Scissors</p>
            <div className='absolute right-0 top-0 p-4'>
              <p>Turns: {turns}</p>
              <span className='cursor-pointer p-1' onClick={() => resetStats()}>
                Reset
              </span>
            </div>
          </div>
          <div className='flex items-center py-10'>
            <div className='flex w-full flex-col'>
              <span className='text-xl sm:text-3xl'>You</span>
              <span className='text-base text-accent sm:text-3xl'>
                {playerScore}
              </span>
            </div>
            <div className='flex w-full flex-col'>
              <span className='text-xl text-accent sm:text-4xl'>vs</span>
            </div>
            <div className='flex w-full flex-col'>
              <span className='text-xl sm:text-3xl'>CPU</span>
              <span className='text-base text-accent sm:text-3xl'>
                {cpuScore}
              </span>
            </div>
          </div>
          <div className='flex h-28 flex-col items-center justify-center text-xl sm:h-40 sm:text-3xl'>
            {result}
          </div>
          <div className='absolute bottom-0 flex h-40 w-full flex-col border-t border-accent/20 text-5xl sm:h-60 sm:flex-row'>
            <Button size='full' onClick={() => playerMove('rock')}>
              <FaHandRock className='svg text-2xl sm:text-5xl' />
            </Button>
            <Button size='full' onClick={() => playerMove('paper')}>
              <FaHandPaper className='svg text-2xl sm:text-5xl' />
            </Button>
            <Button size='full' onClick={() => playerMove('scissors')}>
              <FaHandScissors className='svg rotate-90 transform text-2xl sm:text-5xl' />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
