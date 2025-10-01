import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_predict_valid():
    payload = {
        "usia": 25,
        "durasi_tidur": 7,
        "kualitas_tidur": 8,
        "level_aktivitas_fisik": 70,
        "level_stres": 3,
        "denyut_jantung": 75,
        "langkah_harian": 5000,
        "sistolik": 120,
        "diastolik": 80,
        "jenis_kelamin": "Male",
        "pekerjaan": "Engineer",
        "kategori_bmi": "Normal"
    }
    response = client.post("/predict", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "gangguan_tidur" in data
    assert "label" in data
    assert "probability" in data


def test_predict_invalid():
    payload = {
        "usia": -1,
        "durasi_tidur": 8,
        "kualitas_tidur": 7,
        "level_aktivitas_fisik": 50,
        "level_stres": 4,
        "denyut_jantung": 70,
        "langkah_harian": 4000,
        "sistolik": 110,
        "diastolik": 70,
        "jenis_kelamin": "Female",
        "pekerjaan": "Teacher",
        "kategori_bmi": "Overweight"
    }
    response = client.post("/predict", json=payload)
    assert response.status_code == 422
