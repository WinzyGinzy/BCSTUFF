# Test Cases

- **getTotalPrice(id)**
  Returns the total price of the car including the total price of the extras

  - Parameters: id of the car
  - Return: The price of the car including the total price of the extras
  - if no car with the given number is found throws an exeption `nothing found with given id`

## Test 1: get the price of 252 500 with the parameter getTotalPrice(1)

**test data**

```js
getTotalPrice(1);
```

**returns**

Returns the price of 252500, because 250000+1500+1000=252500

## Test 2: get the price of 35 210 with the parameter getTotalPrice(2)

**test data**

```js
getTotalPrice(2);
```

**returns**

Returns the price of 35210, because 35000+10+200=35210

## Test 3: get the price of 15 000 with the parameter getTotalPrice(3)

**test data**

```js
getTotalPrice(3);
```

**returns**

Returns the price of 15000, because the price of the car is 15000 and there are no extras

## Test 4: get an exception `nothing found with given id` with the parameter getTotalPrice(55)

**test data**

```js
getTotalPrice(55);
```

**returns**

Thrown an exception `nothing found with given id`

## Test 5: get an exception `parameter missing` when parameter is missing - getTotalPrice()

**test data**

```js
getTotalPrice();
```

**returns**

Throws an error `parameter missing`
