'use strict';

//array of shopping list items.
//each one is an object with a name and a checked property.
//we're pre-adding items to the shopping list here.

const STORE = [
        {name: "apples", checked: false},
        {name: "oranges", checked: false},
        {name: "milk", checked: true},
        {name: "bread", checked: false}
];

//constants that point to classes, ids, and other attributes that our code will manipulate the DOM.
//by declaring them all here, we only need to change in one place.

const NEW_ITEM_FORM_ID = "#js-shopping-list-form";
const NEW_ITEM_FORM_INPUT_CLASS = ".js-shopping-list-entry";
const SHOPPING_LIST_ELEMENT_CLASS = ".js-shopping-list";
const ITEM_CHECKED_TARGET_IDENTIFIER = "js-shopping-item";
const ITEM_CHECKED_BUTTON_IDENTIFIER = "js-item-toggle";
const ITEM_CHECKED_CLASS_NAME = "shopping-item__checked";
const ITEM_INDEX_ATTRIBUTE = "data-item-index";
const ITEM_INDEX_ELEMENT_IDENTIFIER = "js-item-index-element";

//used to point to element that users click
//to delete item from shopping list
const ITEM_DELETE_BUTTON_IDENTIFIER = "js-item-delete";


//generates HTML string representing a shopping list item.
//item - the object representing the list item
//itemIndex - the index of the item from the shopping list array (STORE)
function generateItemElement(item, itemIndex, template) {
    //ES6 template string
    return `
        <li class="${ITEM_INDEX_ELEMENT_IDENTIFIER}" ${ITEM_INDEX_ATTRIBUTE}="${itemIndex}">
        <span class="shopping-item ${ITEM_CHECKED_TARGET_IDENTIFIER} ${item.checked ? ITEM_CHECKED_CLASS_NAME : ''}">${item.name}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle ${ITEM_CHECKED_BUTTON_IDENTIFIER}">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete js-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
        </li>
    `;
}

//generate all the <li>s that will get inserted into the shopping list <ul>.
//shoppingList arg - the array representing the data in the shopping list.
function generateShoppingItemsString(shoppingList) {
        console.log("Generating shopping list element");

        //items - an array of strings representing individual list items
        //use array.map to loop through shoppingList
        const items = shoppingList.map(
            (item, index) => generateItemElement(item, index));
        return items.join(); //returns array of items . join - joins items together
}

//call generateShoppingItemsString to geerate the string representing the list items
function renderShoppingList() {
        console.log("Rendering shopping list");
        //call generateShoppingItemsString to generate the string representing the shopping list items
        const shoppingListItemsString = generateShoppingItemsString(STORE);
        //find the SHOPPING_LIST_ELEMENT_CLASS element in the DOM, which is a <ul>, and set its innerHtml
        //to the value of the shoppingListItemsString
        $(SHOPPING_LIST_ELEMENT_CLASS).html(shoppingListItemsString);
}

function addItemToShoppingList(itemName) {
    console.log(`Adding "${itemName}" to shopping list`);
    //add new item to the shopping list by pushing a new object onto the STORE array.
    //set default as unchecked.
    //This function has intentional side effects - mutates the global STORE variable
    STORE.push({name: itemName, checked: false});
}

//name says it all - responsible for deleting a list item
function deleteListItem(itemIndex) {
    console.log(`Deleting item at index "${itemIndex}" from shopping list`);
    //as with `addItemToShoppingList`, this function also has side effect of mutating the global STORE value.
    //we call .splice at the index of the list item we want to remove, with a length of 1
    //this removes the desired item and shifts all the elements to the right of itemIndex (if any) over
    //one place to the left, so we don't have an empty space in our list.
    STORE.splice(itemIndex, 1);
}

//this function is responsible for toggling the checked attribute on an item.
//if checked was true, it becomes false and vice-versa.
function toggleCheckedForListItem(itemIndex) {
    console.log(`Toggling checked property for item at index ${itemIndex}`);
    STORE[itemIndex].checked = !STORE[itemIndex].checked;
}

//watches new item submissions. Gets the name of the new item element, zeroes out the form input value,
//adds the new item to the list and re-renders the shopping list in the DOM
function handleNewItemSubmit() {
    $(NEW_ITEM_FORM_ID).submit(function(event) {
        //stop default form submission behavior
        event.preventDefault();
        //get the item name from the text input in the submitted form 
        const newItemElement = $(NEW_ITEM_FORM_INPUT_CLASS);
        //remove item from the input so users can add new items
        const newItemName = newItemElement.val();
        newItemElement.val("");
        //update the shopping list with the new item
        addItemToShoppingList(newItemName);
        //render updated shopping list
        renderShoppingList();
    });
}

//retrieves the array index of a shopping list item in the DOM
//we're storing this value in the 'data-item-index' attribute on each list item element in the DOM
function getItemIndexFromElement(item) {
    const itemIndexString = $(item).closest(`.${ITEM_INDEX_ELEMENT_IDENTIFIER}`)
                            .attr(ITEM_INDEX_ATTRIBUTE);
                            //value of data-item-index will be a string so we need to parseInt
    return parseInt(itemIndexString, 10);
}

//notices when users click 'checked' button for an item. Toggles the checked styling for that item.
function handleItemCheckClicked() {
        //use event delegation here - list items aren't originally in the DOM on page load
        $(SHOPPING_LIST_ELEMENT_CLASS).on("click", `.${ITEM_CHECKED_BUTTON_IDENTIFIER}`, event => {
            //call the getItemIndexFromElement just above on the target of the current, clicked element to get the index
            //of the clicked item in STORE
            const itemIndex = getItemIndexFromElement(event.currentTarget);
            //toggle the clicked item's checked attribute
            toggleCheckedForListItem(itemIndex);
            //render the updated shopping list
            renderShoppingList();
        });
}

//this notices when users click the Delete button for an item.
//then removes the item from the list and re-renders the updated list.
function handleDeleteItemClicked() {
    //use event delegation

    $(SHOPPING_LIST_ELEMENT_CLASS).on("click", `.${ITEM_DELETE_BUTTON_IDENTIFIER}`, event => {
        //get index of item in STORE
        const itemIndex = getItemIndexFromElement(event.currentTarget);
        //delete item
        deleteListItem(itemIndex);
        //render updated shopping list
        renderShoppingList();
    });
}

//callback when the page loads
//initially renders the shopping list and activates our individual functions that handle
//new item submissions, user clicks on the check and delete buttons for individual items
function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
}

//when the page loads, call this
$(handleShoppingList);