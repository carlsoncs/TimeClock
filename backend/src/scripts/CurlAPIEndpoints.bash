#!/bin/bash

BASE_URL="http://localhost:3000/employees"

# Test employees array
declare -a testEmployees=(
  '{"name": "John Doe", "badgeId": "12345", "role": "Developer"}'
  '{"name": "Jane Smith", "badgeId": "12346", "role": "Designer"}'
  '{"name": "Alice Johnson", "badgeId": "12347", "role": "Manager"}'
  '{"name": "Bob Brown", "badgeId": "12348", "role": "Developer"}'
  '{"name": "Charlie Davis", "badgeId": "12349", "role": "Tester"}'
  '{"name": "Diana Evans", "badgeId": "12350", "role": "Developer"}'
  '{"name": "Eve Foster", "badgeId": "12351", "role": "Designer"}'
  '{"name": "Frank Green", "badgeId": "12352", "role": "Manager"}'
  '{"name": "Grace Harris", "badgeId": "12353", "role": "Tester"}'
  '{"name": "Hank Irving", "badgeId": "12354", "role": "Developer"}'
)

# Function to create employees
# Function to create employees only if they don't exist
create_employees() {
  echo "Creating employees..."
  for employee in "${testEmployees[@]}"; do
    badgeId=$(echo $employee | jq -r '.badgeId')
    echo "Checking if employee with badgeId $badgeId exists..."
    response=$(curl -s -o /dev/null -w "%{http_code}" -X GET "$BASE_URL?badgeId=$badgeId")

    if [ "$response" -eq 404 ]; then
      echo "Employee with badgeId $badgeId not found. Creating..."
      curl -X POST "$BASE_URL" \
        -H "Content-Type: application/json" \
        -d "$employee"
      echo -e "\n"
    else
      echo "Employee with badgeId $badgeId already exists. Skipping..."
    fi
  done
}

# Function to fetch all employees
fetch_employees() {
  echo "Fetching all employees..."
  curl -X GET "$BASE_URL"
  echo -e "\n"
}

# Function to fetch a single employee
fetch_employee() {
  local id=$1
  echo "Fetching employee with ID $id..."
  curl -X GET "$BASE_URL/$id"
  echo -e "\n"
}

# Function to update an employee
update_employee() {
  local id=$1
  echo "Updating employee with ID $id..."
  curl -X PUT "$BASE_URL/$id" \
    -H "Content-Type: application/json" \
    -d '{"role": "Updated Role"}'
  echo -e "\n"
}

# Function to delete an employee
delete_employee() {
  local id=$1
  echo "Deleting employee with ID $id..."
  curl -X DELETE "$BASE_URL/$id"
  echo -e "\n"
}

# Run tests
create_employees
fetch_employees
fetch_employee 1
update_employee 1
fetch_employee 1
delete_employee 1
fetch_employees
