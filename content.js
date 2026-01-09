// 1. THE DICTIONARY 
const dictionary = {
    "hello": "hark",
    "hi": "greetings, traveler",
    "email": "scroll",
    "meeting": "gathering of the court",
    "boss": "my liege",
    "please": "I beseech thee",
    "thanks": "my deepest gratitude",
    "thank you": "I offer thee my thanks",
    "submit": "surrender",
    "send": "dispatch",
    "deadline": "the final hour",
    "sorry": "I pray for forgiveness",
    "friend": "companion",
    "team": "fellowship",
    "work": "toil",
    "cool": "most wondrous",
    "text": "inscription",
    "lol": "I chuckle heartily",
    "bruh": "brother mine",
    "no cap": "upon my honor",
    "cringe": "most foul",
    "regards":"(Be thou healthy"
};

// 2. THE TRANSLATION LOGIC 
function shakespeareify(text) {
    let newText = text;
    
    // Loop through every word in our dictionary
    for (const [key, value] of Object.entries(dictionary)) {
        // Ensuring we match the whole work
        const regex = new RegExp(`\\b${key}\\b`, "gi"); 
        newText = newText.replace(regex, value);
    }
    
    // Adding a dramatic signature at the end
    return newText + "\n\n— Written by the Quill of Destiny";
}

// 3. CREATING BUTTON ON THE SCREEN
const runeButton = document.createElement("button");
runeButton.innerText = "📜"; // The scroll icon
runeButton.id = "bards-quill-btn"; // MUST match the ID in styles.css
document.body.appendChild(runeButton);

// 4. LISTEN FOR CLICKS
runeButton.addEventListener("mousedown", (event) => {
    // BUG FIX(Used AI can't figure out on my own):
    event.preventDefault(); // Stops the button from stealing focus from the text box!
    
    const activeElement = document.activeElement;

    console.log("Active Element is:", activeElement.tagName); // This helps us debug if needed

    // Checking if it's a text box
    if (activeElement.tagName === "TEXTAREA" || activeElement.tagName === "INPUT") {
        activeElement.value = shakespeareify(activeElement.value);
        
        // Trigger a fake "input" event so the website knows the text changed
        activeElement.dispatchEvent(new Event('input', { bubbles: true }));
    } 
    // Check if it's a fancy text editor (like Gmail or Notion)
    else if (activeElement.isContentEditable) {
        activeElement.innerText = shakespeareify(activeElement.innerText);
    } 
    else {
        alert("Thou must click inside a text box first!");
    }
});