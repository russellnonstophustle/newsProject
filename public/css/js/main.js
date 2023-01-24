const newsRouter = require("../../../src/routes/news");
const searchBtn = document.getElementById('searchBtn');
// variable to take search input
let searchInputTxt = document.getElementById('searchInput').value.trim();

// Event Listener
searchBtn.addEventListener('click', newsRouter);

// run the api call again with search input 
newsRouter.get('', async(req, res) => {
    try {
        // fetch data from MediaStack API
        const newsAPI = await axios.get(`http://api.mediastack.com/v1/news?access_key=57cd9925fdedca5bc39451dffab4224b&countries=us&language=en&sort=popularity&categories=${searchInputTxt}`)
        console.log(newsAPI.data)  // debugging
 
        // transfer response to the news.ejs
        res.render('news', { articles : newsAPI.data.data })  // first data is reponse next one is the articles in the response (array)
    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
        } else if(error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
    }
})
 
module.exports = newsRouter