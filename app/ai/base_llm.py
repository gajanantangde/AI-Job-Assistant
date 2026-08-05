from abc import ABC, abstractmethod

class BaseLLM(ABC):
    @abstractmethod
    def parse_resume(self, text:str):
        pass

    @abstractmethod
    def ats_analysis(self, resume: str, job_description:str):
        pass

    @abstractmethod
    def generate_referral_message(self, name:str, company: str, role: str):
        pass