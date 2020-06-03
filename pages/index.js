import { Accordion, AccordionItem } from 'carbon-components-react'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link
          href="/favicon.ico"
          rel="icon"
        />
      </Head>

      <main>
        <Accordion>
          <AccordionItem title="Title">Content</AccordionItem>
        </Accordion>
      </main>
    </div>
  )
}
