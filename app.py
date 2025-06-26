from flask import Flask, render_template, request, jsonify
import wikipedia
import google.generativeai as genai
import os

app = Flask(__name__)

# Replace with your Gemini API key
genai.configure(api_key="shxxxxxxxxxxxxxx")
model = genai.GenerativeModel("gemini-pro")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    query = data.get("query", "").strip()

    try:
        response = model.generate_content(query)
        answer = response.text.strip()
    except Exception as e:
        print("Gemini Error:", e)
        fallback_keywords = ["who is", "what is", "tell me about", "define", "explain"]
        if any(kw in query.lower() for kw in fallback_keywords):
            try:
                answer = wikipedia.summary(query, sentences=2)
            except:
                answer = "Sorry, I couldn't find anything."
        else:
            answer = "I'm having trouble answering that right now."

    return jsonify({"response": answer})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)

