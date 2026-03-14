from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
import models, database
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="AgroSmart Pro API")

@app.get("/")
def read_root():
    return {"message": "Welcome to AgroSmart Pro API"}

# Basic placeholders for modules
@app.get("/weather")
def get_weather(location: str):
    return {
        "location": location,
        "temp": 28,
        "condition": "Sunny",
        "humidity": 45,
        "rain_chance": "10%"
    }

@app.get("/market-prices")
def get_market_prices():
    return [
        {"crop": "Wheat", "price": 2200, "trend": "up"},
        {"crop": "Maize", "price": 1950, "trend": "down"},
        {"crop": "Rice", "price": 3100, "trend": "stable"}
    ]

@app.get("/crops/info")
def get_crop_info(crop_type: str):
    crops_data = {
        "Maize": {
            "duration": "90-110 days",
            "season": "Kharif",
            "water": "Moderate",
            "fertilizer": "NPK 120:60:40"
        },
        "Wheat": {
            "duration": "120-140 days",
            "season": "Rabi",
            "water": "High",
            "fertilizer": "NPK 100:50:25"
        }
    }
    return crops_data.get(crop_type, {"error": "Crop info not found"})
