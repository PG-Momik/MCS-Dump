class CropExpertSystem:
    def __init__(self):
        self.rules = [
            {"soil": "clay",  "pH": (6.0, 7.5), "rainfall": "moderate", "temperature": "cool", "crop": "Wheat"},
            {"soil": "loam",  "pH": (5.5, 7.0), "rainfall": "high",     "temperature": "warm", "crop": "Rice"},
            {"soil": "sandy", "pH": (5.0, 6.5), "rainfall": "low",      "temperature": "hot",  "crop": "Millet"},
            {"soil": "black", "pH": (6.5, 8.0), "rainfall": "moderate", "temperature": "warm", "crop": "Cotton"},
            {"soil": "red",   "pH": (5.5, 7.0), "rainfall": "moderate", "temperature": "hot",  "crop": "Groundnut"}
        ]
    
    def recommend_crop(self, soil, pH, rainfall, temperature):
        for rule in self.rules:
            if (soil == rule["soil"] and
                rule["pH"][0] <= pH <= rule["pH"][1] and
                rainfall == rule["rainfall"] and
                temperature == rule["temperature"]):
                return rule['crop']

        return "No suitable crop found based on given conditions."
