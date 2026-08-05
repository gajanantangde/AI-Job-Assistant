from app.models.job import Job
def get_all_jobs(db):

    return db.query(Job).all()

def create_job(db, job):

    new_job = Job(
        title=job.title,
        company=job.company,
        location=job.location,
        experience=job.experience,
        skills=job.skills,
        description=job.description,
        source=job.source,
        apply_link=job.apply_link
    )

    db.add(new_job)
    db.commit()
    db.refresh(new_job)

    return new_job

def get_job_by_id(db, job_id):

    return db.query(Job).filter(
        Job.id == job_id
    ).first()

def update_job(db, job_id, job):

    existing_job = db.query(Job).filter(
        Job.id == job_id
    ).first()

    if not existing_job:
        return None

    existing_job.title = job.title
    existing_job.company = job.company
    existing_job.location = job.location
    existing_job.experience = job.experience
    existing_job.skills = job.skills
    existing_job.description = job.description
    existing_job.source = job.source
    existing_job.apply_link = job.apply_link
    existing_job.status = job.status

    db.commit()
    db.refresh(existing_job)

    return existing_job

def delete_job(db, job_id):

    job = db.query(Job).filter(
        Job.id == job_id
    ).first()

    if not job:
        return {
            "message": "Job not found"
        }

    db.delete(job)
    db.commit()

    return {
        "message": "Job deleted successfully"
    }