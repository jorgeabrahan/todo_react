import styles from '../styles/modules/Header.module.scss';

export default function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      <h1>Todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
}
