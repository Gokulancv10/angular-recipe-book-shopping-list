import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Shakshuka Recipe with Red Enchilada Sauce',
      'Easy 7-ingredient shakshuka recipe simmered in a tangy, aromatic red chili sauce with rich notes of cocoa, smoked paprika, and ancho chili.',
      'https://www.foodista.com/sites/default/files/Shakshuka-Recipe-with-Red-Enchilada-Sauce-1.jpg'
    ),
    new Recipe(
      'Beef Tapa | Filipino Beef Tapa Recipe',
      'Beef tapa is a type of cured meat of thin slices of tender beef.  Filipinos prepare beef tapa by using thin slices of meat. The meat is cured with salt and spices as a preservation method.',
      'https://i0.wp.com/thisgrandpablogs.com/wp-content/uploads/2018/06/beef-tapa.png'
    ),
    new Recipe(
      'Kerala Christmas Fruit Cake/ Plum Cake Recipe',
      'Kerala style fruit cakes are delicious, moist, and perfectly balanced in flavor. It has a distinct flavor, loaded with fruits and laced with the flavor of rum and aromatic spices. This cake is rich, and there is so much that goes into the cake- dried fruits, candied fruits, nuts, rum, molasses, spices, caramel syrup, and butter.',
      'https://1.bp.blogspot.com/-vk0fz3-Cd7o/X-PdO5nAiuI/AAAAAAAAZSs/QncaMohg9lcngLpJO7HxJZmfdJdC6XdCQCLcBGAsYHQ/s2048/kerala%2Bfruit%2Bcake%2B%2B16.JPG'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
