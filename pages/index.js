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
      <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
    </div>
  )
}
