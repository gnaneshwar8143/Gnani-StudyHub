import requests

url = "https://gnani-study-hub.vercel.app/assets/index-Bn-dJ9J9.js"
res = requests.get(url)

print("Status Code:", res.status_code)
content = res.text

if "At Task Time" in content:
    print("SUCCESS: 'At Task Time' option found in live Vercel JS bundle!")
else:
    print("WARNING: 'At Task Time' NOT found in JS bundle.")

if "10 Minutes Before" in content:
    print("SUCCESS: '10 Minutes Before' option found in live Vercel JS bundle!")
if "Morning (8:00 AM)" in content:
    print("SUCCESS: 'Morning (8:00 AM)' option found in live Vercel JS bundle!")
