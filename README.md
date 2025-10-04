# Sleep Disorder Prediction Platform

![Project Status](https://img.shields.io/badge/status-in%20development-yellow) [![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

This project is a **machine learning-powered web application** that predicts potential sleep disorders based on lifestyle and health data. The system integrates a **Next.js frontend** with a **FastAPI backend** to provide an interactive, real-time prediction service.

---

## Dataset

Dataset used: [Sleep Health and Lifestyle Dataset](https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset) from Kaggle. It contains lifestyle and health indicators that influence sleep quality, used to train and evaluate the prediction model.

---

## Technologies Used

* **Python 3.11**: Backend logic and ML model integration.
* **FastAPI**: High-performance backend API framework.
* **Pydantic**: Data validation and schema management.
* **Joblib**: Model serialization and loading.
* **scikit-learn / LightGBM**: Machine learning models.
* **Next.js (React)**: Frontend framework for building a modern UI.
* **React Three Fiber**: For 3D and visual rendering.
* **shadcn/ui**: Prebuilt UI components with customization support.
* **TailwindCSS**: Utility-first CSS framework for styling.
* **Framer Motion**: Animation library for smooth and interactive UI transitions.
* **Zod**: Type-safe schema validation on the frontend.

---

## Features

### Frontend

* **User-Friendly Form UI**: Clean and responsive design with shadcn/ui and TailwindCSS.
* **Form Validation**: Using Zod with React Hook Form.
* **Interactive Animations**: Powered by Framer Motion.
* **3D Visuals & Effects**: Implemented with React Three Fiber.
* **Dark Mode Support**: via next-themes.

### Backend

* **REST API**: Built with FastAPI.
* **Form Validation**: Using Pydantic for input schemas.
* **Secure API**: API key authentication support.
* **Environment Management**: Handled with python-dotenv.

### Machine Learning Model

* **Preprocessing**: Data handling with Pandas & Scikit-learn.
* **Prediction**: Sleep disorder classification (None, Insomnia, Sleep Apnea).
* **Model Deployment**: Serialized with Joblib, served via FastAPI.

---

## Demo

* **Landing Page**
* **Prediction Form**
* **Prediction Result**

(Screenshots to be added)

---

## Setup

### Backend (FastAPI)

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd backend
   ```

2. Create virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate   # Mac/Linux
   venv\Scripts\activate      # Windows
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run FastAPI server:

   ```bash
   uvicorn app.main:app --reload
   ```

   API runs on `http://127.0.0.1:8000`

### Frontend (Next.js)

1. Navigate to frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

   App runs on `http://localhost:3000`

---

### Testing (pytest)

1. Navigate to backend folder:

   ```bash
   cd backend
   pytest
   ```

---

## Docker Setup

### Backend

```bash
cd backend
# Build the image
docker build -t project-ml-backend .

# Run the container
docker run -d -p 8000:8000 --name project-ml-backend project-ml-backend
```

Backend will be accessible at `http://localhost:8000`.

---

## Project Status

This project is **completed** and may be updated with new features and improvements.

---

## Contributions

Contributions are welcome! Feel free to fork the repository, submit issues, or open pull requests.

Thanks to **Bayu Putra Pamungkas** for support with the model.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
