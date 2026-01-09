# Devlog: Building "The Bard's Quill"

**Date:** January 10, 2026  
**Mood:** Chaotic Good  
**Music:** Medieval Lofi Beats  

## 1. The Idea 
I wanted to build my first browser extension for Flavortown. I looked at my emails and realized they were boring. Why say "Please find attached" when you can say "Herein lies the scroll"?

Thus, **The Bard's Quill** was born. It's a Chrome extension that translates modern text into Shakespearean English with a single click.

## 2.  The "AI Co-Pilot" (Honesty Time)
I went into this project knowing **zero** JavaScript and very little CSS.

I used AI (Gemini) as my "Co-Pilot" to help me write the code. I asked it to explain how browser extensions work, and it taught me about the file structure. I didn't just copy-paste blindly—I read the code to understand how the "Find and Replace" logic actually works.

Using AI turned this from an impossible task into a fun learning session. I now understand how `manifest.json` acts as the ID card for the extension!

## 3. The Tech Stack 
* **Manifest V3:** To tell the browser "I am an extension."
* **JavaScript:** For the translation logic.
* **CSS:** To make the button look like an ancient leather scroll.

## 4. The "Aha!" Moment (and the Bug) 
The hardest part was the button interaction.

At first, every time I clicked my "Rune" button, the text box would lose focus. The browser thought I was done typing! My code would yell at me: *"Thou must click inside a text box first!"* even though I just was.

**The Fix:**
I learned that using the `click` event steals focus. I had to switch to `mousedown` and use `event.preventDefault()` to stop the button from "stealing" the cursor from the text box.

```javascript
// The magic line that saved the project
runeButton.addEventListener("mousedown", (event) => {
    event.preventDefault(); 
    // ... rest of code
});
```

## 5. What's Next? 
I might add a "Pirate Mode" or a "Gen Z Slang" mode next. But for now, I'm going to go annoy my friends with Old English texts.

---
*Built for Hack Club Flavortown 2026.*