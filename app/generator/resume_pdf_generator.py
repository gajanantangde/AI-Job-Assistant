from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
)
from reportlab.lib.styles import getSampleStyleSheet


def generate_resume_pdf(
    resume_data,
    output_path
):

    styles = getSampleStyleSheet()

    document = SimpleDocTemplate(output_path)

    elements = []

    elements.append(
        Paragraph(
            f"<b>{resume_data['full_name']}</b>",
            styles["Title"],
        )
    )

    elements.append(
        Paragraph(
            f"Email: {resume_data['email']}",
            styles["Normal"],
        )
    )

    elements.append(
        Paragraph(
            f"Phone: {resume_data['phone']}",
            styles["Normal"],
        )
    )

    elements.append(
        Paragraph(
            "<b>Professional Summary</b>",
            styles["Heading2"],
        )
    )

    elements.append(
        Paragraph(
            resume_data["summary"] or "",
            styles["BodyText"],
        )
    )

    elements.append(
        Paragraph(
            "<b>Skills</b>",
            styles["Heading2"],
        )
    )

    skills = resume_data["skills"]

    if isinstance(skills, str):
        skills = [
            s.strip()
            for s in skills.split(",")
        ]

    for skill in skills:
        elements.append(
            Paragraph(
                f"• {skill}",
                styles["BodyText"],
            )
        )

    elements.append(
        Paragraph(
            "<b>Projects</b>",
            styles["Heading2"],
        )
    )

    projects = resume_data["projects"]

    if projects:

        for project in projects.split("\n"):

            if project.strip():

                elements.append(
                    Paragraph(
                        f"• {project}",
                        styles["BodyText"],
                    )
                )

    document.build(elements)

    return output_path