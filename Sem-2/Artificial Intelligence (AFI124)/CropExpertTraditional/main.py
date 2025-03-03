from experta import Fact
from CropExpertSystem import CropExpertSystem
from CropExpertSystemFact import CropExpertSystemFact

def get_user_input():
    soil_type         = input("Enter soil type (clay/loam/sandy/black/red): ").strip().lower()
    pH_level          = float(input("Enter soil pH level (e.g., 6.5): "))
    rainfall_level    = input("Enter rainfall level (low/moderate/high): ").strip().lower()
    temperature_level = input("Enter temperature (cool/warm/hot): ").strip().lower()

    return soil_type, pH_level, rainfall_level, temperature_level

def get_crop_recommendation_from_expert_system_1(soil, pH, rainfall, temperature):
    expert_system_1 = CropExpertSystem()
    return expert_system_1.recommend_crop(soil, pH, rainfall, temperature)

def get_crop_recommendation_from_expert_system_2(soil, pH, rainfall, temperature):
    expert_system_2 = CropExpertSystemFact()
    expert_system_2.reset()

    expert_system_2.declare(Fact(soil=soil))
    expert_system_2.declare(Fact(pH=pH))
    expert_system_2.declare(Fact(rainfall=rainfall))
    expert_system_2.declare(Fact(temperature=temperature))

    expert_system_2.run()

    for fact in expert_system_2.facts.values():
        if isinstance(fact, Fact) and "crop" in fact:
            return fact["crop"]

    return "No suitable crop found based on given conditions."

# Main program starts here
soil_type, pH_level, rainfall_level, temperature_level = get_user_input()

recommendation_1 = get_crop_recommendation_from_expert_system_1(soil_type, pH_level, rainfall_level, temperature_level)
recommendation_2 = get_crop_recommendation_from_expert_system_2(soil_type, pH_level, rainfall_level, temperature_level)

print(f"Recommended Crop By expert 1: {recommendation_1}")
print(f"Recommended Crop By expert 2: {recommendation_2}")
