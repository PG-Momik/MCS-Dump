import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('daily_climate_dataset.csv')
#Sn,Date,District,Latitude,Longitude,Precip,Pressure,Humidity_2m,RH_2m,Temp_2m,WetBulbTemp_2m,MaxTemp_2m,MinTemp_2m,TempRange_2m,EarthSkinTemp,WindSpeed_10m,MaxWindSpeed_10m,MinWindSpeed_10m,WindSpeedRange_10m,WindSpeed_50m,MaxWindSpeed_50m,MinWindSpeed_50m,WindSpeedRange_50m

df['Date']   = pd.to_datetime(df['Date'])
kathmandu_df = df[df['District'] == 'Kathmandu']

kathmandu_df['Year']  = kathmandu_df['Date'].dt.year
kathmandu_df['Month'] = kathmandu_df['Date'].dt.month
# print(kathmandu_df.head())

# I'm doing this because the data is historic daily data.
# Tara i want to visualize month by month. SO i need to get the average humitidy of each month of each year.
monthly_avg_humidity = kathmandu_df.groupby(['Year', 'Month'])['Humidity_2m'].mean().reset_index()
# print(monthly_avg_humidity.head())
#    Year  Month  Humidity_2m
# 0  1981      1     4.279355
# 1  1981      2     4.036429
# 2  1981      3     5.056452
# 3  1981      4     6.262667
# 4  1981      5    10.070645

monthly_avg_humidity_pivot = monthly_avg_humidity.pivot(index='Year', columns='Month', values='Humidity_2m')
# print(monthly_avg_humidity_pivot.head())
# Month        1         2         3         4          5          6          7          8          9          10        11        12
# Year                                                                                                                               
# 1981   4.279355  4.036429  5.056452  6.262667  10.070645  12.471667  16.802581  16.451613  14.559000   9.473548  6.000667  3.693871
# 1982   3.789355  4.214286  5.324839  6.028667   7.105161  12.133333  14.966452  16.186774  13.880667   8.638387  5.836667  3.550323
# 1983   2.751613  2.452857  3.205484  4.717333   7.760000   9.807000  15.431613  15.708710  14.234333   9.724839  4.903000  3.057419
# 1984   2.498387  2.651034  3.094516  4.269667   7.990000  14.452333  15.560323  15.763871  13.688333   9.703226  4.707333  3.497097
# 1985   3.454839  2.363929  2.819355  4.401667   6.745484  11.011333  15.009355  16.162581  14.650000  11.418710  7.015667  5.083871

plt.figure(figsize=(16, 10))

sns.heatmap(
    monthly_avg_humidity_pivot,
    annot=True, 
    cmap='YlGnBu',
    cbar_kws={'label': 'Average Humidity (%)'},
    linewidths=0.5, 
    linecolor='gray'  
)

plt.title('Historical Heatmap of Monthly Average Humidity for Kathmandu (1980-2019)', fontsize=16)
plt.xlabel('Month', fontsize=14)
plt.ylabel('Year', fontsize=14)

plt.tight_layout()

plt.savefig('kathmandu_humidity_heatmap.svg', dpi=300)