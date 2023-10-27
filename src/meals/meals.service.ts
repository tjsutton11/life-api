import { Injectable } from "@nestjs/common";
import { Meal } from "src/interfaces/meal.interface";

@Injectable()
export class MealsService {
    getAllMeals(): Meal[] {
        return meals;
    }

    getMealById(id: number): Meal {
        return meals.find((e) => e.id === id);
    }
}

const meals: Meal[] = [
    {
        id: 1,
        name: "Beef Stew",
        cuisine: "American",
        servings: 6,
        mealTime: "dinner",
        rating: 5,
        url: "www.beefstewrecipe.com",
        tags: ['soup', 'comfort']
    },
    {
        id: 2,
        name: "Taco Soup",
        cuisine: "American",
        servings: 6,
        mealTime: "dinner",
        rating: 5,
        url: "www.tacosouprecipe.com",
        tags: ['soup', 'comfort']
    }
]