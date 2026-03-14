from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, DateTime, Text
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    farm_size = Column(Float)
    location = Column(String)
    soil_type = Column(String)

    fields = relationship("Field", back_populates="owner")

class Field(Base):
    __tablename__ = "fields"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    area = Column(Float)
    user_id = Column(Integer, ForeignKey("users.id"))
    
    owner = relationship("User", back_populates="fields")
    crops = relationship("Crop", back_populates="field")

class Crop(Base):
    __tablename__ = "crops"

    id = Column(Integer, primary_key=True, index=True)
    field_id = Column(Integer, ForeignKey("fields.id"))
    crop_type = Column(String) # Maize, Wheat, etc.
    sowing_date = Column(DateTime, default=datetime.utcnow)
    status = Column(String) # Growing, Harvested
    
    field = relationship("Field", back_populates="crops")
    activities = relationship("FarmActivity", back_populates="crop")

class FarmActivity(Base):
    __tablename__ = "farm_activities"

    id = Column(Integer, primary_key=True, index=True)
    crop_id = Column(Integer, ForeignKey("crops.id"))
    activity_type = Column(String) # Irrigation, Fertilizer, Spray
    description = Column(Text)
    date = Column(DateTime, default=datetime.utcnow)
    
    crop = relationship("Crop", back_populates="activities")
