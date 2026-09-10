export function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);

  if (Number.isNaN(birthDate.getTime())) {
    return null;
  }

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function validateDateOfBirth(dateOfBirth) {
  if (!dateOfBirth) {
    return {
      valid: false,
      error: "Date of birth is required.",
    };
  }

  const birthDate = new Date(dateOfBirth);

  if (Number.isNaN(birthDate.getTime())) {
    return {
      valid: false,
      error: "Please enter a valid date of birth.",
    };
  }

  const today = new Date();

  if (birthDate > today) {
    return {
      valid: false,
      error: "Date of birth cannot be in the future.",
    };
  }

  const age = calculateAge(dateOfBirth);

  if (age < 18) {
    return {
      valid: false,
      error: "You must be at least 18 years old.",
    };
  }

  return {
    valid: true,
    age,
  };
}
