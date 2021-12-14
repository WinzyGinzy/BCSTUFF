# Test Cases

- **getAllCarsByType(type)**
  Returns an array of car objects of given type

  - Parameters: type of the car to be searched
  - Returns an array of car objects of given type. If no car of given type is found, returns an empty array.
  - If a parameter type is missing, an exeption **'missing parameter'** is thrown.

## Test 1: get an array of car objects of the type 'XGT'

**test data**

```js
getAllCarsByType("XGT");
```

**returns**

```json
[
	{
		"id": 1,
		"manufacturer": "WBM",
		"type": "XGT",
		"accessories": ["radar", "coffee warmer", "hook"],
		"price": 250000,
		"extras": [
			{
				"name": "winter tires",
				"price": 1500
			},
			{
				"name": "summer tires",
				"price": 1000
			}
		]
	}
]
```

## Test 2: get an array of car objects of the type 'Coupe'

**test data**

```js
getAllCarsByType("Coupe");
```

**returns**

```json
[
	{
		"id": 2,
		"manufacturer": "Baas",
		"type": "Coupe",
		"accessories": ["clock", "speedometer"],
		"price": 35000,
		"extras": [
			{
				"name": "manual",
				"price": 10
			},
			{
				"name": "warranty",
				"price": 200
			}
		]
	}
]
```

## Test 3: get an array of car objects of the type 'solo'

**test data**

```js
getAllCarsByType("solo");
```

**returns**

```json
[
	{
		"id": 3,
		"manufacturer": "FauV",
		"type": "solo",
		"accessories": [],
		"price": 15000,
		"extras": []
	}
]
```

## Test 4: get an empty array when requesting a car type, which does not exist - getAllCarsByType('Some type')

**test data**

```js
getAllCarsByType("Some type");
```

**returns**

```json
[]
```

## Test 5: get an exeption 'missing parameter' when parameter is missing - getAllCarsByType()

**test data**

```js
getAllCarsByType();
```

**returns**

Throws an exeption 'missing parameter'.

## Test 6: get an array of car objects of the type 'Coupe' when more cars of this type are added to the test data set

**test data**

```json
[
	{
		"id": 1,
		"manufacturer": "WBM",
		"type": "XGT",
		"accessories": ["radar", "coffee warmer", "hook"],
		"price": 250000,
		"extras": [
			{
				"name": "winter tires",
				"price": 1500
			},
			{
				"name": "summer tires",
				"price": 1000
			}
		]
	},
	{
		"id": 2,
		"manufacturer": "Baas",
		"type": "Coupe",
		"accessories": ["clock", "speedometer"],
		"price": 35000,
		"extras": [
			{
				"name": "manual",
				"price": 10
			},
			{
				"name": "warranty",
				"price": 200
			}
		]
	},
	{
		"id": 3,
		"manufacturer": "FauV",
		"type": "solo",
		"accessories": [],
		"price": 15000,
		"extras": []
	},
	{
		"id": 4,
		"manufacturer": "Mercedes",
		"type": "Coupe",
		"accessories": ["clock", "speedometer"],
		"price": 35000,
		"extras": [
			{
				"name": "manual",
				"price": 10
			},
			{
				"name": "warranty",
				"price": 200
			}
		]
	},
	{
		"id": 5,
		"manufacturer": "FauV",
		"type": "Coupe",
		"accessories": [],
		"price": 15000,
		"extras": []
	}
]
```

```js
getAllCarsByType("Coupe");
```

**returns**

```json
[
	{
		"id": 2,
		"manufacturer": "Baas",
		"type": "Coupe",
		"accessories": ["clock", "speedometer"],
		"price": 35000,
		"extras": [
			{
				"name": "manual",
				"price": 10
			},
			{
				"name": "warranty",
				"price": 200
			}
		]
	},
	{
		"id": 4,
		"manufacturer": "Mercedes",
		"type": "Coupe",
		"accessories": ["clock", "speedometer"],
		"price": 35000,
		"extras": [
			{
				"name": "manual",
				"price": 10
			},
			{
				"name": "warranty",
				"price": 200
			}
		]
	},
	{
		"id": 5,
		"manufacturer": "FauV",
		"type": "Coupe",
		"accessories": [],
		"price": 15000,
		"extras": []
	}
]
```
