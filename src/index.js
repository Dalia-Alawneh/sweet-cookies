class SweetCookie {
    static instance = null;
    static getInstance() {
        if (!SweetCookie.instance) {
            SweetCookie.instance = new SweetCookie();
        }
        return SweetCookie.instance;
    }

    set = (name, value, expiresIn) => {
        const timeRegex = /^(\d+)([smhd])$/;
        const matches = expiresIn.match(timeRegex);
        if (!matches) {
            console.error("Invalid time format. Please use a valid format like '4h', '30m', etc.");
            return;
        }
        const [, timeValue, timeUnit] = matches;
        const timeMultiplier = { s: 1000, m: 60000, h: 3600000, d: 86400000 };
        const expirationMs = timeValue * timeMultiplier[timeUnit];
        const date = new Date(Date.now() + expirationMs);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    };

    get = (name) => {
        const cookieName = `${name}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return null;
    }

    remove = (name) => {
        const date = new Date(Date.now() - 1);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=; ${expires}; path=/`;
    };
    
}

const sweetCookie = new SweetCookie()