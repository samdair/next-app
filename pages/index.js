import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import profilePic from '../public/sami.jpg'
export default function Home() {
  return (
    <div>
      Read{' '}
      <Link href="/about">
        <a>About Page!</a>
      </Link>
    </div>
  )
}
