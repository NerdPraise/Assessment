# Implementation
The idea behind the solution is to target certain DOM Elements, get response from the api and use data gotten to populate the DOM

This was implemented in typescript; hence including a types file that declares, globally, an extended window type.

### How it works
There are four functions of note
* `getData` returns the API response data
* `updatePage` holds most of the logic as it queries DOM element, disables button based on condition and updates the table based on the response gotten from `getData`
* `nextPage` and `previousPage` are two functions attached to buttons to control what page of data is gotten from the API

### User Process
1. Upon loading the app, the `updatePage` function is called and populates the table with the first paginated response
2. Upon selecting the next button(the Prev button is disabled at the moment), the `nextPage` function is called, which increases the current page state and requests for data on the new state.
3. The Prev button gets hyrdrated and is not longer disabled.
4. Alternating between the two buttons provides data as regards the API response
  
