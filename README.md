# logistics-tracker-shopify
Built with Node.js, MongoDB and some basic HTML and JS
<h2>How to use</h2>
Download the repo to your computer. If you do not have node or npm you will need to download them.<br /><br />
Once you have those installed, you should run "npm install" to install the dependencies.<br /><br />
Open the console on your computer, navigate to the main project directory, and run "npm run dev".<br /><br />
Open your browser and go to "http://localhost:5000/". <br /><br />I would recommend you open the console in your browser. 
Some of the HTTP methods used (the ones not supported by HTML forms) will only show immediate feedback in the console.
You can interact with each of the elements in the UI.  Some will log in the console. 
Some will take you to a separate page where the JSON from the backend/database calls is rendered.
When this happens just press the "back" button to return to the main page.
The front-end is truely terrible and a UI nightmare. But the back-end code is good. At least I think so.


<h2>What can be improved</h2>
<ul>
<li>Add a .env file to hide mongoDB access keys and other environment variables</li>
<li>Populate the "Warehouse" drop downs with the growing list of Warehouses in the database. This would require a GET request to get the current Warehouse records, and some front end JS to dynamically populate the form <option> tags.</li>
<li>The UI is as basic and plain as could be.</li>
<li>Both the Inventory and Warehouse collections would require more fields for additional information.</li>
<li>Create a list of all inventory assigned to each Warehouse record</li>
<li>Allow for filtering of the inventory and warehouse JSON responses.</li>
<li>Write front end JS to handle the JSON being returned by the HTTP requests.</li>
<li>For your ease of testing I am using "itemName" to select a particular inventory item. This is obviously impractical and would be done with item ID in a real app</li>
</ul>
