import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sb
import pickle

# ///////////////////////////////////////////////////////////
# FUNCTIONS FOR ALPHA VANTAGE
# ///////////////////////////////////////////////////////////
TIME_SERIES_INTRADAY = 'TIME_SERIES_INTRADAY'
TIME_SERIES_INTRADAY_EXTENDED = 'TIME_SERIES_INTRADAY_EXTENDED'
TIME_SERIES_DAILY = 'TIME_SERIES_DAILY'
TIME_SERIES_DAILY_ADJUSTED = 'TIME_SERIES_DAILY_ADJUSTED'
TIME_SERIES_WEEKLY = 'TIME_SERIES_WEEKLY'
TIME_SERIES_WEEKLY_ADJUSTED = 'TIME_SERIES_WEEKLY_ADJUSTED'
TIME_SERIES_MONTHLY = 'TIME_SERIES_MONTHLY'
TIME_SERIES_MONTHLY_ADJUSTED = 'TIME_SERIES_MONTHLY_ADJUSTED'

# ///////////////////////////////////////////////////////////
# TIME SERIES FOR STOCK DATA
# ///////////////////////////////////////////////////////////
ONEMIN = 'Time Series (1min)'
FIVEMIN = 'Time Series (5min)'
FIVETEENMIN = 'Time Series (15min)'
THIRTYMIN = 'Time Series (30min)'
HOUR = 'Time Series (60min)'
FIVEMIN = 'Time Series (5min)'
DAILY = 'Time Series (Daily)' 
WEEKLY = 'Weekly Time Series'
WEEKLY_ADJ = 'Weekly Adjusted Time Series'
MONTLY = 'Monthly Time Series'
MONTLY_ADJ = 'Monthly Adjusted Time Series'

# /////////////////////////////////////////////////////////
# query timeseries stock data of selected type ////////////
# /////////////////////////////////////////////////////////
def query_timeseries_data(func, symbol, outputsize='full', datatype='json', apikey='3KUJV3LYAVJV8VS1'):
    data = {
        "function": func, # Here you can put any of the 'funcs' above
        "symbol": symbol,
        "outputsize": outputsize, # (full) and (compact) are accepted
        "datatype": datatype,
        "apikey": apikey
    }
    return requests.get("https://www.alphavantage.co/query", data).json()

# /////////////////////////////////////////////////////////
# convert timeseries stock data of selected type to json //
# /////////////////////////////////////////////////////////
def get_timeseries_dataframe(json, type):
    df = pd.DataFrame.from_dict(json[type], orient= 'index')
    df.index =  pd.to_datetime(df.index, format='%Y-%m-%d')
    
    df = df.rename(columns={ '1. open': 'Open', '2. high': 'High', '3. low': 'Low', '4. close': 'Close', '5. volume': 'Volume'})
    df = df.astype({'Open': 'float64', 'High': 'float64', 'Low': 'float64','Close': 'float64','Volume': 'float64',})
    df = df[[ 'Open', 'High', 'Low', 'Close', 'Volume']]
    return df

# define function and ticker
ticker = 'MSFT'
function = TIME_SERIES_DAILY

# Now all you have to do is actually call the funcs
response_json = query_timeseries_data(function, ticker)
stockprice_df = get_timeseries_dataframe(response_json, DAILY)

# open a file, where you ant to store the data
file = open('stockprice' + '_' + ticker + '_' + function, 'wb')
pickle.dump(stockprice_df, file)
file.close()