import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe.interface';
import { RecipeService } from 'src/app/services/recipe-service/recipe-service';
import { IonicModule, AlertController} from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  imports: [IonicModule, CommonModule, RouterModule]
})
export class RecipeDetailComponent  implements OnInit {
  loadedRecipe: Recipe | undefined;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.get('id')) {
        console.log('nao achou ID');
        return;
      }
      const recipeId = paramMap.get('id');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId!);
    });
  }

  onDeleteRecipe() {
      this.alertCtrl.create({
        header: "Tem certeza?",
        message: "realmente deseja deletar a receita?",
        buttons: [
          {
            text: "Cancelar",
            role: "cancel"
          },
          {
            text: "Deletar",
            handler: ()=>{
              if (this.loadedRecipe) {
                this.recipeService.deleteRecipe(this.loadedRecipe.id);
                this.router.navigate(['/recipes']); 
              }
            }
          }
        ]
      }).then(alertEl => {
        alertEl.present();
      });
    }
}
