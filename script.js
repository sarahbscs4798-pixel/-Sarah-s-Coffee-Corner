// =====================================================
// TASK 8: DYNAMIC OPENING STATUS
// =====================================================

const openingStatus =
    document.getElementById("opening-status");

const currentHour =
    new Date().getHours();

const openingHour = 8;

const closingHour = 22;


if (currentHour >= openingHour &&
    currentHour < closingHour) {

    openingStatus.textContent =
        "● OPEN NOW";

    openingStatus.style.backgroundColor =
        "green";

    openingStatus.style.color =
        "white";

} else {

    openingStatus.textContent =
        "● CLOSED";

    openingStatus.style.backgroundColor =
        "red";

    openingStatus.style.color =
        "white";

}



// =====================================================
// TASK 3: LIGHT / DARK MODE
// =====================================================

const themeButton =
    document.getElementById("theme-btn");


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );

    }
);



// =====================================================
// TASK 2: TABLE ROW HIGHLIGHTING
// =====================================================

const menuRows =
    document.querySelectorAll(
        "#menu-table tbody tr"
    );


menuRows.forEach(function (row) {


    row.addEventListener(
        "mouseover",
        function () {

            row.style.backgroundColor =
                "#f1dcc7";

        }
    );


    row.addEventListener(
        "mouseout",
        function () {

            row.style.backgroundColor =
                "";

        }
    );


});



// =====================================================
// TASK 7: LIVE CATEGORY FILTER
// =====================================================

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(function (button) {


    button.addEventListener(
        "click",
        function () {


            const selectedCategory =
                button.getAttribute(
                    "data-category"
                );


            menuRows.forEach(
                function (row) {


                    const rowCategory =
                        row.getAttribute(
                            "data-category"
                        );


                    if (
                        selectedCategory === "all" ||
                        rowCategory === selectedCategory
                    ) {

                        row.style.display =
                            "";

                    } else {

                        row.style.display =
                            "none";

                    }


                }
            );


        }
    );


});



// =====================================================
// TASK 4: INTERACTIVE ORDER TOTAL CALCULATOR
// =====================================================

const menuItems =
    document.querySelectorAll(
        ".menu-item"
    );


const totalDisplay =
    document.getElementById("total");


function calculateOrderTotal() {


    let totalPrice = 0;


    menuItems.forEach(
        function (item) {


            if (item.checked) {

                totalPrice =
                    totalPrice +
                    parseFloat(item.value);

            }


        }
    );


    totalDisplay.textContent =
        "Total: $" +
        totalPrice.toFixed(2);

}


menuItems.forEach(
    function (item) {


        item.addEventListener(
            "change",
            calculateOrderTotal
        );


    }
);



// =====================================================
// TASK 1: FORM HANDLING & VALIDATION
// =====================================================

const feedbackForm =
    document.getElementById(
        "feedback-form"
    );


feedbackForm.addEventListener(
    "submit",
    function (e) {


        // Prevent page refresh
        e.preventDefault();


        // Read username
        const username =
            document.getElementById(
                "username"
            ).value.trim();


        // Read email
        const email =
            document.getElementById(
                "email"
            ).value.trim();


        // Get message element
        const message =
            document.getElementById(
                "form-message"
            );


        // Check both fields
        if (
            username !== "" &&
            email !== ""
        ) {


            message.textContent =
                "Thank you for visiting, " +
                username +
                "! We will contact you at " +
                email +
                ".";


            message.style.color =
                "green";


        } else {


            message.textContent =
                "Please enter both your name and email.";


            message.style.color =
                "red";

        }


    }
);



// =====================================================
// TASK 5: AGE VERIFICATION
// =====================================================

const birthYearInput =
    document.getElementById(
        "birth-year"
    );


const discountMessage =
    document.getElementById(
        "discount-message"
    );


birthYearInput.addEventListener(
    "input",
    function () {


        // Convert text into integer
        const birthYear =
            parseInt(
                birthYearInput.value
            );


        // Check invalid input
        if (isNaN(birthYear)) {


            discountMessage.textContent =
                "Please enter a valid birth year.";


            discountMessage.style.color =
                "red";


            return;

        }


        // Calculate age
        const age =
            2026 - birthYear;


        // Check unrealistic age
        if (
            age < 0 ||
            age > 120
        ) {


            discountMessage.textContent =
                "Please enter a realistic birth year.";


            discountMessage.style.color =
                "red";


        }


        // Student discount
        else if (age <= 25) {


            discountMessage.textContent =
                "You are " +
                age +
                " years old. " +
                "You qualify for the student discount.";


            discountMessage.style.color =
                "green";


        }


        // Senior discount
        else if (age >= 60) {


            discountMessage.textContent =
                "You are " +
                age +
                " years old. " +
                "You qualify for the senior discount.";


            discountMessage.style.color =
                "green";


        }


        // No discount
        else {


            discountMessage.textContent =
                "You are " +
                age +
                " years old. " +
                "No special discount applies.";


            discountMessage.style.color =
                "orange";

        }


    }
);



// =====================================================
// TASK 6: READ MORE / READ LESS
// =====================================================

const readMoreButton =
    document.getElementById(
        "read-more-btn"
    );


const extraStory =
    document.getElementById(
        "extra-story"
    );


readMoreButton.addEventListener(
    "click",
    function () {


        extraStory.classList.toggle(
            "hidden"
        );


        if (
            extraStory.classList.contains(
                "hidden"
            )
        ) {


            readMoreButton.textContent =
                "Read More";


        } else {


            readMoreButton.textContent =
                "Read Less";

        }


    }
);



// =====================================================
// TASK 9: CHARACTER COUNTER
// =====================================================

const specialNotes =
    document.getElementById(
        "special-notes"
    );


const charCount =
    document.getElementById(
        "char-count"
    );


specialNotes.addEventListener(
    "input",
    function () {


        const maximumCharacters =
            100;


        const usedCharacters =
            specialNotes.value.length;


        const remainingCharacters =
            maximumCharacters -
            usedCharacters;


        charCount.textContent =
            remainingCharacters +
            " characters remaining";


    }
);