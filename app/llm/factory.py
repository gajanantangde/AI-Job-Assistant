import os

from dotenv import load_dotenv

from app.llm.ollama import OllamaLLM

load_dotenv()


def get_llm():

    provider = os.getenv(
        "LLM_PROVIDER",
        "ollama"
    ).lower()

    if provider == "ollama":
        return OllamaLLM()

    raise ValueError(
        f"Unsupported LLM Provider: {provider}"
    )