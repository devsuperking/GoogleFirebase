# Google Firebase SDK

## What is Google Firebase SDK?
Google Firebase SDK is a JavaScript library designed to simplify the implementation of Google Firebase SDK into your JavaScript project via CDN. Write code up to 10 times faster compared to the original library!

# Add to Your Project
This section shows how to add the module to your project.
## Importing Scripts
To import the library, just add the following code to the `<head>` section of your page:
```html
<!-- Firebase SDK by Microplay Interactive -->
<script type="text/javascript" src="https://microplay.ml/firebase/js/1.42/sdk/Firebase-min.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore-compat.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-database-compat.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-functions-compat.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/firebasejs/9.14.0/firebase-auth-compat.js"></script>
```
## Database Initialization
In any script on your site, set up the configuration. You can find it in the [Firebase Developer Console.](https://console.firebase.google.com/)

## Change Types: onChange()
`child_added` - Retrieve lists of items or listen for new items added to a list. This event is triggered once for each existing child item, then again each time a new child item is added to the specified path. The listener receives a snapshot containing the data of the new child.

`child_changed` - Listen for changes in items on a list. This event is triggered every time a child node is modified, including any changes to the descendants of the child node. The snapshot passed to the event handler contains the updated data of the child item.

`child_removed` - Listen for items removed from a list. This event is triggered after a direct child item is removed. The snapshot passed to the callback block contains the data of the removed child item.

`child_moved` - Listen for changes in the order of items in a sorted list. This event always follows the event that caused the item to change position (based on the current ordering method). The `child_moved` event is different from `child_changed`.
