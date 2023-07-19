const setCookie = (name, value, expiresIn) => {
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
