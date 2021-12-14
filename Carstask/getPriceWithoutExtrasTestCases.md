# Test Cases

- **getPriceWithoutExtras(id)**
  Returns the price without extras

  - Parameters: id of the car
  - Return: The price of the car not including the price of the extras
  - if no car with the given number is found throws an exeption `nothing found with given id`

## Test 1: get the price of 250000 with the parameter getPriceWithoutExtras(1)

**test data**

```js
getPriceWithoutExtras(1);
```

**returns**

Returns 250000 because it is the price of the car with id = 1.

## Test 2: get the price of 35000 with the parameter getPriceWithoutExtras(2)

**test data**

```js
getPriceWithoutExtras(2);
```

**returns**

Returns 35000 because it is the price of the car with id = 2.

## Test 3: get the price of 15000 with the parameter getPriceWithoutExtras(3)

**test data**

```js
getPriceWithoutExtras(3);
```

**returns**

Returns 15000 because it is the price of the car with id = 3.

## Test 4: get an exception `nothing found with given id` with the parameter getPriceWithoutExtras(55)

**test data**

```js
getPriceWithoutExtras(55);
```

**returns**

Throws an exception `nothing found with given id`

## Test 5: get an exception `parameter missing` when parameter is missing - getPriceWithoutExtras()

**test data**

```js
getPriceWithoutExtras();
```

**returns**

Throws an error `parameter missing`
