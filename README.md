# Sleep Disorder Prediction Platform

![Project Status](https://img.shields.io/badge/status-completed-brightgreen) [![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

A **machine learning-powered web application** that predicts potential sleep disorders based on lifestyle and health data. The platform integrates a **Next.js frontend** with a **FastAPI backend** to deliver real-time predictions.

---

## Dataset

* **Source**: [Sleep Health and Lifestyle Dataset](https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset) from Kaggle.
* **Description**: Contains lifestyle and health indicators influencing sleep quality, used for training and evaluating the ML model.

---

## Technologies Used

* **Python 3.11**: Backend logic and ML integration.
* **FastAPI**: High-performance backend API framework.
* **Pydantic**: Data validation & schema management.
* **Joblib**: Model serialization/loading.
* **scikit-learn / LightGBM**: ML models.
* **Next.js (React)**: Frontend framework.
* **React Three Fiber**: 3D & visual rendering.
* **shadcn/ui**: Prebuilt UI components.
* **TailwindCSS**: Utility-first CSS styling.
* **Framer Motion**: Smooth animations.
* **Zod**: Frontend schema validation.

---

## Features

### Frontend

* **User-Friendly Form UI** with responsive design.
* **Form Validation** using Zod + React Hook Form.
* **Interactive Animations** via Framer Motion.
* **3D Visuals & Effects** using React Three Fiber.
* **Dark Mode Support** with next-themes.

### Backend

* **REST API** built with FastAPI.
* **Form Validation** via Pydantic schemas.
* **Secure API** with API key authentication.
* **Environment Management** using python-dotenv.

### Machine Learning Model

* **Preprocessing** with Pandas & Scikit-learn.
* **Prediction**: Classifies sleep disorder as *None*, *Insomnia*, or *Sleep Apnea*.
* **Deployment**: Model serialized with Joblib, served via FastAPI.

---

## Demo

### Landing Page

<img src="https://github.com/user-attachments/assets/0b967e66-051b-47c7-8cc3-a5437751d9b8" width="600">
<img src="https://github.com/user-attachments/assets/43cd2f06-5710-4245-bbc1-1b12879f6d0e" width="600">

### Prediction Form

<img src="https://github.com/user-attachments/assets/4c2715e6-5633-43c3-b9f6-c0304bf70b33" width="600">

### Prediction Result

<img src="https://github.com/user-attachments/assets/e8233472-5aaa-4a7a-8688-507bdc7d1dc6" width="600">
<img src="https://github.com/user-attachments/assets/62d654c2-9f22-4902-bdd4-cf94a467e82a" width="600">
<img src="https://github.com/user-attachments/assets/0de499c3-7137-4dc4-8c91-c7eb33756070" width="600">

### Open API Swagger UI

<img src="https://github.com/user-attachments/assets/56ad4ad0-b9c9-4bce-a48b-4ec2d60edd25" width="600">

---

## Setup

### Backend (FastAPI)

```bash
git clone <repository_url>
cd backend
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API runs on: `http://127.0.0.1:8000`

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

App runs on: `http://localhost:3000`

---

## Testing (pytest)

```bash
cd backend
pytest
```

---

## Docker Setup

### Backend

```bash
cd backend
docker build -t project-ml-backend .
docker run -d -p 8000:8000 --name project-ml-backend project-ml-backend
```

Backend accessible at: `http://localhost:8000`

---

## Project Status

✅ Completed — may receive new updates and improvements.

---

## Contributions

Contributions are welcome! Fork, submit issues, or open pull requests.

Special thanks to **Bayu Putra Pamungkas** for model support.

---

## License

Licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
