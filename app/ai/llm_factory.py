from app.config.config import LLM_PROVIDER

from app.ai.ollama_service import OllamaLLM
from app.ai.groq_service import GroqLLM
from app.ai.gemini_service import GeminiLLM


def get_llm():

    if LLM_PROVIDER == "ollama":
        return OllamaLLM()

    elif LLM_PROVIDER == "groq":
        return GroqLLM()

    elif LLM_PROVIDER == "gemini":
        return GeminiLLM()

    else:
        raise ValueError(f"Unsupported provider: {LLM_PROVIDER}")