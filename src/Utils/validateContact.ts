export const validateContact = (contact: string): boolean => {
    return /^[1-9]\d{2}-\d{3}-\d{4}$/.test(contact);
  };
  