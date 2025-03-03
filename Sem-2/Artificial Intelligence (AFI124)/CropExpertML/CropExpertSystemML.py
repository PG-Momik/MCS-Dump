# CropExpertML.py
import joblib
import pandas as pd

class CropExpertSystemML:
    def __init__(self):
        self.model = None

    def load_model(self):
        try:
            self.model = joblib.load('crop_recommendation_model.pkl')
            print("Model loaded successfully!")
        except FileNotFoundError:
            print("Model file not found. Please train the model first.")
            self.model = None

    def recommend_crop(self, soil, pH, rainfall, temperature):
        if self.model is None:
            return "Model is not available."

        input_data = [[soil, pH, rainfall, temperature]]

        # Predict the crop
        prediction = self.model.predict(input_data)
        return prediction[0]
