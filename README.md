# streamlit
A data visulation framework used by snowflake.

## Setup
```
pip install streamlit
```

### Validate Setup
This will open up a new tab in a web browser with the web application.
```
streamlit hello
```

## app.py
An example custom streamlit application.
This will open up a new tab in a browser with the web application.
```
streamlit run app.py
```

## app.html
This is an example streamlit application with html.
This will open up a tab in a browser with the web application.
```
# macOS
open app.html

# windows
./app.html
```

## streamlit-react
This is an example react streamlit application.
This will open up the application in a browser.
```
cd streamlit-react
npm run dev
```

## Troubleshooting
To run the html or react application ensure the streamlit server is running.
Ensure that the host and port match in the `<iframe>` for the html or react application.
```
streamlit run app.py
```
