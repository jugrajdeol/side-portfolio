import Image from 'next/image'
import { Inter } from 'next/font/google'
import {name, about, bio} from '../../lib/information'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='position:center'>
      <h1 className="position-centre font-bold text-4xl font-bold dark:text-center">
        {name}
      </h1>
      <p className='text-neutral-800 dark:text-center'>
        {about()}
      </p>

      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <p className='dark:text-center'>
          {bio()}
        </p>
      </div>
    </section>
  )
}
