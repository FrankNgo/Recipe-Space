import $ from 'jquery';

export class RecipePick {

  // constructor(userInput) {
  //   this.recipes = userInput;
  //   }

  getRecipes(userInput, displayData) {
     $.get( `https://api.edamam.com/search?q=${userInput}&app_id=75530c1e&app_key=622c789e025e095b75e9f91956cb7cb6`)
     .then(response => {
      // let recipes = this.hits;
      // let title = this.label;
      console.log(response.hits);
      displayData(response);
    })
    .fail(() => 'something went wronggggg')
  }
}











//     .then(function(response) {
      //
      // for (let i = 0; i < recipes.length; i++) {
      //   let recipe = recipes[i].recipe;
      //   let title = recipe.label;
      //   let image_url = recipe.image;
      //   let ingredients = recipe.ingredients;
      //   let ingredientList = $('<ul>');
      //   for (let j = 0; j < ingredients.length; j++) {
      //     let ingredient = ingredients[j].text;
      //     let li = $('<li>').html(ingredient);
      //     ingredientList.append(li);
      //   }
//         let recipe_title = $('<h3>').html(title);
//         let recipe_image = $('<img>').attr('src', image_url);
//         let label = $('<h4>').html('Ingredients');
//
//         let parsingResponse = function parseResponse(title){
//           $("#recipes").text(title);
//           //  , recipe_image, label, ingredientList);
//         }
//         console.log(parsingResponse);
//         return parsingResponse;
//       }
//     })
//   }
// }
