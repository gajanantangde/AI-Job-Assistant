from app.generator.resume_generator import generate_resume

resume_data = {
    "full_name": "Gajanan Tangde",
    "email": "tangdegajanan74@gmail.com",
    "phone": "+91-7028274620",
    "summary": "Aspiring Data Analyst with strong Python, SQL and Power BI skills.",
    "skills": "Python, SQL, Power BI, Pandas, NumPy",
    "projects": """
1. IPL Data Analysis
2. Zomato Restaurant Analysis
3. Sales Dashboard
"""
}

output = generate_resume(
    resume_data,
    "generated_resumes/Gajanan_Resume.docx"
)

print(output)