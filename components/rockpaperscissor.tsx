'use client'

import { useState } from 'react'
import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { CardProps } from '@/utils/constants'

// Icons
import { GiAbstract029 } from 'react-icons/gi'

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

  return (
    <div className='flex items-center justify-center'>
      <Card className='w-[300px] lg:w-[700px]'>
        <CardHeader>
          <CardIcon>
            <GiAbstract029 />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='flex flex-col text-center text-base'
          style={{ fontFamily: 'modeseven' }}
        >
          <div className='py-3'>
            <h4 className='text-4xl'>RoPaSc</h4>
            <p className='text-[0.68rem]'>Rock.Paper.Scissors</p>
          </div>
          <div className='flex- flex items-center'>
            <div className='flex w-full flex-col'>
              <span className='text-xl'>You</span>
              <span className='text-accent'>{playerScore}</span>
            </div>
            <div className='flex w-full flex-col'>
              <span className='text-xl'>CPU</span>
              <span className='text-accent'>{cpuScore}</span>
            </div>
          </div>
          <div className='flex h-28 items-center justify-center'>{result}</div>
          <div className='flex h-16 border-t border-accent/20'>
            <Button size='full' onClick={() => playerMove('rock')}>
              Rock
            </Button>
            <Button size='full' onClick={() => playerMove('paper')}>
              Paper
            </Button>
            <Button size='full' onClick={() => playerMove('scissors')}>
              Scissors
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
