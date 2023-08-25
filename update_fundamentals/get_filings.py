from alpha_vantage.alpha_vantage import AlphaVantage
from alpha_vantage.fundamentaldata import FundamentalData

#fd = FundamentalData(key='3KUJV3LYAVJV8VS1')
#data, _ = fd.get_income_statement_annual(symbol='IBM')

result = AlphaVantage._output_format('_call_api_on_func')

print(result)