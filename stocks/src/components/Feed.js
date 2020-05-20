import React, { useState, useEffect } from 'react';
import ShowTweets from "./ShowTweets";


const TweetFeed = props => {
    
    const [query, setQuery] = useState("");
    const [tweets, setTweets] = useState();
    
    useEffect(() => {
        ShowTweets()
        setTweets(props.results)
        console.log(tweets, 'tweets')
    }, [query])

    const handleChange = e => setQuery(e.target.value)

    return (
        <div>
            <form>
                <label htmlFor="Search">Search</label>
                <input value={query} placeholder="Search Stocks" onChange={handleChange}></input>
            </form>
            {/* { props.tweets.map(tweet => <p>{tweet}</p>) } */}
            <p>{tweets}</p>
        </div>
    )
}


export default TweetFeed;
