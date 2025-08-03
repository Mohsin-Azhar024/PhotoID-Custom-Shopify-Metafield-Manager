document.addEventListener('DOMContentLoaded', function () {
    // var customCheckboxSection = document.getElementById('custom-checkbox-section');
    var cartCtas = document.querySelector('.cart__ctas');
    var cartCheckout = document.querySelector('[name="checkout"]');

    // Function to add custom checkbox section
    function addCustomCheckboxSection() {
       
        var customCheckboxSection = document.createElement('div');
        customCheckboxSection.id = 'custom-checkbox-section';
        customCheckboxSection.innerHTML = `
            <div class="main">
                <div>
                    <input type="checkbox" id="effectiveAppsAgreeCB">
                </div>
                <div class="option">
                    <label id="checkbox_label">${my_var_js}</label>
                </div>
            </div>
        `;
        // Check if customCheckboxSection exists
        if (customCheckboxSection) {
            // Check if cartCtas exists
            if (cartCtas) {
                // Insert customCheckboxSection before cartCtas
                var parentElement = cartCtas.parentNode;
                console.log('Parent Element',parentElement)
                console.log('customCheckboxSection',customCheckboxSection)
                console.log('cartCtas',cartCtas)
                parentElement.insertBefore(customCheckboxSection, cartCtas);

                console.log('Custom content added to cart drawer successfully.');
            } else if (cartCheckout) {
                var parentElementCheckout = cartCheckout.parentNode;
                parentElementCheckout.insertBefore(customCheckboxSection, cartCheckout);
                console.log('Custom content added to cart popup successfully.');
            } else {
                console.error('Error: cartCheckout or cartCtas not found.');
            }
        } else {
            console.error('Error: customCheckboxSection not found.');
        }
    }
    console.log(cartCtas);
    // Call the function to add custom checkbox section initially
    addCustomCheckboxSection();

    // Event listener for clicking "Add to Cart" button
    // document.addEventListener('click', function (event) {
    //     if (event.target.getAttribute('name') === 'add' ||
    //         (event.target.tagName === 'BUTTON' && event.target.textContent.trim().toLowerCase() === 'add to cart')) {
    //         // Call the function to add custom checkbox section dynamically
    //         console.log(cartCtas);
    //         console.log(cartCheckout);
    //         // var addToCartForm = document.querySelector('[data-type="add-to-cart-form"]');
    //         // if (addToCartForm) {
    //         //     addToCartForm.addEventListener('submit', handleFormSubmit);
    //         // } else {
    //         //     console.error('Form with ID "add-to-cart-form" not found');
    //         // }
    //         addCustomCheckboxSection();
    //     }
    // });

    // function handleFormSubmit(event) {
    //     event.preventDefault();
       
    //             addCustomCheckboxSection(); // Call the function after form submission
    // }
    

    // Event listener for checkout button
    document.body.addEventListener('click', function (event) {
        if (event.target.getAttribute('name') === 'checkout' ||
            (event.target.tagName === 'BUTTON' && event.target.textContent.trim().toLowerCase() === 'checkout')) {
            var checkbox = document.getElementById('effectiveAppsAgreeCB');
            if (!checkbox.checked) {
                event.preventDefault(); // Prevent default checkout action
    
                var popup = document.createElement('div');
                popup.classList.add('custom-popup');
                popup.innerHTML = `
                    <p>${my_var1_js}</p>
                    <label id="checkboxLabel"><input type="checkbox" id="popupCheckbox">${my_var_js}</label>
                    <div id="popupButton">
                        <button id="cancelButton">Cancel</button>
                        <button id="saveButton">Save</button>
                    </div>
                `;
                popup.style.display = 'none';
    
                 // Close the popup when the cancel button is clicked
    
                document.body.insertBefore(popup, document.body.firstChild);
                popup.style.display = 'block';
    
                // Add event listener for the saveButton
                var saveButton = document.getElementById('saveButton');
                if (saveButton) {
                    saveButton.addEventListener('click', function () {
                        var popupCheckbox = document.getElementById('popupCheckbox');
                        console.log(popupCheckbox);
                        if (popupCheckbox.checked) {
                                // Simulate successful saving and close the popup
                                popup.remove();
                                var cartCheckout = document.querySelector('[name="checkout"]');
                                if (cartCheckout) {
                                    checkbox.checked = true; // Check the checkbox
                                    cartCheckout.click();
                                    console.log('Checkout button clicked successfully!');
                                } else {
                                    console.log('Checkout button not found. Consider alternative logic.');
                                }
                        } else {
                            alert('Please agree to the terms and conditions before proceeding.');
                        }
                    });
                } else {
                    console.error('Save button not found.');
                }

                var cancelButton = document.getElementById('cancelButton');
                if (cancelButton) {
                    cancelButton.addEventListener('click', function () {
                        popup.remove();
                    });
                }else {
                    console.error('Cancel button not found.');
                }
            }
        }
    });
    
    
    document.querySelector('form').addEventListener('submit', function (event) {
        if (event.submitter.getAttribute('name') === 'checkout') {
            var checkbox = document.getElementById('effectiveAppsAgreeCB');
            if (!checkbox.checked) {
                event.preventDefault(); // Prevent default form submission
    
                var popup = document.createElement('div');
                popup.classList.add('custom-popup');
                popup.innerHTML = `
                    <p>${my_var1_js}</p>
                    <label id="checkboxLabel"><input type="checkbox" id="popupCheckbox">${my_var_js}</label>
                    <div id="popupButton">
                        <button id="cancelButton">Cancel</button>
                        <button id="saveButton">Save</button>
                    </div>
                `;
                popup.style.display = 'none';
    
                document.body.insertBefore(popup, document.body.firstChild);
                popup.style.display = 'block';
    
                // Add event listener for the saveButton
                var saveButton = document.getElementById('saveButton');
                if (saveButton) {
                    saveButton.addEventListener('click', function () {
                        var popupCheckbox = document.getElementById('popupCheckbox');
                        if (popupCheckbox.checked) {
                            // Simulate successful saving and close the popup
                            popup.remove();
                            // event.target.submit();
                            // console.log('Checkout button clicked successfully!');

                            var cartCheckout = document.querySelector('[name="checkout"]');
                            if (cartCheckout) {
                                checkbox.checked = true; // Check the checkbox
                                cartCheckout.click();
                                console.log('Checkout button clicked successfully!');
                            } else {
                                console.log('Checkout button not found. Consider alternative logic.');
                            }
                        } else {
                            alert('Please agree to the terms and conditions before proceeding.');
                        }
                    });
                } else {
                    console.error('Save button not found.');
                }

                var cancelButton = document.getElementById('cancelButton');
                if (cancelButton) {
                    cancelButton.addEventListener('click', function () {
                        popup.remove();
                    });
                }else {
                    console.error('Cancel button not found.');
                }
            }
        }
    });
    
});
