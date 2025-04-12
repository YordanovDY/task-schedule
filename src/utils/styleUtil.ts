import { Category } from "../types/Task";

export function getStyleByCategory(category: Category): string {
    return category.toLowerCase().replace(' ', '-');
}