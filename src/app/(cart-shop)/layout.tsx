import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={`horizontal-line ${styles.horizontalLine}`}></div>
      {children}
    </div>
  );
}
