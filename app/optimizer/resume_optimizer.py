def optimize_summary(summary, analysis):

    score = analysis.get("score", 0)

    missing_skills = analysis.get(
        "missing_skills",
        []
    )

    optimized_summary = summary

    if score < 80:

        optimized_summary += (
            "\n\n"
            "Actively improving skills in "
            + ", ".join(missing_skills)
            + " to better align with industry requirements."
        )

    return optimized_summary