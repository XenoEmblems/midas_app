USER FORM

<!--<p>Address: <input type="text" id="user-address-form" placeholder="Enter Address Line One..."></p>
<p>City: <input type="text" id="user-city-form" placeholder="City..."></p>
<p>State: <input type="text" id="user-state-form" placeholder="State..."></p>
<p>Zip: <input type="text" id="user-zip-form" placeholder="Zip Code..."></p></div>
<p>Phone Number: <input type="text" id="user-phone-number-form" placeholder="Can I have your number?..."></p>
<p>Email: <input type="text" id="user-email-form" placeholder="Email address..."></p>-->


USER EDIT

<template id="user-edit-template">
    <div class="form">
      <span>Name: <input type="text" id="user-name" value="{{name}}"></span>
      <span>Address: <input type="text" id="user-address" value="{{address}}"></span>
      <span>City: <input type="text" id="user-city" value="{{city}}"></span>
      <span>State: <input type="text" id="user-state" value="{{state}}"></span>
      <span>Zip: <input type="text" id="user-zip" value="{{zip}}"></span>
      <span>Phone Number: <input type="text" id="user-phone-number" value="{{phoneNumber}}"></span>
      <span>Email: <input type="text" id="user-email" value="{{email}}"><</span><br>
      <button class="edit-user-submit">Update This Info</button>
    </div>
 </template>
