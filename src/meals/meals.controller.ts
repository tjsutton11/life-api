import { Controller, Get, Param } from '@nestjs/common';
import { MealsService } from './meals.service';
import { Meal } from 'src/interfaces/meal.interface';

@Controller('meals')
export class MealsController {
    constructor(private readonly mealsService: MealsService) {}

    @Get()
    getAllMeals(): Meal[] {
        return this.mealsService.getAllMeals();
    }

    @Get(':id')
    getMealById(@Param('id') id: string ): Meal {
        return this.mealsService.getMealById(parseInt(id));
    }

    @Post()
    addNewMeal(){
        
    }
}
