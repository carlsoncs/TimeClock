#!/bin/bash

BASE_URL="http://localhost:3000"
LOGIN_ENDPOINT="/auth/login"
EMPLOYEES_ENDPOINT="/employees"

# Test credentials
USERNAME="test"
PASSWORD="password"

# Login to get token
echo "Logging in to get token..."
TOKEN=$(curl -s -X POST "$BASE_URL$LOGIN_ENDPOINT" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$USERNAME\", \"password\": \"$PASSWORD\"}" | jq -r '.access_token')

if [ "$TOKEN" == "null" ] || [ -z "$TOKEN" ]; then
  echo "Failed to log in! Please check your credentials or backend configuration."
  exit 1
fi

echo "Token: $TOKEN"

# Fetch employees
echo "Fetching employees..."
EMPLOYEES=$(curl -s -X GET "$BASE_URL$EMPLOYEES_ENDPOINT" \
  -H "Authorization: Bearer $TOKEN")

echo "Employees Response:"
echo "$EMPLOYEES"

# Add additional operations here if needed, for example:
# - Create an employee
# - Update employee details
# - Delete an employee

# Exit script
echo "Test completed."
