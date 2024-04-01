'use strict';

/**
 * Provides information about an error while working with a pizza.
 * Details are stored in the log property.
 * @class
 */
class PizzaException {
    constructor(log) {
        this.log = log;
    }
}

/**
 * Class representing a Pizza.
 * @class
 */
class Pizza {
    static SIZE_S = 'S';
    static SIZE_M = 'M';
    static SIZE_L = 'L';

    static TYPE_VEGGIE = 'VEGGIE';
    static TYPE_MARGHERITA = 'MARGHERITA';
    static TYPE_PEPPERONI = 'PEPPERONI';

    static EXTRA_TOMATOES = 'TOMATOES';
    static EXTRA_CHEESE = 'CHEESE';
    static EXTRA_MEAT = 'MEAT';

    static allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
    static allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI];
    static allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT];

    /**
     * @param {string} size - Size of pizza.
     * @param {string} type - Type of pizza.
     * @throws {PizzaException} - In case of improper use.
     */
    constructor(size, type) {
        if (!Pizza.allowedSizes.includes(size) || !Pizza.allowedTypes.includes(type)) {
            throw new PizzaException('Invalid size or type for pizza');
        }

        this.size = size;
        this.type = type;
        this.extraIngredients = [];
    }

    /**
     * Adds extra ingredient to the pizza.
     * @param {string} ingredient - Extra ingredient to be added.
     * @throws {PizzaException} - In case of improper use.
     */
    addExtraIngredient(ingredient) {
        if (arguments.length !== 1) {
            throw new PizzaException('addExtraIngredient method accepts only one parameter');
        }

        if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
            throw new PizzaException('Invalid ingredient');
        }

        if (this.extraIngredients.includes(ingredient)) {
            throw new PizzaException('Duplicate ingredient');
        }

        this.extraIngredients.push(ingredient);
    }

    /**
     * Removes extra ingredient from the pizza.
     * @param {string} ingredient - Extra ingredient to be removed.
     * @throws {PizzaException} - In case of improper use.
     */
    removeExtraIngredient(ingredient) {
        if (arguments.length !== 1) {
            throw new PizzaException('removeExtraIngredient method accepts only one parameter');
        }

        if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
            throw new PizzaException('Invalid ingredient');
        }

        const index = this.extraIngredients.indexOf(ingredient);
        if (index === -1) {
            throw new PizzaException('This ingredient has not been added');
        }

        this.extraIngredients.splice(index, 1);
    }

    /**
     * Gets the size of the pizza.
     * @returns {string} - Size of the pizza.
     */
    getSize() {
        return this.size;
    }

    /**
     * Gets the total price of the pizza.
     * @returns {number} - Total price of the pizza.
     */
    getPrice() {
        let basePrice = 0;

        switch (this.size) {
            case Pizza.SIZE_S:
                basePrice += 25;
                break;
            case Pizza.SIZE_M:
                basePrice += 35;
                break;
            case Pizza.SIZE_L:
                basePrice += 50;
                break;
        }

        switch (this.type) {
            case Pizza.TYPE_VEGGIE:
                basePrice += 25;
                break;
            case Pizza.TYPE_MARGHERITA:
                basePrice += 30;
                break;
            case Pizza.TYPE_PEPPERONI:
                basePrice += 35;
                break;
        }

        for (const ingredient of this.extraIngredients) {
            switch (ingredient) {
                case Pizza.EXTRA_TOMATOES:
                    basePrice += 3;
                    break;
                case Pizza.EXTRA_CHEESE:
                    basePrice += 4;
                    break;
                case Pizza.EXTRA_MEAT:
                    basePrice += 5;
                    break;
            }
        }

        return basePrice;
    }

    /**
     * Gets information about the pizza.
     * @returns {Object} - Information about the pizza.
     */
    getPizzaInfo() {
        return {
            size: this.size,
            type: this.type,
            extraIngredients: this.extraIngredients,
            price: this.getPrice() + 'Rs.'
        };
    }
}

// Examples of usage
try {
    // Small veggie pizza
    let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
    // Add extra meat
    pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
    // Check price
    console.log(`Price: ${pizza.getPrice()} Rs`); //=> Price: 109 Rs
    // Add extra cheese and extra tomatoes
    pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
    pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
    // Check price with extra ingredients
    console.log(`Price with extra ingredients: ${pizza.getPrice()} Rs`); // Price: 121 Rs
    // Check pizza size
    console.log(`Is pizza large: ${pizza.getSize() === 'L'}`); //=> Is pizza large: false
    // Remove extra cheese
    pizza.removeExtraIngredient(Pizza.EXTRA_CHEESE);
    console.log(`Extra ingredients: ${pizza.extraIngredients.length}`); //=> Extra ingredients: 2
    console.log(pizza.getPizzaInfo()); //=> Size: SMALL, type: VEGGIE; extra ingredients: MEAT,TOMATOES; price: 114Rs.

    // Examples of errors
    // let pizza = new Pizza(Pizza.SIZE_S); // => Required two arguments, given: 1

    // let pizza = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S); // => Invalid type

    // let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
    // pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
    // pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Duplicate ingredient

    // let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
    // pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Invalid ingredient
} catch (error) {
    if (error instanceof PizzaException) {
        console.error('PizzaException:', error.log);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}
