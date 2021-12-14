"use strict";

module.exports = class CarStorage {
	constructor(jsonData) {
		if (!jsonData) throw new Error("data storage missing");
		this.carStorage = jsonData;
	}

	getById(id) {
		if (!id) {
			throw new Error("parameter missing");
		} else {
			for (let car of this.carStorage) {
				if (id == car.id) {
					return car;
				}
			}
			return null;
		}
	} 

	getAllIdsByManufacturer(value) {
		let carIds = [];
		if (!value) {
			return carIds;
		} else {
			for (let car of this.carStorage) {
				if (value == car.manufacturer) {
					carIds.push(car.id);
				}
			}
		}
		return carIds;
	} 

	getAllCarTypes() {
		let carTypes = [];

		for (let car of this.carStorage) {
			if (car.type) {
				if (!carTypes.includes(car.type)) {
					carTypes.push(car.type);
				}
			}
		}
		return carTypes;
	} 

	getAllCarsByType(type) {
		let allCars = [];
		if (!type) {
			throw new Error("missing parameter");
		} else {
			for (let car of this.carStorage) {
				if (type == car.type) {
					allCars.push(car);
				}
			}
		}
		return allCars;
	} 

	getCarAccessories(id) {
		if (!id) {
			throw new Error("parameter missing");
		}
		for (let car of this.carStorage) {
			if (id == car.id) {
				if (car.accessories.length > 0) {
					return car.accessories;
				} else {
					return [];
				}
			}
		}
		throw new Error("no car with given id is found");
	} 

	hasAccessories(id) {
		if (!id) {
			return false;
		}
		for (let car of this.carStorage) {
			if (id == car.id) {
				if (car.accessories.length > 0) {
					return true;
				} else {
					return false;
				}
			}
		}
		throw new Error("nothing found with given id");
	}

	getPriceWithoutExtras(id) {
		if (!id) {
			throw new Error("parameter missing");
		}
		for (let car of this.carStorage) {
			if (id == car.id) {
				return car.price;
			}
		}
		throw new Error("nothing found with given id");
	}

	getTotalPrice(id) {
		if (!id) {
			throw new Error("parameter missing");
		}
		let finalPrice;
		for (let car of this.carStorage) {
			if (id == car.id) {
				finalPrice = car.price;
				for (let extra of car.extras) {
					finalPrice = finalPrice + extra.price;
				}
				return finalPrice;
			}
		}
		throw new Error("nothing found with given id");
	} 

	getPriceOfTheExtras(id) {
		if (!id) {
			throw new Error("parameter missing");
		}
		let finalPrice = 0;
		for (let car of this.carStorage) {
			if (id == car.id) {
				if (!car.extras) {
					return finalPrice;
				}
				for (let extra of car.extras) {
					finalPrice = finalPrice + extra.price;
				}
				return finalPrice;
			}
		}
		throw new Error("nothing found with given id");
	} 
}; 
