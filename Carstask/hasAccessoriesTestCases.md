# Test Cases

- **hasAccessories(id)**
- Parameters: id of the car
- Return: returns true if the car has accessories else returns false. If parameter id is missing false is returned

## Test 1: get `true` with the parameter hasAccessories(1)

**test data**

```js
hasAccessories(1);
```

**returns**

Returns `true`, because the car with id = 1 has accessories

## Test 2: get `true` with the parameter hasAccessories(2)

**test data**

```js
hasAccessories(2);
```

**returns**

Returns `true`, because the car with id = 2 has accessories

## Test 3: get `false` with the parameter hasAccessories(3)

**test data**

```js
hasAccessories(3);
```

**returns**

Returns `false`, because the car with id = 3 has no accessories

## Test 4: get `false` when parameter is missing - hasAccessories()

**test data**

```js
hasAccessories();
```

**returns**

Returns `false` because parameter is missing

## Test 5: get an exception `nothing found with given id` with the parameter hasAccessories(55)

**test data**

```js
hasAccessories(55);
```

**returns**

Throws an exception `nothing found with given id`
