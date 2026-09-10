export function validateEmail(email) {
  const value = email.trim();

  if (!value) {
    return "Email is required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    return "Please enter a valid email address.";
  }

  return "";
}

export function validateUsername(username) {
  const value = username.trim();

  if (!value) {
    return "Username is required.";
  }

  if (value.length < 3) {
    return "Username must be at least 3 characters.";
  }

  if (value.length > 30) {
    return "Username cannot exceed 30 characters.";
  }

  if (!/^[a-zA-Z0-9_]+$/.test(value)) {
    return "Username can contain only letters, numbers and underscores.";
  }

  return "";
}

export function validateFullName(name) {
  const value = name.trim();

  if (!value) {
    return "Full name is required.";
  }

  if (value.length < 2) {
    return "Please enter your full name.";
  }

  if (value.length > 100) {
    return "Full name cannot exceed 100 characters.";
  }

  if (!/^[a-zA-ZÀ-ÿ\s.'-]+$/.test(value)) {
    return "Full name contains invalid characters.";
  }

  return "";
}

export function validateOtp(otp) {
  if (!otp) {
    return "OTP is required.";
  }

  if (!/^\d{6}$/.test(otp)) {
    return "OTP must contain exactly 6 digits.";
  }

  return "";
}
