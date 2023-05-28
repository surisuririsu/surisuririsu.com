import styles from '@/styles/Section.module.scss'

export default function Section({ children, id }) {
  return (
    <div className={styles.container} id={id}>
      <section>{children}</section>
    </div>
  )
}
