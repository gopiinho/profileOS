import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'

export default function Skills({ title }: CardProps) {
  return (
    <div className='flex items-center justify-center'>
      <Card className='w-[500px]'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div className='p-2'>
          <p>Currently thinking.</p>
        </div>
      </Card>
    </div>
  )
}
