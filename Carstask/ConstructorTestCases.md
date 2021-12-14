# Test Cases

## Constructor

### **constructor(jsonData)**

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

### Test 1: object created

```js
new CarStorage(jsonData);
```

Test if the objects innerfield has the same value as given as parameter. Parameter jsonData is the json array from the default `datastorage.json`

### Test 2; missing parameter throws an exception

```js
new CarStorage();
```

This will throw en exception `'data storage missing'`.
