import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { recipe_search } from './NutritionalRecipes.js';

$(document).ready(function() {
  $('#recipeSearch').click(function() {
    let recipe = $('#recipe').val();
    $('#recipe').val("");
    recipe_search(recipe);
  });
});
