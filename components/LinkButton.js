import styles from '@/styles/LinkButton.module.scss'

export default function LinkButton({ children, className, href }) {
  return (
    <a
      className={`${styles.button} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
