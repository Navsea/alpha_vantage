import pickle
import constants
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import mpld3

# define function and ticker
ticker = 'MSFT'
function = constants.TIME_SERIES_DAILY

# open a file, where you stored the pickled data
file = open('stockprice' + '_' + ticker + '_' + function, 'rb')

stockprice_df = pickle.load(file)

file.close()

# plot = stockprice_df['Close'].plot()
# plt.title('Intraday Times Series for the MSFT stock (1 min)')
# #plt.show()
# fig = plt.figure(1)

# sns.set_style("darkgrid")
# plot = sns.lineplot(data=stockprice_df['Close'])
# plot.set(ylabel="price", title=f"{ticker} Price Over Time");
# #plt.show()
# fig = plt.figure(1)

# you cannot use show for some reason
# html_str = mpld3.fig_to_html(fig)
# Html_file= open("index.html","w")
# Html_file.write(html_str)
# Html_file.close()

fig = px.line(stockprice_df['Close'])
fig.show()
# see https://plotly.com/python/interactive-html-export/
fig.write_html("index.html")


# CHECK THIS OUT
#https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g