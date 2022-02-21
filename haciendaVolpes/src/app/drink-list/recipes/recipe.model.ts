
/*
export class Recipe {
    public name: string; 
    public description: string; 
    public category: string; 
    public categoryColor: string;
    public likes: number; 
    public saved: boolean;
    public imagePath: string;

    constructor(name: string, description: string, category: string, categoryColor: string, likes: number, saved: boolean, imagePath: string,) {
        this.name = name; 
        this.description = description;  
        this.category = category; 
        this.categoryColor = categoryColor;
        this.likes = likes; 
        this.saved = saved; 
        this.imagePath = imagePath;
    }
} */

export interface Recipe {
    name: string; 
    description: string; 
    category: string; 
    categoryColor: string;
    likes: number; 
    saved: boolean;
    imagePath: string;
}

