const guide = {
  slug: "python-stock-fetcher",
  title: "Python Stock Data Fetcher",
  description: "A beginner-friendly project to fetch and analyze real-time market data using Python.",
  sections: [
    {
      id: "project-overview",
      title: "Project Overview",
      content: `
        <p>Before you can build complex trading algorithms, you need to understand how to get and manipulate financial data. This project introduces you to Python, API requests, and data analysis using the Pandas library.</p>
        <p><strong>Goal:</strong> Build a script that fetches the last 30 days of stock data for a given ticker symbol (e.g., AAPL) and plots the closing price.</p>
      `,
    },
    {
      id: "what-you-need",
      title: "What You'll Need",
      content: `
        <ul>
          <li><strong>Python 3</strong> installed on your machine.</li>
          <li>A code editor like VS Code or a Jupyter Notebook setup.</li>
          <li>Basic knowledge of variables, functions, and installing packages.</li>
        </ul>
      `,
    },
    {
      id: "getting-the-data",
      title: "Getting the Data",
      content: `
        <p>We'll use the popular <code>yfinance</code> package, which pulls historical market data from Yahoo Finance without requiring an API key.</p>
        
        <div class="guide-callout guide-callout-info">
          <strong>Step 1:</strong> Install the required packages via your terminal or command prompt:
          <br/><br/>
          <code>pip install yfinance pandas matplotlib</code>
        </div>
        
        <p>Next, write a simple script to pull data for Apple (AAPL):</p>
        
        <pre><code class="language-python">import yfinance as yf
import pandas as pd

# Define the ticker symbol
ticker_symbol = 'AAPL'

# Get data on this ticker
ticker_data = yf.Ticker(ticker_symbol)

# Get the historical prices for this ticker
history_df = ticker_data.history(period='1mo')

print(history_df.head())
</code></pre>
        <p>This snippet queries the API and returns a Pandas DataFrame containing the Open, High, Low, Close, and Volume for each day.</p>
      `,
    },
    {
      id: "plotting-the-data",
      title: "Plotting the Data",
      content: `
        <p>Data is easier to understand visually. Let's add a basic plot using <code>matplotlib</code> to show the stock's closing price over time.</p>
        
        <pre><code class="language-python">import matplotlib.pyplot as plt

# Filter to just the 'Close' column
history_df['Close'].plot(title=f'{ticker_symbol} Closing Price - Last 1 Month')

# Add labels
plt.xlabel('Date')
plt.ylabel('Closing Price (USD)')
plt.grid(True)

# Show the plot
plt.show()
</code></pre>
      `,
    },
    {
      id: "next-steps",
      title: "Next Steps to Improve Your Resume",
      content: `
        <p>Once you get this script working, you can expand it into a real project worthy of your resume!</p>
        
        <div class="guide-callout guide-callout-good">
          <strong>Resume Builders:</strong>
          <ul>
            <li>Modify the script to accept user input for the ticker symbol and date range.</li>
            <li>Calculate and plot the <strong>Daily Return Percentage</strong> to visualize the stock's volatility.</li>
            <li>Export the fetched DataFrame to a CSV or Excel file using <code>history_df.to_csv('data.csv')</code>.</li>
            <li>Wrap the code in a simple command-line interface (CLI) using Python's <code>argparse</code> module.</li>
          </ul>
        </div>
      `,
    }
  ],
};

export default guide;
