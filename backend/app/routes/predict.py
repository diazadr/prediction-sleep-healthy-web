from fastapi import APIRouter, HTTPException, Depends, Header
from pathlib import Path
import joblib
import pandas as pd
from app.schemas.sleep import SleepInput, PredictionResult
import os
from dotenv import load_dotenv

router = APIRouter()

MODEL_PATH = Path(__file__).resolve().parents[1] / "models" / "sleep_pipeline.pkl"

label_map = {
    0: "None",
    1: "Sleep Apnea",
    2: "Insomnia"
}

load_dotenv()

# API Key
API_KEY = os.getenv("API_KEY", "")
API_KEY_NAME = "X-API-Key"

def verify_api_key(x_api_key: str = Header(..., alias="X-API-Key")):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid or missing API Key")


try:
    model = joblib.load(MODEL_PATH)
except Exception as e:
    raise RuntimeError(f"Gagal load model dari {MODEL_PATH}: {e}")


# Endpointnya
@router.post("/predict", response_model=PredictionResult, dependencies=[Depends(verify_api_key)])
def predict(input: SleepInput):
    try:
        data_dict = input.dict()
        df = pd.DataFrame([data_dict])

        pred_label = int(model.predict(df)[0])

        prob = None
        if hasattr(model, "predict_proba"):
            proba_array = model.predict_proba(df)[0]
            prob = float(max(proba_array))

        label_name = label_map.get(pred_label, "Unknown")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {e}")

    return PredictionResult(
        gangguan_tidur=pred_label,
        probability=prob,
        label=label_name
    )
