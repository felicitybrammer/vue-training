const app = Vue.createApp({
    data() {
        return {
            results: {},
            responseAvailable: false,
            apiKey: '0702956e69msh60d428207c19d86p15a11cjsnfe5d02a497b6'
        }
    },
    methods: {
        fetchAPIData() {
            this.responseAvailable = false
            // r=json&i=tt4154796
            fetch("https://movie-database-alternative.p.rapidapi.com/?r=json&s=Titanic", {
                "method": "GET",
                "headers": {
                    'X-RapidAPI-Key': this.apiKey,
		            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
                }
            })
                .then(response => {
                    console.log(response)
                    if (response.ok) {
                        return response.json()
                    } else {
                        alert("Server returned " + response.status + " : " + response.statusText)
                    }
                })
                .then(response => {
                    this.results = response.Search[0]
                    this.responseAvailable = true
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})