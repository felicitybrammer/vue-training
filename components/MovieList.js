app.component('movie-list', {
    props: {
        results: {
            type: Object,
            required: true
        }, 
        responseAvailable: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `
    <div v-if="responseAvailable">
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