const app = Vue.createApp({
    data() {
        return { 
            title: '',
            results: [],
            apiKey: '0702956e69msh60d428207c19d86p15a11cjsnfe5d02a497b6'
        }
    },
    methods: {
        fetchAPIData() {
            if (this.title === '') {
                alert('Please enter a movie title')
                return
            } 


            let url = "https://movie-database-alternative.p.rapidapi.com/?r=json&s=" + this.title

            fetch(url, {
                "method": "GET",
                "headers": {
                    'X-RapidAPI-Key': this.apiKey,
		            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        alert("Server returned " + response.status + " : " + response.statusText)
                    }
                })
                .then(response => {
                    console.log(response.Search)
                    this.results = response.Search

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})