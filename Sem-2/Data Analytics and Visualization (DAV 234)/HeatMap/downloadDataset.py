import kagglehub
import os
import shutil

# Define the current working directory (where the script is run)
current_dir = os.path.dirname(os.path.realpath(__file__))

# Download the latest version of the dataset to the current directory
path = kagglehub.dataset_download("saimondahal/nepal-daily-climate-1981-2019", download_dir=current_dir)

# Print the path to the downloaded dataset
print("Path to dataset files:", path)

# Define the new file path
new_file_path = os.path.join(current_dir, 'daily_climate_dataset.csv')

# Rename the file
os.rename(path, new_file_path)

# Print the new file path
print("Dataset renamed to:", new_file_path)

