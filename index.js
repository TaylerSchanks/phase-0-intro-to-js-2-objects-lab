const employee = {
  name: "Tayler",
  streetAddress: "Shelbyville",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const employeeTwo = { ...obj };

  employeeTwo[key] = value;

  return employeeTwo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(obj, key) {
  const employeeThree = { ...key };

  employeeThree[key];

  return employeeThree;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete employee[key];

  return employee;
}
