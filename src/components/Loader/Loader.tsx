import styles from './loader.module.scss'

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles['lds-default']}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
