# Test Cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the car
- Return: returns the car object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### Test 1: get data from jsonData with parameter id = 1

**testData**

```js
carStorage.getById(1);
```

**returns**

```json
{
	"id": 1,
	"manufacturer": "WBM",
	"type": "XGT",
	"accessories": ["radar", "coffee warmer", "hook"],
	"price": 250000,
	"extras": [
		{ "name": "winter tires", "price": 1500 },
		{ "name": "summer tires", "price": 1000 }
	]
}
```

### Test 2: get data from jsonData with parameter id = 2

**testData**

```js
carStorage.getById(2);
```

**returns**

```json
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
```

### Test 3: get data from jsonData with parameter id = 3

**testData**

```js
carStorage.getById(3);
```

**returns**

```json
{
	"id": 3,
	"manufacturer": "FauV",
	"type": "solo",
	"accessories": [],
	"price": 15000,
	"extras": []
}
```

### Test 4: get null with the parameter id = 55

**test data**

```js
carStorage.getById(55);
```

**returns**

Returns null because there is no match - no such car with id 55.

```js
null;
```

### Test 5: get 'parameter missing' with getById()

**test data**

```js
carStorage.getById();
```

**returns**

Returns `'parameter missing'`
