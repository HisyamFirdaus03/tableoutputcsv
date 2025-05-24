# Table Output Assessment

This web-based project reads data from a CSV file (`Table_input.csv`), parses it using JavaScript, and dynamically displays the results in two HTML tables.

## 📋 Features

- Fetches and reads data from a CSV file asynchronously.
- Parses key-value pairs from the CSV.
- Displays the data in:
  - **Table 1:** Raw key-value data from the CSV.
  - **Table 2:** Calculated results based on selected values (Alpha, Beta, Charlie).
- Includes basic error handling and clean UI with CSS styling.

## 📁 Project Structure


## 🧠 Calculations Explained

- **Alpha** = A5 + A20  
- **Beta** = A15 ÷ A7  
- **Charlie** = A13 × A12  

These values are displayed in **Table 2** after being extracted and computed from the CSV data.

## 🛠 How to Use

1. **Clone or download** the project folder.
2. Make sure the file `Table_input.csv` is present in the same directory as `index.html`.
3. Open a local web server such as Apache in XAMPP or Laragon.
4. Open `index.html` in the web browser.
5. The tables will load automatically when the page loads.

## 🧪 Example CSV Format
Index,Value
A5,10
A7,2
A12,3
A13,4
A15,6
A20,20

> Make sure the CSV uses proper formatting with no missing values to ensure accurate results.

## 💻 Technologies Used

- HTML
- CSS
- JavaScript (ES6)

## 🚨 Notes

- This project uses the Fetch API, so it **may not work directly if opened from the file system (`file://`) due to CORS restrictions**. Use a local server (e.g., VSCode Live Server, Python's HTTP server, etc.) to test it properly.



