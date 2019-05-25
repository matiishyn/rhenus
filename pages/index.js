// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
    <h1>ENV: {process.env.TEST}</h1>
  </div>
)

export default Index
