export const containsNumbers = (value: string): boolean => {
    return /\d/.test(value);
}

export const containsUpperCase = (value: string): boolean => {
    return /[A-Z]/.test(value);
}

export const containsSpecialChar = (value: string): boolean => {
    return /[!@#$%^&*~`?]/.test(value);
}

export const passwordIsNotTooShort =(value: string): boolean=> value.length > 5;

export const passwordIsSecure = (value: string): boolean =>{
    return passwordIsNotTooShort(value) && containsNumbers(value) && containsUpperCase(value) && containsSpecialChar(value);
}