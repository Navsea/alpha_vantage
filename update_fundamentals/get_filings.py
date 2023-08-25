from alpha_vantage.fundamentaldata import FundamentalData

fd = FundamentalData(key='3KUJV3LYAVJV8VS1')
data, _ = fd.get_income_statement_annual(symbol='IBM')

print(data)