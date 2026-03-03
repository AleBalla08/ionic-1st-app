import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../interfaces/recipe.interface';
import { RecipeService } from '../services/recipe-service/recipe-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  constructor(private alertController: AlertController, private recipeService: RecipeService) {
    addIcons(allIcons)
  }

  recipes = this.recipeService.getAllRecipes();
  
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
