FROM python:3.10-slim

WORKDIR /app


RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc python3-dev && \
    rm -rf /var/lib/apt/lists/*


COPY requirements.lock .
RUN pip install --no-cache-dir -r requirements.lock


COPY . .


CMD ["python", "spaceship/app.py"]