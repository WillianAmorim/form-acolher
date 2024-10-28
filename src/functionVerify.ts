// utils/verifyQuestions.ts

export const verifyQuestions = (value: string): number => {
    if (value === 'S') {
        return 1;
    } else if (value === 'N') {
        return 3;
    } else {
        return 2;
    }
};
