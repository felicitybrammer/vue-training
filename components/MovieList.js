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
                    {{ result.title }}
                    <br/>
                    {{ result.year }}
                    <br/>
                    {{ result.poster }}
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