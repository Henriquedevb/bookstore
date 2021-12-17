import styles from './cardSection.module.scss'
export default function CardSsection({ children }) {
  return (
    <section className={styles.cards}>
      {children}
    </section>

  )
}