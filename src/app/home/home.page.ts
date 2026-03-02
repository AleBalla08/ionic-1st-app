import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../interfaces/recipe.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  constructor(private alertController: AlertController) {
    addIcons(allIcons)
  }

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Strogonof de Frango',
      imageUrl: 'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg',
      ingredients: ['Frango', 'creme de leite', 'molho de tomate', 'ketchup']
    },
    {
      id: 'r2',
      title: 'Pizza Calabresa',
      imageUrl: 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600_square.jpg',
      ingredients: ['massa de pizza', 'molho de tomate', 'queijo', 'calabresa']
    }
  ]
  
  // courseName = "";
  // courseRating: number | null = null;

  // courses: {id : number, name : string, rating : number | null}[] = [];

  // courseId = 0;

  // async saveCourse() {
  //   if (!this.courseName || !this.courseRating || this.courseRating < 1 || this.courseRating > 5) {
  //     await this.showInvalidAlert();
  //     return;
  //   }

  //   this.courses.push({
  //     id: this.courseId,
  //     name: this.courseName,
  //     rating: this.courseRating
  //   });

  //   this.courseName = "";
  //   this.courseRating = null;
  //   this.courseId++;
  // }

  // async showInvalidAlert() {
  //   const alert = await this.alertController.create({
  //     header: "Erro",
  //     message: "Preencha corretamente os campos. \nA nota deve estar entre 1 e 5.",
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }
} 
