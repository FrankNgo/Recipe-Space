export function recipe_search(recipe) {
  $.ajax({
    url: `https://api.edamam.com/search?q=${recipe}&app_id=75530c1e&app_key=622c789e025e095b75e9f91956cb7cb6`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(results) {
      var recipes = results.hits;
      for (var i = 0; i < recipes.length; i++) {
        var recipe = recipes[i].recipe;
        var title = recipe.label;
        var image_url = recipe.image;
        var ingredients = recipe.ingredients;
        var ingredientList = $('<ul>');
        for (var j = 0; j < ingredients.length; j++) {
          var ingredient = ingredients[j].text;
          var li = $('<li>').html(ingredient);
          ingredientList.append(li);
        }
        var recipe_title = $('<h3>').html(title);
        var recipe_image = $('<img>').attr('src', image_url);
        var label = $('<h4>').html('Ingredients');
        $("#recipes").append(recipe_title, recipe_image, label, ingredientList);
      }
    },
    error: function() {
      $('#errors').text("There was an error processing your request. Please try again.")
    }
  });
}
