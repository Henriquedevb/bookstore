import { useEffect, useState } from 'react'
import CardBook from '../../components/cardBook'
import CardSsection from '../../components/cardection'
import { api } from '../api/api'
import styles from './books.module.scss'
import { formatPrice } from '../../helpers/functions'
import { useRouter } from 'next/router'

interface IBookPropsComponent {
  id: number
  codigo: string
  name: string
  price: number
}

export default function Books() {

  const router = useRouter()


  const [data, setData] = useState<IBookPropsComponent[]>([])

  useEffect(() => {
    api.get('/books').then(response => {
      setData(response.data)
    })
  }, [])

  function handleAddNewBook() {
    router.push('/new-book')
  }

  return (
    <>
      <div className={styles.container}>
        <button onClick={handleAddNewBook} className={styles.addButton}>New Book</button>
        <div className={styles.content}>
          <CardSsection>
            {data.map((book) => (
              <CardBook key={book.id} title={book.name} cod={book.codigo} price={formatPrice(book.price)} />
            ))}

          </CardSsection>
        </div>

      </div>
    </>
  )
}