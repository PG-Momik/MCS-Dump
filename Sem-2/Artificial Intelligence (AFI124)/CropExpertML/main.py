import os
from CropExpertSystemMLTrainer import CropExpertSystemMLTrainer
from CropExpertSystemML import CropExpertSystemML

from CropExpertSystemML import CropExpertSystemML

def main():
    model_file = 'crop_recommendation_model.pkl'

    if os.path.exists(model_file):
        print("Model file found. Using the trained model.")
        crop_expert = CropExpertSystemML()
        crop_expert.load_model()

        soil = int(input("Enter soil type (0: clay, 1: loam, 2: sandy, 3: black, 4: red): "))
        pH = float(input("Enter pH level (e.g., 6.5): "))
        rainfall = int(input("Enter rainfall level (0: low, 1: moderate, 2: high): "))
        temperature = int(input("Enter temperature (0: cool, 1: warm, 2: hot): "))

        recommended_crop = crop_expert.recommend_crop(soil, pH, rainfall, temperature)
        print(f"Recommended Crop: {recommended_crop}")

    else:
        print("Model file not found. Training a new model.")
        trainer = CropExpertSystemMLTrainer()
        trainer.train_and_save()

main()
