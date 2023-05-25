app.component('movie-list', {
    props: {
        results: {
            type: Array,
            required: true
        },      
    },
    template:
        /*html*/
        `
        <div class="results-container">
           <p v-if="!results.length">There are no results yet</p>
            <ul>
                 
                <li v-for="(result, index) in results" :key="index">
                    {{ result.Title }}
                    <br/>
                    {{ result.Year }}
                    <br/>
                    <a href="result.Poster">{{ result.Poster }}</a>
                    <br/>
                    <br/>
                    <br/>
                </li>
            </ul>
        </div>   
    `,
    data() {
        return {
            title: '',
            year: '',
            poster: ''
        }
    },
    

})