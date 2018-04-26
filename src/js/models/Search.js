import axios from 'axios';
import { key, proxy } from '../config'

export default class Search {
    constructor(query){
        this.query = query;
    }
    
    async getResult(){
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes
            // console.log(this.result);
    
        } catch(error) {
            alert(error);
        }
    }
}


//Api Key food2fork b16909b2e4d8ad90b30ac4552c8bcd79
//All search requests should be made to the base search API URL. http://food2fork.com/api/search 
//All recipe requests should be made to this URL: http://food2fork.com/api/get 

