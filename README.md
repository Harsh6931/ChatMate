# ChatMate — First Chatbot

> Your friendly, creative, and local-first chatbot — built with a single HTML file.

**Overview**
- ChatMate is a lightweight, beginner-friendly chatbot project shipped as a single-page HTML app. It’s perfect for learning how simple chat interfaces work, prototyping conversational UI, or embedding a quick demo into other projects.

**What’s included**
- **Files:** [chatbot.html](chatbot.html) — the entire chat app you can open in a browser.
- **Assets:** see [Photos/](Photos/) for images and example avatars.

**Why ChatMate is cool**
- Minimal: no build tools, node, or servers required — open [chatbot.html](chatbot.html) in any modern browser.
- Educational: everything is visible and editable for learning DOM, event handling, and UI design.
- Extensible: drop in new response logic, connect to an API, or style it to match your brand.

**Quickstart**
1. Clone or download this repo.
2. Open `chatbot.html` in your browser (double-click or use your browser’s File → Open).

If you prefer the terminal, on Windows you can run:

```powershell
start chatbot.html
```

**Usage tips**
- Type a message and press Enter or click the send button.
- Replace the demo responses inside `chatbot.html` to integrate your own logic or APIs.

**Ideas for extensions**
- Hook to a real language model API (keep keys safe!).
- Add local storage to preserve conversation history.
- Add voice input/output using the Web Speech API.
- Improve UI/UX with typing indicators, message timestamps, and message reactions.

**Developer notes**
- All UI and logic live in [chatbot.html](chatbot.html). Look for clear comment blocks labeled `/* RESPONDER */` and `/* UI */` to find where to modify behavior and appearance.
- Images and example avatars are in [Photos/](Photos/).

**Contributing**
- Small improvements, PRs, and creative forks welcome — suggest new features or themes.

**License & credits**
- This project intentionally keeps things simple for learning; use it and remix it freely. If you publish derived work, a quick attribution is appreciated.

**Roadmap (tiny)**
- v0.1: polished single-file demo (this release)
- v0.2: optional API connector + local-history toggle
- v1.0: themes, accessibility audit, small test suite

**Fun prompts & ideas**
- Try: “Explain recursion using a cooking metaphor.”
- Try: “Write a 6-line poem about coffee and code.”

**Need help?**
- Open an issue or create a PR with a short description of the change you want.

Enjoy building with ChatMate — small, local, and instantly hackable.

— The ChatMate Developer
