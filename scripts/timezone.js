(() => document.addEventListener("DOMContentLoaded", () => {
    const timezoneElement = document.getElementById("timezone");

    if (timezoneElement) {
        const localDate = new Date();
        const timezoneOffsetMinutes = localDate.getTimezoneOffset();
        const timezoneOffsetMillis = (timezoneOffsetMinutes * 60_000);

        const utcTime = new Date(localDate.getTime() + timezoneOffsetMillis);

        const brtTime = new Date(utcTime - 10_800_000); // hardcoding that 🦆 it should equal -03

        timezoneElement.textContent = localDate.getTimezoneOffset() === 180 ? 'we have same timezone!!!'
            : `my 
        ${brtTime.getHours().toString().padStart('2', '0')}:${brtTime.getMinutes().toString().padStart('2', '0')}
         is your 
         ${localDate.getHours().toString().padStart('2', '0')}:${localDate.getMinutes().toString().padStart('2', '0')}`;
    }
}))();