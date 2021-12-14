# Test Cases

- **getPriceOfTheExtras(id)**
  Returns the total price of extras bunled with the car

  - Parameters: id of the car to be searched
  - Return: the total price of extras. If no extras is found returns 0
  - if no car with the given number is found throws an exeption `nothing found with given id`

## Test 1: get the price of 2500 for the parameter getPriceOfTheExtras(1)

**test data**

```js
getPriceOfTheExtras(1);
```

**returns**

Returns 2500 because 1500+1000=2500

## Test 2: get the price of 210 for the parameter getPriceOfTheExtras(2)

**test data**

```js
getPriceOfTheExtras(2);
```

**returns**

Returns 210 because 10+200=210

## Test 3: to get 0 with the parameter getPriceOfTheExtras(3) because there are no extras

**test data**

```js
getPriceOfTheExtras(3);
```

**returns**

Returns 0 because the car with id = 3 has no extras

## Test 4: to get an exception `nothing found with given id` with the parameter getPriceOfTheExtras(55)

**test data**

```js
getPriceOfTheExtras(55);
```

**returns**

Throws an error `nothing found with given id`

## Test 5: throws an exception `parameter missing` when parameter is missing - getPriceOfTheExtras()

**test data**

```js
getPriceOfTheExtras();
```

**returns**

Throws an exception `parameter missing`
