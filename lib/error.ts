export function getErrorMessage(error: any) {
    const validationErrors = error?.data?.error;
    if (Array.isArray(validationErrors) && validationErrors.length > 0) {
        return validationErrors[0].message
    }
    return error?.data?.message ?? "Something went wrong.";
}