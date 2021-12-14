# Test Cases

- **getAllIdsByManufacturer(value)**
  Returns all ids of the cars matching the value of manufacturer

  - Parameters: value of the property to be searched
  - Return: Returns an array of car id where the cars manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

## Test 1: get data from jsonData with parameter 'WBM'

**test data**

```js
getAllIdsByManufacturer("WBM");
```

**returns**

```json
[1]
```

## Test 2: get data from jsonData with parameter 'Baas'

**test data**

```js
getAllIdsByManufacturer("Baas");
```

**returns**

```json
[2]
```

## Test 3: get data from jsonData with parameter 'FauV'

**test data**

```js
getAllIdsByManufacturer("FauV");
```

**returns**

```json
[3]
```

## Test 4: get an empty array with the parameter 'Something Else'

**test data**

```js
getAllIdsByManufacturer("Something Else");
```

**returns**

```json
[]
```

## Test 5: get an empty array when the parameter is missing

**test data**

```js
getAllIdsByManufacturer();
```

**returns**

```json
[]
```

## Test 6: get an array of cars from the new test data with few cars of the same parameter 'Baas'

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
		"manufacturer": "Baas",
		"type": "solo",
		"accessories": [],
		"price": 15000,
		"extras": []
	},
	{
		"id": 5,
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

```js
getAllIdsByManufacturer("Baas");
```

**returns**

```json
[2, 4, 5]
```
