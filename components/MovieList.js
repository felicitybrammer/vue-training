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
           
            <ul>
                 
                <li v-for="(result, index) in results" :key="index">
                    {{ result.Title }}
                    <br/>
                    {{ result.Year }}
                    <br/>
                    <a>{{ result.Poster }}</a>
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