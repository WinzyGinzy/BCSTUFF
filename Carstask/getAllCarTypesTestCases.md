# Test Cases

- **getAllCarTypes()**
  Returns an array of different car types.

  - Parameters: none
  - Return: Returns an array of different car types. If no types are found, returns an empty array. The type is added to the result array only once.

## Test 1: get all types - 'XGT', 'Coupe', 'solo'

**test data**

```js
getAllCarTypes();
```

**returns**

```json
["XGT", "Coupe", "solo"]
```

## Test 2: get an empty array if no types are found

**test data**

```json
[
	{
		"id": 1,
		"manufacturer": "WBM",
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
getAllCarTypes();
```

**returns**

```json
[]
```

## Test 3: check that the types are added into the result only once

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
		"manufacturer": "FauV",
		"type": "Coupe",
		"accessories": [],
		"price": 15000,
		"extras": []
	},
	{
		"id": 5,
		"manufacturer": "FauV",
		"type": "XGT",
		"accessories": [],
		"price": 15000,
		"extras": []
	},
	{
		"id": 6,
		"manufacturer": "FauV",
		"accessories": [],
		"price": 15000,
		"extras": []
	}
]
```

```js
getAllCarTypes();
```

**returns**

```json
["XGT", "Coupe", "solo"]
```
