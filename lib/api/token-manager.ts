class TokenManager {
    private accessToken: string | null = null;

    getAccessToken(): string | null {
        return this.accessToken
    };

    setAccessToken(token: string): void {
        this.accessToken = token;
    }

    clear(): void {
        this.accessToken = null
    }

    hasToken(): boolean {
        return !!this.accessToken
    }
}

export const tokenManager = new TokenManager();