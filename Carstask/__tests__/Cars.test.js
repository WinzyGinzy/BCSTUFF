"use strict";

const CarStorage = require("../Cars");
const cars = require("../datastorage.json");

describe("Constructor", () => {
	test("Test 1: object created", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.carStorage).toEqual(cars);
	});

	test("Test 2; missing parameter throws an exception", () => {
		expect(() => new CarStorage()).toThrow("data storage missing");
	});
}); // end of constructor

describe("1 - Method getById(id). Method searches the datastorage for an object with given key. Key is unique.", () => {
	test("Test 1: get data from jsonData with parameter id = 1", () => {
		const carStorage = new CarStorage(cars);
		const result = {
			id: 1,
			manufacturer: "WBM",
			type: "XGT",
			accessories: ["radar", "coffee warmer", "hook"],
			price: 250000,
			extras: [
				{ name: "winter tires", price: 1500 },
				{ name: "summer tires", price: 1000 },
			],
		};
		expect(carStorage.getById(1)).toEqual(result);
	});

	test("Test 2: get data from jsonData with parameter id = 2", () => {
		const carStorage = new CarStorage(cars);
		const result = {
			id: 2,
			manufacturer: "Baas",
			type: "Coupe",
			accessories: ["clock", "speedometer"],
			price: 35000,
			extras: [
				{
					name: "manual",
					price: 10,
				},
				{
					name: "warranty",
					price: 200,
				},
			],
		};
		expect(carStorage.getById(2)).toEqual(result);
	});

	test("Test 3: get data from jsonData with parameter id = 3", () => {
		const carStorage = new CarStorage(cars);
		const result = {
			id: 3,
			manufacturer: "FauV",
			type: "solo",
			accessories: [],
			price: 15000,
			extras: [],
		};
		expect(carStorage.getById(3)).toEqual(result);
	});

	test("Test 4: get null with the parameter id = 55", () => {
		const carStorage = new CarStorage(cars);
		const result = null;
		expect(carStorage.getById(55)).toEqual(result);
	});

	test("Test 5: get 'parameter missing' with getById()", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getById()).toThrow("parameter missing");
	});
}); // end if getById()

describe("2 - Method getAllIdsByManufacturer(value). Returns all ids of the cars matching the value of manufacturer.", () => {
	test("Test 1: get data from jsonData with parameter 'WBM'", () => {
		const carStorage = new CarStorage(cars);
		const result = [1];
		expect(carStorage.getAllIdsByManufacturer("WBM")).toEqual(result);
	});

	test("Test 2: get data from jsonData with parameter 'Baas'", () => {
		const carStorage = new CarStorage(cars);
		const result = [2];
		expect(carStorage.getAllIdsByManufacturer("Baas")).toEqual(result);
	});

	test("Test 3: get data from jsonData with parameter 'FauV'", () => {
		const carStorage = new CarStorage(cars);
		const result = [3];
		expect(carStorage.getAllIdsByManufacturer("FauV")).toEqual(result);
	});

	test("Test 4: get an empty array with the parameter 'Something Else'", () => {
		const carStorage = new CarStorage(cars);
		const result = [];
		expect(carStorage.getAllIdsByManufacturer("Something Else")).toEqual(result);
	});

	test("Test 5: get an empty array when the parameter is missing", () => {
		const carStorage = new CarStorage(cars);
		const result = [];
		expect(carStorage.getAllIdsByManufacturer()).toEqual(result);
	});

	test("Test 6: get an array of cars from the new test data with few cars of the same parameter 'Baas'.", () => {
		const testData = [
			{
				id: 1,
				manufacturer: "WBM",
				type: "XGT",
				accessories: ["radar", "coffee warmer", "hook"],
				price: 250000,
				extras: [
					{
						name: "winter tires",
						price: 1500,
					},
					{
						name: "summer tires",
						price: 1000,
					},
				],
			},
			{
				id: 2,
				manufacturer: "Baas",
				type: "Coupe",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
			{
				id: 3,
				manufacturer: "FauV",
				type: "solo",
				accessories: [],
				price: 15000,
				extras: [],
			},
			{
				id: 4,
				manufacturer: "Baas",
				type: "solo",
				accessories: [],
				price: 15000,
				extras: [],
			},
			{
				id: 5,
				manufacturer: "Baas",
				type: "Coupe",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
		];
		const carStorage = new CarStorage(testData);
		const result = [2, 4, 5];
		expect(carStorage.getAllIdsByManufacturer("Baas")).toEqual(result);
	});
}); // end of getAllIdsByManufacturer()

describe("3 - Method getAllCarTypes(). Returns an array of different car types.", () => {
	test("Test 1: get all types - 'XGT', 'Coupe', 'solo'", () => {
		const carStorage = new CarStorage(cars);
		const result = ["XGT", "Coupe", "solo"];
		expect(carStorage.getAllCarTypes()).toEqual(result);
	});

	test("Test 2: get an empty array if no types are found", () => {
		const testData = [
			{
				id: 1,
				manufacturer: "WBM",
				accessories: ["radar", "coffee warmer", "hook"],
				price: 250000,
				extras: [
					{
						name: "winter tires",
						price: 1500,
					},
					{
						name: "summer tires",
						price: 1000,
					},
				],
			},
			{
				id: 2,
				manufacturer: "Baas",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
		];
		const carStorage = new CarStorage(testData);
		const result = [];
		expect(carStorage.getAllCarTypes()).toEqual(result);
	});

	test("Test 3: check that the types are added into the result only once", () => {
		const testData = [
			{
				id: 1,
				manufacturer: "WBM",
				type: "XGT",
				accessories: ["radar", "coffee warmer", "hook"],
				price: 250000,
				extras: [
					{
						name: "winter tires",
						price: 1500,
					},
					{
						name: "summer tires",
						price: 1000,
					},
				],
			},
			{
				id: 2,
				manufacturer: "Baas",
				type: "Coupe",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
			{
				id: 3,
				manufacturer: "FauV",
				type: "solo",
				accessories: [],
				price: 15000,
				extras: [],
			},
			{
				id: 4,
				manufacturer: "FauV",
				type: "Coupe",
				accessories: [],
				price: 15000,
				extras: [],
			},
			{
				id: 5,
				manufacturer: "FauV",
				type: "XGT",
				accessories: [],
				price: 15000,
				extras: [],
			},
			{
				id: 6,
				manufacturer: "FauV",
				accessories: [],
				price: 15000,
				extras: [],
			},
		];
		const carStorage = new CarStorage(testData);
		const result = ["XGT", "Coupe", "solo"];
		expect(carStorage.getAllCarTypes()).toEqual(result);
	});
}); // end of getAllCarTypes()

describe("4 - Method getAllCarsByType(type). Returns an array of car objects of given type.", () => {
	test("Test 1: get an array of car objects of the type 'XGT'", () => {
		const carStorage = new CarStorage(cars);
		const result = [
			{
				id: 1,
				manufacturer: "WBM",
				type: "XGT",
				accessories: ["radar", "coffee warmer", "hook"],
				price: 250000,
				extras: [
					{
						name: "winter tires",
						price: 1500,
					},
					{
						name: "summer tires",
						price: 1000,
					},
				],
			},
		];
		expect(carStorage.getAllCarsByType("XGT")).toEqual(result);
	});

	test("Test 2: get an array of car objects of the type 'Coupe'", () => {
		const carStorage = new CarStorage(cars);
		const result = [
			{
				id: 2,
				manufacturer: "Baas",
				type: "Coupe",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
		];
		expect(carStorage.getAllCarsByType("Coupe")).toEqual(result);
	});

	test("Test 3: get an array of car objects of the type 'solo'", () => {
		const carStorage = new CarStorage(cars);
		const result = [
			{
				id: 3,
				manufacturer: "FauV",
				type: "solo",
				accessories: [],
				price: 15000,
				extras: [],
			},
		];
		expect(carStorage.getAllCarsByType("solo")).toEqual(result);
	});

	test("Test 4: get an empty array when requesting a car type, which does not exist - getAllCarsByType('Some type')", () => {
		const carStorage = new CarStorage(cars);
		const result = [];
		expect(carStorage.getAllCarsByType("Some type")).toEqual(result);
	});

	test("Test 5: get an exeption 'missing parameter' when parameter is missing - getAllCarsByType()", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getAllCarsByType()).toThrow("missing parameter");
	});

	test("Test 6: get an array of car objects of the type 'Coupe' when more cars of this type are added to the test data set - getAllCarsByType('Coupe')", () => {
		const testData = [
			{
				id: 1,
				manufacturer: "WBM",
				type: "XGT",
				accessories: ["radar", "coffee warmer", "hook"],
				price: 250000,
				extras: [
					{
						name: "winter tires",
						price: 1500,
					},
					{
						name: "summer tires",
						price: 1000,
					},
				],
			},
			{
				id: 2,
				manufacturer: "Baas",
				type: "Coupe",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
			{
				id: 3,
				manufacturer: "FauV",
				type: "solo",
				accessories: [],
				price: 15000,
				extras: [],
			},
			{
				id: 4,
				manufacturer: "Mercedes",
				type: "Coupe",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
			{
				id: 5,
				manufacturer: "FauV",
				type: "Coupe",
				accessories: [],
				price: 15000,
				extras: [],
			},
		];
		const carStorage = new CarStorage(testData);
		const result = [
			{
				id: 2,
				manufacturer: "Baas",
				type: "Coupe",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
			{
				id: 4,
				manufacturer: "Mercedes",
				type: "Coupe",
				accessories: ["clock", "speedometer"],
				price: 35000,
				extras: [
					{
						name: "manual",
						price: 10,
					},
					{
						name: "warranty",
						price: 200,
					},
				],
			},
			{
				id: 5,
				manufacturer: "FauV",
				type: "Coupe",
				accessories: [],
				price: 15000,
				extras: [],
			},
		];
		expect(carStorage.getAllCarsByType("Coupe")).toEqual(result);
	});
}); // end of getAllCarsByType()

describe("5 - Method getCarAccessories(id). Returns an array of car accessories.", () => {
	test("Test 1: get array of car accessories with the parameter getCarAccessories(1)", () => {
		const carStorage = new CarStorage(cars);
		const result = ["radar", "coffee warmer", "hook"];
		expect(carStorage.getCarAccessories(1)).toEqual(result);
	});

	test("Test 2: get an array of car accessories with the parameter getCarAccessories(2)", () => {
		const carStorage = new CarStorage(cars);
		const result = ["clock", "speedometer"];
		expect(carStorage.getCarAccessories(2)).toEqual(result);
	});

	test("Test 3: get an empty array of car accessories with the parameter getCarAccessories(3)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getCarAccessories(3)).toEqual([]);
	});

	test("Test 4: throw an exception `parameter missing` when no id is provided", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getCarAccessories()).toThrow("parameter missing");
	});

	test("Test 5: return an exception `no car with given id is found` with the parameter getCarAccessories(55)", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getCarAccessories(55)).toThrow("no car with given id is found");
	});
}); // end of getCarAccessories()

describe("6 - Method getPriceWithoutExtras(id). Returns the price without extras", () => {
	test("Test 1: get the price of 250000 with the parameter getPriceWithoutExtras(1)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getPriceWithoutExtras(1)).toEqual(250000);
	});

	test("Test 2: get the price of 35000 with the parameter getPriceWithoutExtras(2)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getPriceWithoutExtras(2)).toEqual(35000);
	});

	test("Test 3: get the price of 15000 with the parameter getPriceWithoutExtras(3)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getPriceWithoutExtras(3)).toEqual(15000);
	});

	test("Test 4: get an exception `nothing found with given id` with the parameter getPriceWithoutExtras(55)", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getPriceWithoutExtras(55)).toThrow("nothing found with given id");
	});

	test("Test 5: get an exception `parameter missing` when parameter is missing - getPriceWithoutExtras()", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getPriceWithoutExtras()).toThrow("parameter missing");
	});
}); //  end of getPriceWithoutExtras()

describe("7 - Method getTotalPrice(id).  Returns the total price of the car including the total price of the extras", () => {
	test("Test 1: get the price of 252 500 with the parameter getTotalPrice(1)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getTotalPrice(1)).toEqual(252500);
	});

	test("Test 2: get the price of 35 210 with the parameter getTotalPrice(2)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getTotalPrice(2)).toEqual(35210);
	});

	test("Test 3: get the price of 15 000 with the parameter getTotalPrice(3)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getTotalPrice(3)).toEqual(15000);
	});

	test("Test 4: get an exception `nothing found with given id` with the parameter getTotalPrice(55)", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getTotalPrice(55)).toThrow("nothing found with given id");
	});

	test("Test 5: get an exception `parameter missing` when parameter is missing - getTotalPrice()", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getTotalPrice()).toThrow("parameter missing");
	});
});

describe("8 - Method getPriceOfTheExtras(id). Returns the total price of extras bunled with the car.", () => {
	test("Test 1: get the price of 2500 for the parameter getPriceOfTheExtras(1)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getPriceOfTheExtras(1)).toEqual(2500);
	});

	test("Test 2: get the price of 210 for the parameter getPriceOfTheExtras(2)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getPriceOfTheExtras(2)).toEqual(210);
	});

	test("Test 3: to get 0 with the parameter getPriceOfTheExtras(3) because there are no extras", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.getPriceOfTheExtras(3)).toEqual(0);
	});

	test("Test 4: to get an exception `nothing found with given id` with the parameter getPriceOfTheExtras(55)", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getPriceOfTheExtras(55)).toThrow("nothing found with given id");
	});

	test("Test 5: throws an exception `parameter missing` when parameter is missing - getPriceOfTheExtras()", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.getPriceOfTheExtras()).toThrow("parameter missing");
	});
}); // end of getPriceOfTheExtras()

describe("9 - Method hasAccessories(id). Returns true if the car has accessories else returns false.", () => {
	test("Test 1: get `true` with the parameter hasAccessories(1)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.hasAccessories(1)).toEqual(true);
	});

	test("Test 2: get `true` with the parameter hasAccessories(2)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.hasAccessories(2)).toEqual(true);
	});

	test("Test 3: get `false` with the parameter hasAccessories(3)", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.hasAccessories(3)).toEqual(false);
	});

	test("Test 4: get `false` when parameter is missing - hasAccessories()", () => {
		const carStorage = new CarStorage(cars);
		expect(carStorage.hasAccessories()).toEqual(false);
	});

	test("Test 5: get an exception `nothing found with given id` with the parameter hasAccessories(55)", () => {
		const carStorage = new CarStorage(cars);
		expect(() => carStorage.hasAccessories(55)).toThrow("nothing found with given id");
	});
});
