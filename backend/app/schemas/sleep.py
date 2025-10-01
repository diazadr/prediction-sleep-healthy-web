from pydantic import BaseModel, Field

class SleepInput(BaseModel):
    usia: float = Field(..., ge=0, description="Usia dalam tahun")
    durasi_tidur: float = Field(..., ge=0, le=24, description="Durasi tidur per hari (jam)")
    kualitas_tidur: float = Field(..., ge=0, le=10, description="Skor kualitas tidur (0-10)")
    level_aktivitas_fisik: float = Field(..., ge=0, le=100, description="Level aktivitas fisik (0-10)")
    level_stres: float = Field(..., ge=0, le=10, description="Level stres (0-10)")
    denyut_jantung: float = Field(..., ge=0, description="Detak jantung per menit")
    langkah_harian: float = Field(..., ge=0, description="Jumlah langkah harian")
    sistolik: float = Field(..., ge=0, description="Tekanan darah sistolik")
    diastolik: float = Field(..., ge=0, description="Tekanan darah diastolik")
    
    jenis_kelamin: str = Field(..., description="Jenis kelamin: Female atau Male")
    pekerjaan: str = Field(..., description="Pekerjaan (misal: Engineer, Teacher, dll.)")
    kategori_bmi: str = Field(..., description="Kategori BMI (Normal, Overweight, Obese, dsb.)")

class PredictionResult(BaseModel):
    gangguan_tidur: int
    probability: float | None
    label: str
