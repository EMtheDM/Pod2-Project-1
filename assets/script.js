 
// Streaming Availability Fetch
 fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "514988ace5msh951fbe99f73764cp120286jsn6ee999bd6cb1"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
