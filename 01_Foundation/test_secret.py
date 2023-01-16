import os

import secret_token

API_TOKEN = secret_token.decode(os.environ.get("API_TOKEN"))
