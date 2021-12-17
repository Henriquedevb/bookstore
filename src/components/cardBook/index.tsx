import styles from './cardBook.module.scss'

interface IBookProps {
  title: string;
  cod: string;
  price: string;

}

export default function CardBook({ title, cod, price }: IBookProps) {
  return (
    <div className={styles.card}>
      <h3>{title} <br /> <small>{cod}</small></h3>
      <h1>{price}</h1>
      <button className={styles.updateButton}>Alterar</button>
      <button className={styles.deleteButton}>Deletar</button>
    </div>
  )
}