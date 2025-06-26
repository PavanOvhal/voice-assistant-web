# 🔊 Voice Assistant Web App

A simple yet powerful voice assistant web app built with Flask, Google Gemini API (for intelligent responses), and Wikipedia fallback. Users can interact via voice or text in a sleek dark-themed chat UI.

---

## 🧠 Features

- 🎤 Voice input via microphone
- 💬 Text input with Enter key support
- 🤖 AI-powered responses via Gemini API
- 📚 Wikipedia fallback if Gemini fails
- 🌓 Dark-themed modern UI
- 📱 Mobile & desktop responsive
- 🔊 Speech output with assistant's voice

---

## 🛠️ Technologies Used

- Python (Flask)
- HTML, CSS, JavaScript
- Google Generative AI (Gemini)
- Wikipedia API
- Web Speech API

---

## 🚀 Live Demo

Hosted on Render [Pavan-Voice-Assistant](https://voice-assistant-djpx.onrender.com)

---

## 🧪 Local Setup

1. **Clone the repo**
2. 
   git clone https://github.com/PavanOvhal/voice-assistant-web.git
   cd voice-assistant-web
   
3. **Create a virtual environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate     # On Windows
   source venv/bin/activate  # On Mac/Linux
   ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Add your Gemini API key**

   Edit `app.py`:
   ```python
   genai.configure(api_key="your-gemini-api-key")
   ```

6. **Run the app**
   ```bash
   python app.py
   ```

7. Open `http://127.0.0.1:5000` in your browser


## 🙋‍♂️ Developed By

**Pavan Ovhal**  
[GitHub](https://github.com/PavanOvhal)

