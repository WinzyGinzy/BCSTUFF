# Test Cases

- **getCarAccessories(id)**
  Returns an array of car accessories. If none found, returns an empty array.

  - Parameters: id of the car
  - Return: returns accessories as an array

## Test 1: get an array of car accessories with the parameter getCarAccessories(1)

**test data**

```js
getCarAccessories(1);
```

**returns**

```json
["radar", "coffee warmer", "hook"]
```

## Test 2: get an array of car accessories with the parameter getCarAccessories(2)

**test data**

```js
getCarAccessories(2);
```

**returns**

```json
["clock", "speedometer"]
```

## Test 3: get an empty array of car accessories with the parameter getCarAccessories(3)

**test data**

```js
getCarAccessories(3);
```

**returns**

```json
[]
```

## Test 4: throw an exception `parameter missing` when no id is provided

```js
getCarAccessories();
```

**returns**

Throws an exception `parameter missing`

## Test 5: return an exception `no car with given id is found` with the parameter getCarAccessories(55)

```js
getCarAccessories(55);
```

**returns**

Throws an exception `no car with given id is found`
