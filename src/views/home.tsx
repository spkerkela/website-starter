import { renderToStaticMarkup } from 'react-dom/server'
import React from 'react'

const Layout = (props: any) => {
  return <html lang='fi'>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="description" content="My New App"></meta>
      <title>My New App</title>
      <script src="/main.js"></script>
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body className='bg-slate-900'>
      {props.children}
    </body>
  </html>
}

const HomeContent = (_props: any) => {
  return (<div className='flex p-6'>
    <div className='p-8 mx-auto  max-w-bg bg-slate-600 rounded-md'>
      <h1 data-testid='hello-world' className='mx-auto text-xl text-center text-gray-300'>Hello World</h1>
      <p className='text-md text-center text-gray-200'>This is Sipe's starter template</p>
    </div>
  </div>)
}


export default function Index(): string {
  return `<!DOCTYPE html>
${renderToStaticMarkup(
    <Layout>
      <HomeContent />
    </Layout>)}`
}
