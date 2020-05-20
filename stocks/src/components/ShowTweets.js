
const st = require('stocktwits');


function ShowTweets() {
    st.get(`streams/user/StockTwits/${props.query}`, function (err, res) {
        console.log(res.body.messages)
        const results = res.body.messages  
    })
}

export default ShowTweets;