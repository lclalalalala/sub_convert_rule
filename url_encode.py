import urllib.parse
import sys

# Receive URL as argument
url = sys.argv[1]

# URL encode the URL
encoded_url = urllib.parse.quote(url, safe="")

# Output encoded URL
print(encoded_url)
