import React, {useEffect, useState} from 'react'
import alanBtn  from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
const alanKey = '33934f7e45403a12cc2c9f3e44368eec2e956eca572e1d8b807a3e2338fdd0dc/stage'


const App = () => {

    const[newsArticles, setNewArticles] = useState([]);

    useEffect(() => {
         alanBtn({
           key: alanKey,
           onCommand: ({command, articles}) => {
               if (command === 'newHeadlines') {
                 setNewArticles(articles)
               }
           }
         })
    }, [])

    console.log(newsArticles)
    return (
        <div>
            <h1>Alan Ai news</h1>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App
