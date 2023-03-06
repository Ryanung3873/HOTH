import { joinPaths } from '@remix-run/router';
import axios from 'axios';

const RecipeService = () => {
    //const path = "https://api.edamam.com/api/recipes/v2";
    const app_key = "b4855e48bc82953649f39782f5495c5a";
    const app_id = "6102af6d";

    function getRecipes(path) {
        axios.get(path + "?app_id=" + app_id + "&app_key=" + app_key)
            .then((response) => {
                var result = response.data;
                console.log(result);
            }).catch(e => console.log(e));
    }


}

export default RecipeService;