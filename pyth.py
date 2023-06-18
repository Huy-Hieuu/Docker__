import requests

num = 500

url = "https://api.themoviedb.org/3/discover/movie?api_key=41c4b7faa3dc1822e456602f773a98ab&page=" + str(num);

# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Access the response content
    data = response.json()
    results = data['results']
    print(results)
else:
    print("Request was not successful. Status code:", response.status_code)
