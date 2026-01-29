document.addEventListener("DOMContentLoaded", () => {
    let totalAmount = 0;

    const buttons = document.getElementsByClassName("addcart");
    const cartTableBody = document.getElementById("cart-items");
    const totalPriceSpan = document.getElementById("total-price");
    const checkoutTotal = document.getElementById("checkout-total");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            const card = this.parentElement;
            const name = card.getElementsByClassName("product-name")[0].innerText;
            const price = parseFloat(card.getElementsByClassName("product-price")[0].innerText);
            const quantity = parseInt(card.getElementsByClassName("quantity")[0].value);
            const subtotal = price * quantity;

            // Append row to cart table
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${name}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${subtotal}</td>
            `;
            cartTableBody.appendChild(row);

            // Update total
            totalAmount += subtotal;
            totalPriceSpan.textContent = totalAmount;
            checkoutTotal.value = totalAmount;

            alert(`${name} added! Quantity: ${quantity}, Subtotal: ETB ${subtotal}`);
        });
    }

    // Place order button
    document.getElementById("place-order").addEventListener("click", function() {
        alert("Order placed successfully!\nTotal: ETB " + totalAmount);
    });
});




// --- IGNORE ---
let sub = document.getElementsByClassName("submit-btn");

sub.addEventListener("click", () => {

    const form = document.querySelector(".contact-form");

    // Your Telegram Bot Token + Chat ID
    const BOT_TOKEN = "8064414899:AAHLtSeEtINH3ZBaNubDC_FCsqbarEpc5CI";
    const CHAT_ID =  "6048439667";
    const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent page refresh

        const data = new FormData(form);

        // Build the Telegram message
        const message = `
📩 *NEW CONTACT FORM MESSAGE*  
------------------------------
👤 *Full Name:* ${data.get("name")}
📧 *Email:* ${data.get("email")}
📞 *Phone:* ${data.get("phone") || "Not provided"}
📝 *Subject:* ${data.get("subject")}
💬 *Message:* ${data.get("message")}
📦 *Product Interest:* ${data.get("product") || "Not selected"}
------------------------------
        `;

        try {
            await fetch(TELEGRAM_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: "Markdown"
                })
            });

            alert("✅ Your message has been sent! We will get back to you soon.");
            form.reset();

        } catch (error) {
            console.error("Telegram Error:", error);
            alert("❌ Failed to send message. Please try again.");
        }
    });

});


console.log("Main.js loaded successfully.");
