import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import wordsToNumbers from 'words-to-numbers'
import Footer from './components/Footer/Footer'

import './index.css'
const alanKey =
  '33934f7e45403a12cc2c9f3e44368eec2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  const [newsArticles, setNewArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewArticles(articles)
          setActiveArticle(-1)
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number
          const article = articles[parsedNumber - 1]

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...')
          } else if (article) {
            window.open(article.url, '_blank')
            alanBtn().playText(`Opening...`)
            setNewArticles(articles)
          } else {
            alanBtn().playText('Please try that again...')
          }
        }
      },
    })
  }, [])

  // useEffect(() => {
  //   alanBtn({
  //     key: alanKey,
  //     onCommand: ({ command, data }) => {
  //       if (command === 'covidCases') {
  //         console.log(data)
  //       }
  //     },
  //   })heo
  // }, [])

 
  return (
    <div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Footer />
    </div>
  )
}

export default App
