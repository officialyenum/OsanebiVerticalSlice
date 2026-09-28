
export class KVSession {
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;

    constructor(
        id: string,
        userId: string,
        expiresAt: Date,
        createdAt: Date = new Date()
    ) {
        this.id = id;
        this.userId = userId;
        this.expiresAt = expiresAt;
        this.createdAt = createdAt;
    }

    isValid(): boolean {
        // Invalid/missing expiration date
        const now = Date.now();
        const expiresAt = this.expiresAt?.getTime();
        if (!expiresAt || Number.isNaN(expiresAt)) {
            return false;
        }
        // Session has expired
        if (expiresAt <= now) {
            return false;
        }
        return true;
    }

    isExpired(): boolean {
        return !this.isValid();
    }
}