# CropExpertMLTrainer.py
from sklearn.tree import DecisionTreeClassifier
import joblib
import pandas as pd

class CropExpertSystemMLTrainer:
    def __init__(self):
        self.model = None

    def load_and_preprocess_data(self):
        data = {
            'soil'       : ['clay', 'loam', 'sandy', 'black', 'red'],
            'pH'         : [6.5, 6.0, 5.5, 7.0, 6.0],
            'rainfall'   : ['moderate', 'high', 'low', 'moderate', 'moderate'],
            'temperature': ['cool', 'warm', 'hot', 'warm', 'hot'],
            'crop'       : ['Wheat', 'Rice', 'Millet', 'Cotton', 'Groundnut']
        }

        df                = pd.DataFrame(data)
        df['soil']        = df['soil'].map({'clay': 0, 'loam': 1, 'sandy': 2, 'black': 3, 'red': 4})
        df['rainfall']    = df['rainfall'].map({'low': 0, 'moderate': 1, 'high': 2})
        df['temperature'] = df['temperature'].map({'cool': 0, 'warm': 1, 'hot': 2})

        X = df[['soil', 'pH', 'rainfall', 'temperature']]
        y = df['crop']
        
        return X, y

    def train_model(self):
        X, y = self.load_and_preprocess_data()
        self.model = DecisionTreeClassifier()
        self.model.fit(X, y)

        joblib.dump(self.model, 'crop_recommendation_model.pkl')
        print("Model trained and saved successfully!")

    def train_and_save(self):
        self.train_model()
