FROM python:3.11-slim

# Install dependencies sistem (buat numpy, scipy, lightgbm, dll)
RUN apt-get update && apt-get install -y \
    build-essential \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./app ./app
COPY .env .env

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
