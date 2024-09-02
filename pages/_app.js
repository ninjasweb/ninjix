import styles from "./styles.css"

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.app}>
      <Component {...pageProps} />
    </div>
  )
}
