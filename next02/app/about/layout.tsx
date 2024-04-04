import React from 'react'
import styles from './styles.module.css'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
        <nav>
            <h2>About NavBar</h2>
        </nav>
        <main className={styles.main}>
            {children}
        </main>
    </>
  )
}
