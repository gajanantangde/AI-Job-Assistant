import requests
from app.llm.base import BaseLLM

class OllamaLLM(BaseLLM):
    def __init__(
            self,
            model: str = "llama3.2",
            base_url: str = "http://localhost11434"
    ):
        self.model = model
        self.base_url = base_url

    def generate(self, prompt:str)-> str:
        url = f"{self.base_url}/api/generate"

        payload = {
            "model": self.model,
            "prompt": prompt,
            "stream": False
        }

        response = requests.post(
            url,
            json=payload
        )

        response.raise_for_status()

        return response.json()["response"]
    