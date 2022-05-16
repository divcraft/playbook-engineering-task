# Overview

The app contains a form that allows us to add new expenses to the table, summary value (both in PLN and EUR currency) and a field with possibility to change euro rate value.

# Technologies used in the project

* typescript
* mobx (react-lite version)
* scss modules
* custom hooks
* react context

# Code desctiption

The project contains:
* 6 components (Button, Headline1, Paragraph, Table, TableHead, TableBody)
* 2 forms (ExpensesForm, EuroConversionForm)
* 2 helpers (controlCurrency, plnToEur)
* 1 provider (contextProvider)
* 2 custom hooks (useStore, useValidateform)
* 1 template (ExpensesTemplate)

# Features

The project contains a few features I'd like you to be femiliar with:

### useStore

A useContect react hook that provides mobx data accessibility extended with RootStore class as its type model.


### useValidateForm

It's a hook that allows us to validate form input data. As an argument it takes an array of validation data objects, one for each form field. The objects contain name and value of fields to validate and an array with validation rules, which can be imported from 'form/validators' absolute path. The hook returns a new array that contains error messages that should be implemented to related with them form fields. It returns also the validate() function. It's the function that should be implenented inside of function that is meant to submit or change the form (handleChange, handleSubmit, ect.). The function returns a boolean that tells us eighter the form is valid or not.

### controlCurrency

A function that is used everytime currency field form is changed. It controlls if input signs are valid with the format of currency data. It takes two arguments: currencyValue (required) and decimalNumberLimit (optionally), then returns us a boolean which tell us if input currency data is valid or not. The function should be used before mutating data in mobx store classes.

I've decided to create this function as a helper instead as a validation rule because I don't want it to display any error message when the currency is invalid. Instead of this the boolean lets us prevent coming data to be added to the store.

### plnToEur

A function that converts PLN value into EUR using euro rate data applied in mobx store.

 
Hope you enjoyed and liked reviewing this project ;)
